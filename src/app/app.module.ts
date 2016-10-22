import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalForm } from '../components/modal-form/modal-form'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalForm
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalForm
  ],
  providers: []
})
export class AppModule {}
