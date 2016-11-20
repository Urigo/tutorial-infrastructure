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
  hideCodeDiff?: boolean;
}

export interface TutorialBundle {
  tutorial: TutorialDefinition;
  steps: any[];
}
