import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Settings } from '../pages/settings/settings';
import { AppInfo } from '../pages/app-info/app-info';
import { ModalForm } from '../components/modal-form/modal-form'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalForm,
    Settings,
    AppInfo
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalForm,
    Settings,
    AppInfo
  ],
  providers: []
})
export class AppModule {}
