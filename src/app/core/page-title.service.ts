import {Injectable, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import * as _ from "lodash";
import * as striptags from "striptags";

@Injectable()
export class PageTitleService {
  constructor(@Inject(DOCUMENT) private document: any) {
  }

  setTitle(title: string) {
    this.document.title = title;
  }

  getMetaItem(name) {
    return _.filter(this.document.head.children, (tag: any) => {
      return tag.name === 'meta' && tag.attribs['name'] === name;
    })[0];
  }

  setSeoDescription(desc: string) {
    let descriptionTag = this.getMetaItem('description');

    if (descriptionTag) {
      descriptionTag['attribs']['content'] = striptags(desc).replace(/(\r\n|\n|\r)/gm, " ").substring(0, 150);
    }
  }

  addKeywords(keys: string[]) {
    let tag = this.getMetaItem('keywords');

    if (tag) {
      tag['attribs']['content'] = tag['attribs']['content'] + ", " + keys.join(", ");
    }
  }
}
