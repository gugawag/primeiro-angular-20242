import {Component, OnInit} from '@angular/core';
import {Aluno} from "../../shared/modelo/aluno";
import {ALUNOS} from "../../shared/modelo/ALUNOS";
import {AlunoRestService} from "../../shared/services/aluno-rest.service";

@Component({
  selector: 'app-listagem',
  standalone: false,
  
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {
  ALUNOS: Aluno[] = [];

  constructor(private alunoService: AlunoRestService) {
  }

  ngOnInit() {
    this.alunoService.listar().subscribe(
        alunos => this.ALUNOS = alunos
    );
  }

  remover(alunoARemover: Aluno) {
    this.alunoService.remover(alunoARemover.id).subscribe(
        () => {
          console.log('removido');
          const alunoIndx = this.ALUNOS.findIndex(aluno => aluno.id === alunoARemover.id);
          this.ALUNOS.splice(alunoIndx, 1);
        }
    );

    // this.ALUNOS = this.ALUNOS.filter(
    //     aluno => aluno.matricula !== alunoARemover.matricula);
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
