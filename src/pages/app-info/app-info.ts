import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AppInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-app-info',
  templateUrl: 'app-info.html'
})
export class AppInfo {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AppInfo Page');
  }

}
