export interface ChangeLocation {
  lines: number;
  start: number
}

export interface LineContent {
  content: string;
  type: string
}

export interface SingleChange {
  lineNumbers: {
    added: ChangeLocation
    removed: ChangeLocation
  }
  lines: Array<LineContent>
}

export interface FileModification {
  [fileName: string]:SingleChange;
}

export interface PatchDefinition {
  files: Array<FileModification>;
  message: string;
  sha: string;
}