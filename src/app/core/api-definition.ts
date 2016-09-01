export interface ApiFile {
  apiTitle: string;
  filePath: string;
}

export interface ApiVersion {
  name: string;
  revision: string;
}

export interface ApiDefinition {
  apiRepository: string;
  files: Array<ApiFile>;
  versions: Array<ApiVersion>;
}