"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Allocation = void 0;
const index_1 = require("../../database/index");
class Allocation {
    constructor(nome, cargo, inicio, Termino, Assunto, Projeto, Maneger) {
        this.nome = nome,
            this.cargo = cargo,
            this.inicio = inicio,
            this.termino = Termino;
        this.Assunto = Assunto;
        this.Projeto = Projeto;
        this.Maneger = Maneger;
    }
    BuscarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(Allocation);
                return [42, 432, 423, 42, 34,];
            }
            catch (error) {
                return [42, 432, 423, 42, 34,];
                console.log(error);
            }
            return [42, 432, 423, 42, 34,];
        });
    }
    Notificar(id) {
        try {
        }
        catch (error) {
        }
        return false;
    }
    Apagar(id) {
        return false;
    }
    Editar(Alocacao) {
        try {
        }
        catch (error) {
        }
        return false;
    }
    static Criar() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = new index_1.Database();
                yield data.Create({
                    nome: 'teste', cargo: 'teste2',
                    inicio: new Date(), termino: new Date(), Assunto: 'teste', Projeto: { id: '32', nome: 'teste', nome_gerente: 'test3' }, Gerente: { id: '32', nome: 'teste' }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.Allocation = Allocation;
