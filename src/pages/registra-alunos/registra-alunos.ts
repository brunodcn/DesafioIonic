import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Aluno } from '../../models/aluno/aluno.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-registra-alunos',
  templateUrl: 'registra-alunos.html',
})
export class RegistraAlunosPage {

	aluno = {} as Aluno

	alunoRef$: FirebaseListObservable<Aluno[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase ) {
  this.alunoRef$ = this.database.list('lista-alunos');
  }

  cadastraAluno(aluno: Aluno){
  	this.alunoRef$.push({
  	nomeAluno: this.aluno.nomeAluno,
  	notaAluno: Number(this.aluno.notaAluno),
  	matriculaAluno: Number(this.aluno.matriculaAluno)
  	});

  	this.aluno = {} as Aluno;


  	this.navCtrl.pop();
  }

}
