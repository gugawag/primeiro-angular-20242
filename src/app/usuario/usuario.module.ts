import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import {FormsModule} from "@angular/forms";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import { ListagemCadastroComponent } from './listagem-cadastro/listagem-cadastro.component';
import {PipesModule} from "../shared/pipes/pipes.module";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {FirestoreModule} from "../firestore/firestore.module";



@NgModule({
  declarations: [
    ListagemComponent,
    ManutencaoComponent,
    ListagemCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    PipesModule,

  ],
  exports: [
      ListagemComponent,
      ManutencaoComponent
  ]
})
export class UsuarioModule { }
