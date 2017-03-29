import { Component } from '@angular/core';

import { ViewController, ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'modal-form',
  templateUrl: 'modal-form.html'
})
export class ModalForm {
  public person = {
    firstName: null,
    lastName: null
  };

  constructor(public viewController: ViewController, public toastController: ToastController, private sqlite: SQLite, private keyboard: Keyboard) {}

  closeModal() {
    this.viewController.dismiss();
    this.clearForm();
    this.keyboard.close();
  }

  clearForm() {
    this.person["firstName"] = null;
    this.person["lastName"] = null;
  }

  formSubmit() {
    // test valid form
    if (!this.person["firstName"] || !this.person["lastName"]) {
      let toast = this.toastController.create({
        message: 'Enter a first and last name.',
        position: 'top',
        cssClass: 'danger',
        duration: 2000
      });
      toast.present();
    } else {
      // form is valid
      let toast = this.toastController.create({
        message: `${this.person["firstName"]} ${this.person["lastName"]} was added successfully.`,
        position: 'top',
        cssClass: 'success',
        duration: 2000
      });

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO DataTable (firstName, lastName, whoPaid) VALUES (?,?,?)', [this.person["firstName"], this.person["lastName"], 'you']).then(() => {
          
          toast.present();
          this.closeModal();
        }, (err) => {
          console.error('Unable to execute sql: ', JSON.stringify(err));
        });
      });      
    }
  }

}
