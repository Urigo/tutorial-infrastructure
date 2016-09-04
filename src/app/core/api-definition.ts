export interface ApiFile {
  apiTitle: string;
  filePath: string;
  apiRepository?: string;
  revision?: string;
}

export interface ApiVersion {
  name: string;
  revision: string;
  exclude?: Array<string>
}

export interface ApiDefinition {
  apiRepository: string;
  files: Array<ApiFile>;
  versions: Array<ApiVersion>;
}