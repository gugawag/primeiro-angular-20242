import {Aluno} from "../modelo/aluno";
import {Observable} from "rxjs";

export abstract class AlunoServiceIF {

    abstract cadastrar(aluno: Aluno): Observable<Aluno>;

    abstract listar(): Observable<Aluno[]>;

    abstract remover(id: string): Observable<any>;

    abstract pesquisarPorId(idEdicao: string): Observable<Aluno>;

    abstract atualizar(aluno: Aluno): Observable<any>;

    abstract maioresDeIdade(): Observable<Aluno[]>;

}
