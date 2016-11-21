import {Injectable, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Injectable()
export class PageTitleService {
  constructor(@Inject(DOCUMENT) private document: any) {
  }

  setTitle(title: string) {
    this.document.title = title;
  }
}
