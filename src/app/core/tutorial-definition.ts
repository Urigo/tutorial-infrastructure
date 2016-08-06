export interface TutorialDefinition {
  id: string;
  name: string;
  gitHub: string;
  patchFile: string;
  baseRoute: string;
  steps: Array<TutorialStep>
}

export interface TutorialStep {
  url: string;
  name: string;
  template: string;
}

export interface TutorialBundle {
  tutorial: TutorialDefinition,
  steps: Array<any>
}
