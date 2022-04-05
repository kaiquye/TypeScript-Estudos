export interface iManeger {

    nome: string
    telefone: number
    cargo: string
    email : string

    Create: (object: object) => Promise<boolean>
    Delete: (id: string) => Promise<boolean>
    Update: (object: object) => Promise<boolean>
    Edit: (object: object) => Promise<boolean>
}
