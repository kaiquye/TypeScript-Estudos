import { Database } from '../../database/index'

interface IAllocation {
    assunto: string
    inicio: Date
    termino: Date
    Proprietario: { id: number, nome?: string }
    Projeto: { id: number, nome?: string }
}

export class Repositorio {

    static Create(allocation: IAllocation) {
        return new Database().Create(allocation);
    }

}