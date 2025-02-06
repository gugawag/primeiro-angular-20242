export class Aluno {

    constructor(public id?: string,
                public matricula?: string,
                public nome?: string,
                public idade?: number,
                public likes?: number,
                public curti: boolean | undefined = undefined
                ) {
    }
}
