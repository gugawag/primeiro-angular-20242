import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from "./usuario/listagem/listagem.component";
import {ManutencaoComponent} from "./usuario/manutencao/manutencao.component";
import {ListagemCadastroComponent} from "./usuario/listagem-cadastro/listagem-cadastro.component";

const routes: Routes = [
  {
    path: 'listagem-alunos',
    component: ListagemComponent
  },
  {
    path: 'cadastro-aluno',
    component: ManutencaoComponent
  },
  {
    path: 'listagem-cadastro-alunos',
    component: ListagemCadastroComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
