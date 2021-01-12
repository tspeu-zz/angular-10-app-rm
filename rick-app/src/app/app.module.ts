import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/componets/header/header.component';
import { FormSearchComponent } from './shared/componets/form-search/form-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
