import {Injectable, Directive, ElementRef, Renderer} from '@angular/core';
import {ActivatedTutorial} from './current-tutorial';
import {TutorialDefinition} from './tutorial-definition';
import {Observable} from 'rxjs';

@Directive({
  selector: '[historyLink]'
})
@Injectable()
export class HistoryLink {
  constructor(private activated: ActivatedTutorial, el: ElementRef, renderer: Renderer) {
    Observable.zip(activated.tutorial, activated.branch, (tutorial, branch) => {
      return {
        tutorial,
        branch
      };
    }).subscribe((data) => {
      let tutorial: TutorialDefinition = data.tutorial;
      let branch: string = data.branch;

      let url = `https://github.com/${tutorial.gitHub}/tree/${branch}-history`;

      renderer.setElementAttribute(el.nativeElement, 'href', url);
    });
  }

  pad(n, width, z = '0') {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
}
