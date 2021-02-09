import { Component, OnInit } from '@angular/core';
import { IPlace } from 'src/app/models/Iplace.model';
//
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(private placesServ: PlacesService) { }

  places: IPlace[];

  ngOnInit() {
    console.log('ON INIT');
    this.places = this.placesServ.places;
  }
  
  ionViewWillEnter() {
    console.log('ionViewWillEnter-> ',this.places);
    
  }



}
