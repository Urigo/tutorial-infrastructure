export interface ChangeLocation {
  lines: number;
  start: number
}

export interface LineContent {
  content: string;
  type: string
  highlightedContent?: string
  cssClass?: string
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

export interface ParsedPatchDefinition {
    files:Array<SingleChange>;
    message:string;
    sha:string;
    stepNumber:string;
    summary:string;
}
