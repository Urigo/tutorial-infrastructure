import {ParsedPatchDefinition} from './patch-definition';

export interface TutorialDefinition {
  id: string;
  name: string;
  gitHub: string;
  baseRoute: string;
  steps: TutorialStep[];
  improveCodeUrlResolve?: (tutorial: TutorialDefinition, patchDetails: ParsedPatchDefinition, filename: string, stepNumber: string) => string;
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
