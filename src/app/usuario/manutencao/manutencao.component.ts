import { Component } from '@angular/core';
import {Aluno} from "../../shared/modelo/aluno";
import {ALUNOS} from "../../shared/modelo/ALUNOS";

@Component({
  selector: 'app-manutencao',
  standalone: false,
  
  templateUrl: './manutencao.component.html',
  styleUrl: './manutencao.component.css'
})
export class ManutencaoComponent {

  ALUNOS = ALUNOS;
  alunoDeCadastro: Aluno;

  constructor() {
    this.alunoDeCadastro = new Aluno();
  }


  cadastrar() {
    this.ALUNOS.push(this.alunoDeCadastro);
    this.alunoDeCadastro = new Aluno();
  }

}
