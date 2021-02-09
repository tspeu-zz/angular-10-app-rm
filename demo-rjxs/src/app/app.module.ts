import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MyTestLibModule } from 'my-test-lib';
// import { PostComponent } from './post.componet';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MyTestLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
