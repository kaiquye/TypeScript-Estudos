import { Allocation } from "./Allocation";

import { Repositorio } from "../../repositories/Allocation/Allocation"

interface IAllocation {
    assunto: string
    inicio: Date
    termino: Date
    Proprietario: { id: number, nome?: string }
    Projeto: { id: number, nome?: string }
}

export class intern extends Allocation {

    private allocation: IAllocation

    constructor(allocation: IAllocation) {
        super(allocation.assunto, allocation.inicio, allocation.termino, allocation.Proprietario, allocation.Projeto)
        this.allocation = allocation
    }

    async Create(): Promise<boolean> {
        try {
            let resultado = await Repositorio.Create(this.allocation)
            if (!resultado) return false
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}