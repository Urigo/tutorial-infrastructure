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
    },
    {
      apiTitle: "MongoObservable.Collection",
      filePath: "dist/minimongo-observable/observable-collection.js"
    }
  ],
  versions: [
    {
      name: "latest",
      revision: "5fd5265f14cc01d2535f9b4d4bf950adb125af06"
    },
    {
      name: "0.6.0",
      revision: "0a59100961c6a7e01fee69f6f335cd901d735568",
      exclude: ["MeteorObservable", "MongoObservable.Collection"]
    }
  ]
};