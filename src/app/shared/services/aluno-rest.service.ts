import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Aluno} from "../modelo/aluno";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlunoRestService {

  private URL_ALUNOS = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) { }

  cadastrar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.URL_ALUNOS, aluno);
  }

  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.URL_ALUNOS);
  }

  remover(id: string): Observable<any> {
    return this.http.delete(`${this.URL_ALUNOS}/${id}`);
  }

}
