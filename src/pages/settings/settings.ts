import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInfoPage } from '../app-info/app-info';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  public appInfoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.appInfoPage = AppInfoPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
