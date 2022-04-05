
import { Repositorio } from "../../repositories/Allocation/Allocation"

export abstract class Allocation {

    private assunto: string
    private inicio: Date
    private termino: Date
    private Proprietario: { id: number, nome?: string }
    private Projeto: { id: number, nome?: string }

    constructor(assunto: string, inicio: Date, termino: Date, Proprietario: { id: number, nome?: string }, Projeto: { id: number, nome?: string }) {
        this.assunto = assunto,
            this.inicio = inicio,
            this.termino = termino,
            this.Proprietario = Proprietario,
            this.Projeto = Projeto
    }

    async Create(): Promise<boolean> {
        try {
            let resultado = await Repositorio.Create({ assunto: this.assunto, inicio: this.inicio, termino: this.termino, Proprietario: { id: this.Proprietario.id, nome: this.Proprietario.nome }, Projeto: { id: this.Projeto.id, nome: this.Projeto.nome } });
            if (!resultado) return false;
            return true
        } catch (error) {
            return false
        }
    }
}