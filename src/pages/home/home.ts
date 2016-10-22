import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { ModalForm } from '../../components/modal-form/modal-form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalController: ModalController ) {
    
  }

  showAddModal() {
    let modalForm = this.modalController.create(ModalForm);
    modalForm.present();
  }

}
