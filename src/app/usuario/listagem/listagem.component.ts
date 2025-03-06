import {Component, OnInit} from '@angular/core';
import {Aluno} from "../../shared/modelo/aluno";
import {ALUNOS} from "../../shared/modelo/ALUNOS";
import {AlunoRestService} from "../../shared/services/aluno-rest.service";
import {Router} from "@angular/router";
import {AlunoFireService} from "../../shared/services/aluno-fire.service";

@Component({
  selector: 'app-listagem',
  standalone: false,
  
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {
  ALUNOS: Aluno[] = [];

  constructor(private alunoService: AlunoFireService, private roteador: Router) {
  }

  ngOnInit() {
    this.alunoService.listar().subscribe(
        alunos => this.ALUNOS = alunos
    );

    // this.alunoService.maioresDeIdade().subscribe(
    //     maioresDeIdade => console.log(maioresDeIdade)
    // );
  }

  remover(alunoARemover: Aluno) {
    if (alunoARemover.id) {
      this.alunoService.remover(alunoARemover.id).subscribe(
          () => {
            console.log('removido');
            const alunoIndx = this.ALUNOS.findIndex(aluno => aluno.id === alunoARemover.id);
            this.ALUNOS.splice(alunoIndx, 1);
          }
      );
    }
  }

  curtir(aluno: Aluno) {
    if (aluno.likes) {
      aluno.likes += 1;
    }
  }

  descurtir(aluno: Aluno) {
    if (aluno.likes && aluno.likes > 0) {
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

  alterar(aluno: Aluno) {
    this.roteador.navigate([`edicao-aluno`, aluno.id]);
  }

}
