import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TutorialDefinition, TutorialBundle } from './tutorial-definition';
import { parseMultiPatch } from './patch-parser';

function capitalizeFirstLetter(message) {
  return message.charAt(0).toUpperCase() + message.slice(1);
}

function prepareSummary(message) {
  return capitalizeFirstLetter(message.trim());
}

function parseOutStepNumberAndComment(arr) {
  arr.forEach((parsedPatch: any) => {
    let splitMessage = parsedPatch.message.split(':');

    if (splitMessage.length > 1) {
      let stepNumber = splitMessage[0].split(' ')[1];

      if (!stepNumber) {
        stepNumber = splitMessage[0].split(' ')[0];
      }

      parsedPatch.stepNumber = stepNumber.trim();

      if (splitMessage[1]) {
        parsedPatch.summary = prepareSummary(splitMessage[1]);
      }
    }
  });

  return arr;
}

function doMapping(parsedData) {
  let stepToPatch = {};

  parsedData.forEach((parsedPatch) => {
    stepToPatch[parsedPatch.stepNumber] = parsedPatch;
  });

  return stepToPatch;
}

let cache: { [tutprialId: string]: TutorialBundle } = {};


const CLIENT_ID = process.env.CLIENT_ID || null;
const CLIENT_SECRET = process.env.CLIENT_SECRET || null;

const withAuth = url => {
  if (CLIENT_ID && CLIENT_SECRET) {
    return `${url}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
  }

  return url;
};

@Injectable()
export class TutorialRegistryCache {
  constructor(private http: Http) {
  }

  load(id: string, revision: string, tutorialData: TutorialDefinition): Observable<TutorialBundle> {
    if (cache[id + '_' + revision]) {
      return Observable.of(cache[id + '_' + revision]);
    } else {
      const rootUrl = withAuth(
        'https://api.github.com/repos/' + tutorialData.gitHub + '/commits?path=/.tortilla/manuals/templates/root.tmpl&sha=' + revision);
      const alternativeRootUrl = withAuth(
        'https://api.github.com/repos/' + tutorialData.gitHub + '/commits?path=/manuals/templates/root.md.tmpl&sha=' + revision);
      const alternativeRootUrl2 = withAuth(
        'https://api.github.com/repos/' + tutorialData.gitHub + '/commits?path=/manuals/templates/root.md&sha=' + revision);

      const alt1 = res => res === null ?
        this.http.get(alternativeRootUrl).do(() => console.log('Loading legacy remote URL', alternativeRootUrl)).map(res => res.json())
          .map(res => res && res[0] && res[0].sha ? res[0].sha : null) :
        Observable.of(res);

      const alt2 = res => res === null ?
        this.http.get(alternativeRootUrl2).do(() => console.log('Loading legacy remote URL', alternativeRootUrl2)).map(res => res.json())
          .map(res => res && res[0] && res[0].sha ? res[0].sha : null) :
        Observable.of(res);

      console.log('Loading remote first commit URL: ', rootUrl);

      return this.http.get(rootUrl)
        .map(res => res.json())
        .map(res => res && res[0] && res[0].sha ? res[0].sha : null)
        .catch(() => alt1(null))
        .catch(() => alt2(null))
        .flatMap(res => alt1(res))
        .catch(() => alt2(null))
        .flatMap(res => alt2(res))
        .flatMap(firstCommitId => {
          if (!firstCommitId) {
            throw new Error('Unable to find first commit with root.tmpl or root.md modification!');
          }

          const url = 'https://github.com/' + tutorialData.gitHub + '/compare/' + firstCommitId + '...' + revision + '.patch';

          console.log('Will load patch from URL: ', url);

          return this.http.get(url);
        })
        .map(res => res['text']())
        .map(parseMultiPatch)
        .map(parseOutStepNumberAndComment)
        .map(doMapping)
        .map(parsedTutorial => {
          let cacheItem = <TutorialBundle>{
            steps: parsedTutorial,
            tutorial: tutorialData
          };

          cache[id + '_' + revision] = cacheItem;

          return cacheItem;
        });
    }
  }
}
