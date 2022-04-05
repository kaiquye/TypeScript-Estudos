import { request } from "express"

interface IAllocation {
    assunto: string
    inicio: Date
    termino: Date
    Proprietario: { id: number, nome?: string }
    Projeto: { id: number, nome?: string }
}


export interface IServiceAllocation {
    Create: (object: IAllocation) => Promise<boolean>
}