import {ApiStaticDefinition} from "../core/api-definition";

export const ANGULAR1_METEOR_API_REFERENCE : ApiStaticDefinition = {
  apiRepository: "Urigo/angular2-meteor",
  apis: [
    {
      version: "1.2.0",
      ref: "1.2.2"
    },
    {
      version: "1.2.1",
      ref: "1.2.2"
    },
    {
      version: "1.2.2",
      files: [
        {
          name: "$meteor.collection",
          urlName: "meteorCollection",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.meteorCollection.md"
        },
        {
          name: "AngularMeteorCollection",
          urlName: "AngularMeteorCollection",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.AngularMeteorCollection.md"
        },
        {
          name: "$meteor.object",
          urlName: "meteorObject",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.meteorObject.md"
        },
        {
          name: "AngularMeteorObject",
          urlName: "AngularMeteorObject",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.AngularMeteorObject.md"
        },
        {
          name: "$meteor.subscribe",
          urlName: "subscribe",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.subscribe.md"
        },
        {
          name: "$meteor.call",
          urlName: "methods",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.methods.md"
        },
        {
          name: "User Authentication",
          urlName: "auth",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.auth.md"
        },
        {
          name: "$scope.getReactively",
          urlName: "getReactively",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.getReactively.md"
        },
        {
          name: "blaze-template directive",
          urlName: "blaze-template",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.blaze-template.md"
        },
        {
          name: "CollectionFS",
          urlName: "files",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.collectionfs.md"
        },
        {
          name: "$meteorUtils",
          urlName: "utils",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.utils.md"
        },
        {
          name: "$meteor.camera",
          urlName: "camera",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.camera.md"
        },
        {
          name: "$meteor.session",
          urlName: "session",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.session.md"
        },
        {
          name: "File Extensions",
          urlName: "ngFileExtension",
          markdownFilePath: "/assets/static-api-reference/1.2.2/api.ngFileExtension.md"
        }
      ]
    }
  ]
};