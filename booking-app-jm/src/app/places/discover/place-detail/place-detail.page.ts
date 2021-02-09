import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  //private router: Router, 
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onBookPlace(){
    console.log('book place');
    // dont use the animation backward
    // this.router.navigateByUrl('/places/tabs/discover');
    // navigate backward
    this.navCtrl.navigateBack('/places/tabs/discover');
    // if ther isnt any pag on the stack of bavigation it will fail
    // this.navCtrl.pop();

  }

}
