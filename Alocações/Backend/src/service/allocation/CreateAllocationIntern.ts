import { IServiceAllocation } from "./IServiceAllocation";
import { intern } from '../../models/Allocation/AllocationIntern'

interface IAllocation {
    assunto: string
    inicio: Date
    termino: Date
    Proprietario: { id: number, nome?: string }
    Projeto: { id: number, nome?: string }
}

export class Service implements IServiceAllocation {

    async Create(allocation: IAllocation): Promise<boolean> {
        try {
            let resultado = await new intern(allocation).Create();
            console.log(resultado)
            return true
        } catch (error) {
            return false
        }
    }
}