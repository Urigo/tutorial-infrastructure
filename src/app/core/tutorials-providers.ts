import {TutorialRegistryCache} from "./tutorials-registry-cache";
import {PatchLoadResolve} from "./patch-load-resolver";
import {StepsTemplatesCache} from "./steps-templates-cache";
import {ActivatedTutorial} from "./current-tutorial";
import {StepsUtils} from "./step-utils";

export const TUTORIALS_PROVIDERS = [
  PatchLoadResolve,
  TutorialRegistryCache,
  StepsTemplatesCache,
  ActivatedTutorial,
  StepsUtils
];
