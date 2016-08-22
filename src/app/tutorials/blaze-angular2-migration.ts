import {TutorialDefinition} from "../core/tutorial-definition";

export const BLAZE_TO_ANGULAR2_MIGRATION: TutorialDefinition = {
  id: "migration-angular2",
  name: "Blaze to Angular 2 Migration",
  gitHub: "dotansimha/angular2-blaze-migration-tutorial",
  patchFile: "/assets/patches/migration.angular2.multi.patch",
  baseRoute: "migration/angular2",
  steps: [
    {
      url: "/introduction",
      name: "Introduction",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.intro.md"
    },
    {
      url: "/understanding-angular2",
      name: "Understanding Angular 2",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.basic.md"
    },
    {
      url: "/first-steps",
      name: "First Steps",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.first-steps.md"
    },
    {
      url: "/coexistence",
      name: "Coexistence",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.coexistence.md"
    },
    {
      url: "/typescript",
      name: "TypeScript",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.code-migration1.md"
    },
    {
      url: "/creating-angular2-application",
      name: "Creating Angular 2 Application",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.code-migration2.md"
    },
    {
      url: "/router-migration",
      name: "Router Migration",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.code-migration3.md"
    },
    {
      url: "/main-template-migration",
      name: "Migrate the main Blaze Template",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.code-migration4.md"
    },
    {
      url: "/load-blaze-template",
      name: "Load Blaze Template",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.code-migration5.md"
    },
    {
      url: "/blaze-template-to-angular2-component",
      name: "Migrate Template into Component",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.code-migration6.md"
    },
    {
      url: "/authentication-migration",
      name: "Migrating Authentication Templates",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.code-migration7.md"
    },
    {
      url: "/todo-list-migration",
      name: "Migrate the Todo List",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.code-migration8.md"
    },
    {
      url: "/list-item-migration",
      name: "Migrate the List Item",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.code-migration9.md"
    },
    {
      url: "/cleanup",
      name: "Cleanup",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.code-migration10.md"
    },
    {
      url: "/next-steps",
      name: "Next Steps",
      template: "/assets/templates/blaze-to-angular2-migration/migration.angular2.next-steps.md"
    }
  ]
};
