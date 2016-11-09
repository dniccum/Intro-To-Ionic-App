import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, SQLite, Mixpanel } from 'ionic-native';

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

      // Mixpanel Init
      Mixpanel.init("f4e6fb63f40d6acbab002ad63c8b95a7").then(() => {
        Mixpanel.track("App Booted");
      });

      let db = new SQLite();
      db.openDatabase({
        name: 'data.db',
        location: 'default'
      }).then(() => {
        db.executeSql('CREATE TABLE IF NOT EXISTS DataTable (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName VARCHAR(32), lastName VARCHAR(32), whoPaid VARCHAR(4))', {}).then(() => {

        }, (err) => {
          console.error('Unable to execute sql: ', JSON.stringify(err));
        });
      }, (err) => {
        console.error('Unable to open database: ', JSON.stringify(err));
      });
    });
  }
}
