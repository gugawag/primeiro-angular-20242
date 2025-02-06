import { Component } from '@angular/core';
import {Aluno} from "../../shared/modelo/aluno";
import {ALUNOS} from "../../shared/modelo/ALUNOS";
import {AlunoRestService} from "../../shared/services/aluno-rest.service";
import {MensagemSnackService} from "../../shared/services/mensagem-snack.service";
import {MensagemSweetService} from "../../shared/services/mensagem-sweet.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-manutencao',
  standalone: false,
  
  templateUrl: './manutencao.component.html',
  styleUrl: './manutencao.component.css'
})
export class ManutencaoComponent {

  aluno: Aluno;
  nomeBotaoAcao: string;
  estahCadastrando: boolean;

  constructor(private alunoService: AlunoRestService, private mensagemService: MensagemSweetService,
              private roteador: Router, private rotaAtivada: ActivatedRoute) {
    this.nomeBotaoAcao = 'Cadastrar';
    this.estahCadastrando = true;
    this.aluno = new Aluno();
    const idEdicao = this.rotaAtivada.snapshot.params['id'];
    if (idEdicao) {
      this.nomeBotaoAcao = 'Atualizar';
      this.estahCadastrando = false;
      this.alunoService.pesquisarPorId(idEdicao).subscribe(
        alunoPesquisado => this.aluno = alunoPesquisado
      );
    }
  }

  cadastrarOuAtualizar() {
    if (this.estahCadastrando) {
      this.alunoService.cadastrar(this.aluno).subscribe(
          alunoCadastrado => {
            this.mensagemService.sucesso('Aluno cadastrado com sucesso!');
            this.roteador.navigate(['/listagem-alunos']);
          }
      );
    } else {
      this.alunoService.atualizar(this.aluno).subscribe(
          alunoAtualizado => {
            this.mensagemService.sucesso('Aluno atualizado com sucesso!');
            this.roteador.navigate(['/listagem-alunos']);
          }
      );
    }
  }

}
