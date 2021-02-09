import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-my-test-lib',
  template: `
  <div>
  <h1 *ngIf="data.type; else otro"> my-test-lib works!
    <span style="color: red">{{ data.type}}</span>
  </h1>
  <ng-template #otro> No hay server</ng-template>
  <h2>name: <span style="color: red">{{ data.name}}</span></h2>
  <div [ngSwitch]="data.type">
      <strong *ngSwitchCase="'server'"
            style="color: red;">
        {{ data.content}}
      </strong>
      <span  *ngSwitchCase="''" style="color: blue;">{{ data.content}}</span>
      <span *ngSwitchDefault>Otherwise</span>
  </div>
</div>
  `,
  styles: [
  ]
})
export class MyTestLibComponent implements OnInit {
  @Input('data-input') data: {
    type: string,
    name: string,
    content: string,
    done: boolean
  }

  constructor() { }

  ngOnInit(): void {
  }

}
