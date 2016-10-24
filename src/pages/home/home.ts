import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { ModalForm } from '../../components/modal-form/modal-form';
import { Settings } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalController: ModalController ) {
    
  }

  showAddModal() {
    let modalForm = this.modalController.create(ModalForm);
    modalForm.onDidDismiss(data => {
      // do something
    });
    modalForm.present();
  }

  viewSettings() {
    this.navCtrl.push(Settings);
  }

}
