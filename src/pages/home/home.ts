import { Component } from '@angular/core';

import { NavController, ModalController, Platform, ActionSheetController, ToastController } from 'ionic-angular';
import { SQLite } from 'ionic-native';
import { ModalForm } from '../../components/modal-form/modal-form';
import { Settings } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public resultArray: Object[] = [];
  constructor(public navCtrl: NavController, public modalController: ModalController, platform: Platform, public actionSheetCtrl: ActionSheetController, public toastController: ToastController) {
    platform.ready().then(() => {
      this.getResults();
    });
  }

  showAddModal() {
    let modalForm = this.modalController.create(ModalForm);
    modalForm.onDidDismiss(data => {
      this.getResults();
    });
    modalForm.present();
  }

  viewSettings() {
    this.navCtrl.push(Settings);
  }

  getResults() {
    let db = new SQLite();

    // reset
    this.resultArray.length = 0;
    
    db.openDatabase({
      name: 'data.db',
      location: 'default'
    }).then(() => {
      db.executeSql('SELECT id, firstName, lastName, whoPaid FROM DataTable ORDER BY firstName ASC', {}).then((results) => {
        if (results["rows"].length > 0) {
          for(let i = 0; i < results["rows"].length; i++) {
            console.log(JSON.stringify(results["rows"].item(i)));

            let dbRow: Object = {
              id: results["rows"].item(i).id,
              firstName: results["rows"].item(i).firstName,
              lastName: results["rows"].item(i).lastName,
              whoPaid: results["rows"].item(i).whoPaid
            };
            this.resultArray.push(dbRow);
          }
        }
      }, (err) => {
        console.error('Unable to execute sql: ', JSON.stringify(err));
      });
    });
  }

  deleteResult(index, id) {
    let db = new SQLite();
    let toast = this.toastController.create({
        message: `${this.resultArray[index]["firstName"]} ${this.resultArray[index]["lastName"]} was successfully removed.`,
        position: 'top',
        cssClass: 'success',
        duration: 2000
      });
    
    db.openDatabase({
      name: 'data.db',
      location: 'default'
    }).then(() => {
      db.executeSql('DELETE FROM DataTable WHERE id = ?', [id]).then(() => {
        toast.present();
        this.resultArray.splice(index, 1);
      }, (err) => {
        console.error('Unable to execute sql: ', JSON.stringify(err));
      });
    });
  }

  showDelete(index: number, id: number) {
    let actionSheet = this.actionSheetCtrl.create({
      title: `Delete ${this.resultArray[index]["firstName"]} ${this.resultArray[index]["lastName"]}?`,
      buttons: [
        {
          text: 'Yep, delete them.',
          role: 'destructive',
          handler: () => {
            this.deleteResult(index, id);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    actionSheet.present();
  }

  toggleResult(index: number, id: number, whoPaid: string) {
    let db = new SQLite();
    let changedWhoPaid: string = '';

    // update model
    if (whoPaid === 'you') {
      changedWhoPaid = 'them';
    } else {
      changedWhoPaid = 'you';
    }

    this.resultArray[index]["whoPaid"] = changedWhoPaid;

    // update database
    db.openDatabase({
      name: 'data.db',
      location: 'default'
    }).then(() => {
      db.executeSql('UPDATE DataTable SET whoPaid = ? WHERE id = ?', [changedWhoPaid, id]).then((result) => {
        console.log(JSON.stringify(result));
      }, (err) => {
        console.error('Unable to execute sql: ', JSON.stringify(err));
      });
    });
  }

}
