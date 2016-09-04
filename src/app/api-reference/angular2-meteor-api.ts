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
    },
    {
      apiTitle: "ObservableCursor",
      filePath: "dist/minimongo-observable/observable-cursor.js"
    },
    {
      apiTitle: "bootstrap",
      filePath: "dist/bootstrap.js",
      apiRepository: "Urigo/angular2-meteor-auto-bootstrap",
      revision: "master"
    }
  ],
  versions: [
    {
      name: "latest",
      revision: "6e160958ac163fe476ef11548e54d216d6c20e1a",
      exclude: ["bootstrap"]
    },
    {
      name: "0.6.0",
      revision: "0a59100961c6a7e01fee69f6f335cd901d735568",
      exclude: ["MeteorObservable", "MongoObservable.Collection", "ObservableCursor"]
    },
    {
      name: "0.4.2",
      revision: "0a59100961c6a7e01fee69f6f335cd901d735568",
      exclude: ["MeteorObservable", "MongoObservable.Collection", "ObservableCursor"]
    }
  ]
};