import {TutorialRegistryCache} from "./tutorials-registry-cache";
import {PatchLoadResolve} from "./patch-load-resolver";
import {StepsTemplatesCache} from "./steps-templates-cache";

export const TUTORIALS_PROVIDERS = [
  PatchLoadResolve,
  TutorialRegistryCache,
  StepsTemplatesCache
];