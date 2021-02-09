Describe Componentes - Modulos - Services
// --root module
import { NgModule } from '@angular/core';
// declartions:[arrar de los componentes]
//import { Test } from './test.component';

//array con los modulos
import { ReactiveForms }  from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
// servicios
import { TestService } from './test.service';
//
import { TestModule}  from '.test.module'

@NgModule({
   declarations: [],
   imports: [ReactiveForms, AppRoutingModule, TestModule],
   providers: [TestService],
   bootstrap: [AppComponent]
})

// --common module o feature
import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule} from '@angular/platform-browser';
//
import { TestComponent}  from './test.component';

@NgModule({
   declarations: [TestComponent],
   imports : [CommonModule, BrowserModule]
})
export class TestModule


//---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
//
import { TestService } from './test.service';
import { Datos } from './datos.model';



@Component({
   selector: 'app-test',
   templateUrl: './test.html',
   styleUrl: ['./test.scss']
})
export class Test implements OnInit {

   loadDatos: Datos[];

   constructor(private router: Router,
               private location: Location,
               provate testServ: TestService){}

   ngOnInit(){
      this.testServ.fetchData()
      .pipe();
   }

   onNavigateTo() {
      this.location.back();
   }
}
// ---

export interface Datos {
   id: number;
   name: string;
   title: string;
}

// ---
import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Datos } from './datos.model';

@Injectable({provideIn: 'root'})
export class TestService{

   constructor(private http: HttpClient){}

   const _URL = 'http://www.data.com';

   fetchData(){
      return this.http.get<Datos[]>('_URL').pipe( share());
   }


}