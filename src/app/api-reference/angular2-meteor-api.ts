import {ApiDefinition} from "../core/api-definition";

export const ANGULAR2_METEOR_API_REFERENCE : ApiDefinition = {
  apiRepository: "Urigo/angular2-meteor",
  files: [
    {
      apiTitle: "MeteorComponent",
      filePath: "dist/meteor_component.js"
    },
    {
      apiTitle: "MeteorObservable",
      filePath: "dist/minimongo-observable/meteor-observable.js"
    }
  ],
  versions: [
    {
      name: "latest",
      revision: "11af5f48f00e16b0c9367743d20922753b799f41"
    },
    {
      name: "0.6.0",
      revision: "0a59100961c6a7e01fee69f6f335cd901d735568",
      exclude: ["MeteorObservable"]
    }
  ]
};