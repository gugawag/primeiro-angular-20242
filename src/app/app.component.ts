import { Component } from '@angular/core';
import {Aluno} from "./shared/modelo/aluno";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  ALUNOS: Aluno[];
  alunoDeCadastro: Aluno;

  constructor() {
    this.ALUNOS = new Array<Aluno>();
    this.ALUNOS.push(new Aluno('123', 'Aluno 1', 20));
    this.ALUNOS.push(new Aluno('223', 'Aluno 2', 21));
    this.ALUNOS.push(new Aluno('323', 'Aluno 3', 25));

    this.alunoDeCadastro = new Aluno();
  }

  cadastrar() {
    this.ALUNOS.push(this.alunoDeCadastro);
    this.alunoDeCadastro = new Aluno();
  }

  remover(alunoARemover: Aluno) {
    this.ALUNOS = this.ALUNOS.filter(
        aluno => aluno.matricula !== alunoARemover.matricula);
  }

  curtir(aluno: Aluno) {
    aluno.likes += 1;
  }

  descurtir(aluno: Aluno) {
    if (aluno.likes > 0) {
      aluno.likes -= 1;
    }
  }

  avaliar(aluno: Aluno) {
    aluno.curti = !aluno.curti;
  }

  nomeIconeCurtir(aluno: Aluno): string {
    if (aluno.curti === undefined) {
      return 'thumbs_up_down';
    }
    if (aluno.curti) {
     return 'thumb_up';
    }
    return 'thumb_down';
  }

}
