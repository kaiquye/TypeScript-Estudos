import express from 'express'
import {rotas} from './router'

const app = express();

app.use(rotas)

app.listen(3000, ()=>{
    console.log('Servidor girando.... 😱')
})