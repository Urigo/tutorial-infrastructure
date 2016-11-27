export interface ApiFile {
  apiTitle: string;
  filePath?: string;
  apiRepository?: string;
  revision?: string;
  mdFile?: string;
}

export interface ApiVersion {
  name: string;
  visibleName?: string;
  revision: string;
  exclude?: Array<string>;
}

export interface ApiDefinition {
  name: string;
  apiRepository: string;
  deprecations?: {
    [apiName: string]: {
      inVersion: string;
      notice?: string;
      removedIn?: string;
    }
  };
  files: Array<ApiFile>;
  versions: Array<ApiVersion>;
}

export interface StaticFileDefinition {
  name: string;
  urlName: string;
  markdownFilePath: string;
  removedIn?: string;
  deprecated?: string;
}

export interface ApiStaticDefinitionObject {
  version: string;
  files?: Array<StaticFileDefinition>;
  ref?: string;
  alongWith?: string;
}

export interface ApiStaticDefinition {
  name: string;
  apiRepository: string;
  apis: Array<ApiStaticDefinitionObject>;
}
