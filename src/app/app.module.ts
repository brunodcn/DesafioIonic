import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { ListaAlunosPage } from '../pages/lista-alunos/lista-alunos';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { RegistraAlunosPage } from '../pages/registra-alunos/registra-alunos';
import { EditaAlunosPage } from '../pages/edita-alunos/edita-alunos';

@NgModule({
  declarations: [
    MyApp,
    ListaAlunosPage,
    RegistraAlunosPage,
    EditaAlunosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaAlunosPage,
    RegistraAlunosPage,
    EditaAlunosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
