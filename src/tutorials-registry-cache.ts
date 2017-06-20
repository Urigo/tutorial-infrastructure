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

@Injectable()
export class TutorialRegistryCache {
  constructor(private http: Http) {
  }

  load(id: string, revision: string, tutorialData: TutorialDefinition): Observable<TutorialBundle> {
    if (cache[id + '_' + revision]) {
      return Observable.of(cache[id + '_' + revision]);
    } else {
      const rootUrl =
        'https://api.github.com/repos/' + tutorialData.gitHub + '/commits?path=/.tortilla/manuals/templates/root.tmpl&sha=' + revision;
      const alternativeRootUrl =
        'https://api.github.com/repos/' + tutorialData.gitHub + '/commits?path=/manuals/templates/root.md.tmpl&sha=' + revision;

      return this.http.get(rootUrl)
        .map(res => res.json())
        .map(res => res && res[0] && res[0].sha ? res[0].sha : null)
        .flatMap(res => res === null ?
          this.http.get(alternativeRootUrl).do(() => console.log('Loading legacy', alternativeRootUrl)).map(res => res.json())
            .map(res => res && res[0] && res[0].sha ? res[0].sha : null) :
          Observable.of(res))
        .flatMap(firstCommitId => {
          if (!firstCommitId) {
            throw new Error('Unable to find first commit with root.tmpl modification!');
          }

          const url = 'https://github.com/' + tutorialData.gitHub + '/compare/' + firstCommitId + '...' + revision + '.patch';

          console.log('Will load path from URL: ', url);

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
