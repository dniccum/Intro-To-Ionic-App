import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppInfo } from '../app-info/app-info';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {
  public appInfoPage;

  constructor(public navCtrl: NavController) {
    this.appInfoPage = AppInfo;
  }

  ionViewDidLoad() {
    console.log('Hello Settings Page');
  }

}
