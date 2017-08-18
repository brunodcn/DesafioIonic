import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditaAlunosPage } from './edita-alunos';

@NgModule({
  declarations: [
    EditaAlunosPage,
  ],
  imports: [
    IonicPageModule.forChild(EditaAlunosPage),
  ],
})
export class EditaAlunosPageModule {}
