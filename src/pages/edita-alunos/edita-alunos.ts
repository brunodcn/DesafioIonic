import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Aluno } from '../../models/aluno/aluno.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-edita-alunos',
  templateUrl: 'edita-alunos.html',
})
export class EditaAlunosPage {
	
	alunoSubscription: Subscription;
	alunoRef$: FirebaseObjectObservable<Aluno>;
	aluno = {} as Aluno;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {

  const alunoId = this.navParams.get('alunoId');
  this.alunoRef$ = this.database.object(`lista-alunos/${alunoId}`);


  this.alunoSubscription = this.alunoRef$.subscribe(aluno => this.aluno = aluno)
  }

  editaAluno(aluno: Aluno){

  this.alunoRef$.update(aluno);

  this.navCtrl.pop();

  }


ionViewWillLeave(){
	this.alunoSubscription.unsubscribe();
}
  
}
