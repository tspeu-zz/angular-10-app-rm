import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import { TapService } from './tap.service';
import { combineLatest, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'post-app',
  template: `<ng-content></ng-content>`,

})
export class PostComponent implements OnInit, AfterContentInit{

  @Input() data: [];
  @ContentChild('contentPost') postContent: ElementRef;

constructor(private serv: TapService) {}

ngOnInit() {
}

ngAfterContentInit(): void {
 console.log('postContent', this.postContent.nativeElement.textContent);
}

}

