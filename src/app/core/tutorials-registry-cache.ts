import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {PatchDefinition} from "./patch-definition";
import {Http} from "@angular/http";
import {parseMultiPatch} from "git-patch-parser";

function capitalizeFirstLetter(message) {
  return message.charAt(0).toUpperCase() + message.slice(1);
}

function prepareSummary(message) {
  return capitalizeFirstLetter(message.trim());
}

function parseOutStepNumberAndComment(arr) {
  arr.forEach((parsedPatch : any) => {
    let splitMessage = parsedPatch.message.split(":");

    if (splitMessage.length > 1) {
      let stepNumber = splitMessage[0].split(" ")[1];

      if (!stepNumber) {
        stepNumber = splitMessage[0].split(" ")[0];
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

@Injectable()
export class TutorialRegistryCache {
  private cache: Map<string, PatchDefinition>;

  constructor(private http: Http) {
    this.cache = new Map();
  }

  set(id: string, patch: PatchDefinition): PatchDefinition {
    this.cache.set(id, patch);

    return patch;
  }

  count() {
    return this.cache.size;
  }

  getObject(id: string): PatchDefinition {
    if (this.cache.has(id)) {
      return this.cache.get(id);
    }
    else {
      return;
    }
  }

  get(id: string, fallbackUrl?: string): Observable<PatchDefinition> {
    if (this.cache.has(id)) {
      return Observable.of(this.cache.get(id));
    }
    else {
      let obs = this.http
        .get(fallbackUrl)
        .map(res => res.text())
        .map(parseMultiPatch)
        .map(parseOutStepNumberAndComment)
        .map(doMapping);

      obs.subscribe((patch: PatchDefinition) => {
        this.set(id, patch);
      });

      return obs;
    }
  }
}