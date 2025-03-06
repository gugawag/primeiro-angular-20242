export class Aluno {

    public id?: string;
    public matricula?: string;
    public nome?: string;
    public idade?: number;
    public likes?: number = 0;
    public curti?: boolean | undefined = false;

    constructor(id?: string, aluno: Aluno = {}) {
        this.id = id;
        this.matricula = aluno.matricula;
        this.nome = aluno.nome;
        this.idade = aluno.idade;
        this.likes = aluno.likes;
        this.curti = aluno.curti;
    }
}
