import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistraAlunosPage } from './registra-alunos';

@NgModule({
  declarations: [
    RegistraAlunosPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistraAlunosPage),
  ],
})
export class RegistraAlunosPageModule {}
