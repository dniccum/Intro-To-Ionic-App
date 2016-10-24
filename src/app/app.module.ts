import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Settings } from '../pages/settings/settings';
import { AppInfo } from '../pages/app-info/app-info';
import { ModalForm } from '../components/modal-form/modal-form';
import { PressDirective } from '../components/long-press/long-press';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalForm,
    Settings,
    AppInfo,
    PressDirective
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
