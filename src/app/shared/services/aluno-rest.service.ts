import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Aluno} from "../modelo/aluno";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlunoRestService {

  private URL_ALUNOS = 'http://localhost:3000/alunos';
  private MAIOR_IDADE = 18;

  constructor(private http: HttpClient) { }

  cadastrar(aluno: Aluno): Observable<Aluno> {
    delete aluno.id;
    return this.http.post<Aluno>(this.URL_ALUNOS, aluno);
  }

  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.URL_ALUNOS);
  }

  remover(id: string): Observable<any> {
    return this.http.delete(`${this.URL_ALUNOS}/${id}`);
  }

  pesquisarPorId(idEdicao: string): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.URL_ALUNOS}/${idEdicao}`);
  }

  atualizar(aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${this.URL_ALUNOS}/${aluno.id}`, aluno);
  }

  maioresDeIdade(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.URL_ALUNOS}?idade_gte=${this.MAIOR_IDADE}`);
  }
}
