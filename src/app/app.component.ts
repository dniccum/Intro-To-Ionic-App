import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, SQLite } from 'ionic-native';

import { HomePage } from '../pages/home/home';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      let db = new SQLite();
      db.openDatabase({
        name: 'data.db',
        location: 'default'
      }).then(() => {
        db.executeSql('CREATE TABLE IF NOT EXISTS DataTable (firstName VARCHAR(32), lastName VARCHAR(32), whoPaid  VARCHAR(4))', {}).then(() => {
          
        }, (err) => {
          console.error('Unable to execute sql: ', err);
        });
      }, (err) => {
        console.error('Unable to open database: ', err);
      })
    });
  }
}
