import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyTestLibComponent } from './my-test-lib.component';
import { PostCardComponent } from './post-card/post-card.component';



@NgModule({
  declarations: [MyTestLibComponent, PostCardComponent],
  imports: [BrowserModule
  ],
  exports: [MyTestLibComponent, PostCardComponent ]
})
export class MyTestLibModule { }
