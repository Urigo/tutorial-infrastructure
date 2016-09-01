import {Component, OnInit, Injectable} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "api-page",
  template: `<div class="api-container"><pre>{{jsonData}}</pre></div>`
})
@Injectable()
export class ApiPageComponent implements OnInit {
  private jsonData = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.jsonData = JSON.stringify(data.resolveData.jsDoc,null,'\t');
    });
  }
}