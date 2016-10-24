import { Component } from '@angular/core';

import { ViewController, ToastController } from 'ionic-angular';
import { SQLite, Keyboard } from 'ionic-native';

/*
  Generated class for the ModalForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'modal-form',
  templateUrl: 'modal-form.html'
})
export class ModalForm {
  public person = {
    firstName: null,
    lastName: null
  };

  constructor(public viewController: ViewController, public toastController: ToastController) {}

  closeModal() {
    this.viewController.dismiss();
    this.clearForm();
    Keyboard.close();
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
      let db = new SQLite();
      let toast = this.toastController.create({
        message: `${this.person["firstName"]} ${this.person["lastName"]} was added successfully.`,
        position: 'top',
        cssClass: 'success',
        duration: 2000
      });

      db.openDatabase({
        name: 'data.db',
        location: 'default'
      }).then(() => {
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
