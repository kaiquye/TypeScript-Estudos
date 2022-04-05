export interface iProject {

    nome: string
    inicio: Date
    termino: Date
    gerente : { id : string, nome : string }

    Create: (object: object) => Promise<boolean>
    Delete: (id: string) => Promise<boolean>
    Update: (object: object) => Promise<boolean>
    Edit: (object: object) => Promise<boolean>
}
