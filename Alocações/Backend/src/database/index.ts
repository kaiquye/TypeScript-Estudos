import Model from '../docs/index'

interface IAllocation {
    assunto: string
    inicio: Date
    termino: Date
    Proprietario: { id: number, nome?: string }
    Projeto: { id: number, nome?: string }
}

export class Database {

    async Create(Allocation: IAllocation): Promise<boolean> {
        try {
            let retorno = await Model(`alocacoes`).insert({ assunto: 'teste' })
            if (!retorno) {
                return false
            }
            return true
        } catch (error) {
            console.log(error)
        }
        return false
    }

}

