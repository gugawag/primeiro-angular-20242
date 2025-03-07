import {inject, Injectable, Injector, runInInjectionContext} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from "@angular/fire/compat/firestore";
import {Aluno} from "../modelo/aluno";
import {from, map, Observable, switchMap} from "rxjs";
import {AlunoServiceIF} from "./aluno-serviceIF";

@Injectable({
    providedIn: 'root'
})
export class AlunoFireService implements AlunoServiceIF {

    private injetor = inject(Injector);
    private colecaoAlunos: AngularFirestoreCollection<Aluno>;
    NOME_COLECAO = 'alunos';

    constructor(private firestore: AngularFirestore) {
        this.colecaoAlunos = this.firestore.collection(this.NOME_COLECAO);
        //AVISO: está sendo usado dessa forma devido à erros com firebase e v19 do Angular com módulos
        runInInjectionContext(this.injetor, () => {
            this.colecaoAlunos = this.firestore.collection(this.NOME_COLECAO);
        });
    }

    listar(): Observable<Aluno[]> {
        return runInInjectionContext(this.injetor, () => {
            return this.colecaoAlunos.valueChanges({idField: 'id'});
        });
    }

    cadastrar(aluno: Aluno): Observable<Aluno> {
        delete aluno.id;
        return from(this.colecaoAlunos.add({...aluno})).pipe(
            switchMap((docRef: DocumentReference<Aluno>) => docRef.get()),
            map(doc => ({id: doc.id, ...doc.data()} as Aluno))
        );
    }

    remover(id: string): Observable<any> {
        return runInInjectionContext(this.injetor, () => {
            return from(this.colecaoAlunos.doc(id).delete());
        });
    }

    pesquisarPorId(idEdicao: string): Observable<Aluno> {
        return runInInjectionContext(this.injetor, () => {
            return this.colecaoAlunos.doc(idEdicao).get().pipe(map(document =>
                new Aluno(idEdicao, document.data())));
        });
    }

    atualizar(aluno: Aluno): Observable<void> {
        return runInInjectionContext(this.injetor, () => {
            return from(this.colecaoAlunos.doc(aluno.id).update({...aluno}));
        });
    }

    maioresDeIdade(): Observable<Aluno[]> {
        return runInInjectionContext(this.injetor, () => {
            let alunosMaioresIdade: AngularFirestoreCollection<Aluno>;
            alunosMaioresIdade = this.firestore.collection(this.NOME_COLECAO, ref => ref.where('idade', '>', '17'));
            return alunosMaioresIdade.valueChanges();
        });
    }

}
