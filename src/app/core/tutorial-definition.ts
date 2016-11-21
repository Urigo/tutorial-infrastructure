export interface TutorialDefinition {
  id: string;
  name: string;
  gitHub: string;
  patchFile: string;
  baseRoute: string;
  firstCommitCompare?: string;
  steps: TutorialStep[];
}

export interface TutorialStep {
  url: string;
  name: string;
  template: string;
  youtubeVideoId?: string;
  hideCodeDiff?: boolean;
  noZipDownload?: boolean;
}

export interface TutorialBundle {
  tutorial: TutorialDefinition;
  steps: any[];
}
