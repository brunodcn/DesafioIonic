import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { RegistraAlunosPage } from '../registra-alunos/registra-alunos';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Aluno } from '../../models/aluno/aluno.interface';
import { EditaAlunosPage } from '../edita-alunos/edita-alunos';

@Component({
  selector: 'page-lista-alunos',
  templateUrl: 'lista-alunos.html',
})


export class ListaAlunosPage {

	listaAlunosRef$: FirebaseListObservable<Aluno[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {

  this.listaAlunosRef$ = this.database.list('lista-alunos');
  }

  selecionaAluno(aluno: Aluno){

  this.actionSheetCtrl.create({
  title: `${aluno.nomeAluno}`,
  buttons: [
  {
  text:'Edit',
  handler: () => {

  this.navCtrl.push(EditaAlunosPage, { alunoId: aluno.$key });

  }
  },
  {
  text: 'Delete',
  role: 'destructive',
  handler: () => {
  this.listaAlunosRef$.remove(aluno.$key);
  }
  },
  {
  text: 'Cancel',
  role: 'cancel',
  handler: () => {
  console.log("The user has selected the cancel button");
  }
  }
  ]
  }).present();

  }

  navigateToRegistraAlunosPage(){
  this.navCtrl.push(RegistraAlunosPage);
  }
}
