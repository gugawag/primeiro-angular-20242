export class Aluno {

    constructor(public matricula: string='',
                public nome: string = '',
                public idade: number = 0,
                public likes: number = 0,
                public curti: boolean | undefined = undefined
                ) {
    }
}
