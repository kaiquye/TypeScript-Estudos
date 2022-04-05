import { Router } from 'express'
import { Allocation } from './models/Allocation/Allocation'

export const rotas: Router = Router();

rotas.get('/', (req, res) => {
    Allocation.Criar();
})
