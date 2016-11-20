export interface ApiFile {
  apiTitle: string;
  filePath: string;
  apiRepository?: string;
  revision?: string;
}

export interface ApiVersion {
  name: string;
  visibleName?: string;
  revision: string;
  exclude?: Array<string>;
}

export interface ApiDefinition {
  apiRepository: string;
  files: Array<ApiFile>;
  versions: Array<ApiVersion>;
}

export interface StaticFileDefinition {
  name: string;
  urlName: string;
  markdownFilePath: string;
}

export interface ApiStaticDefinitionObject {
  version: string;
  files?: Array<StaticFileDefinition>;
  ref?: string;
  alongWith?: string;
}

export interface ApiStaticDefinition {
  apiRepository: string;
  apis: Array<ApiStaticDefinitionObject>;
}
