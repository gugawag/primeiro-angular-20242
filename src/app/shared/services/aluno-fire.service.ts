import {inject, Injectable, Injector, runInInjectionContext} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from "@angular/fire/compat/firestore";
import {Aluno} from "../modelo/aluno";
import {from, map, Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlunoFireService {

  private injector = inject(Injector);

  private colecaoAlunos: AngularFirestoreCollection<Aluno>;
  NOME_COLECAO = 'alunos';

  constructor(private firestore: AngularFirestore) {
      this.colecaoAlunos = this.firestore.collection(this.NOME_COLECAO);
    runInInjectionContext(this.injector, () => {
      this.colecaoAlunos = this.firestore.collection(this.NOME_COLECAO);
    });
  }

  listar(): Observable<Aluno[]> {
    return runInInjectionContext(this.injector, () => {
      return this.colecaoAlunos.valueChanges({idField: 'id'});
    });
  }

  cadastrar(aluno: Aluno): Observable<Aluno> {
    delete aluno.id;
    return from(this.colecaoAlunos.add({ ...aluno })).pipe(
        switchMap((docRef: DocumentReference<Aluno>) => docRef.get()),
        map(doc => ({ id: doc.id, ...doc.data() } as Aluno))
    );
  }

  remover(id: string): Observable<any> {
    return runInInjectionContext(this.injector, () => {
      return from(this.colecaoAlunos.doc(id).delete());
    });
  }

  pesquisarPorId(idEdicao: string): Observable<Aluno> {
    return runInInjectionContext(this.injector, () => {
      return this.colecaoAlunos.doc(idEdicao).get().pipe(map(document =>
          new Aluno(idEdicao, document.data())));
    });
  }

  atualizar(aluno: Aluno): Observable<void> {
    return runInInjectionContext(this.injector, () => {
      return from(this.colecaoAlunos.doc(aluno.id).update({...aluno}));
    });
  }

  //
  // maioresDeIdade(): Observable<Aluno[]> {
  // }

}
