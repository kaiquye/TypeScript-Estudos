"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotas = void 0;
const express_1 = require("express");
const Allocation_1 = require("./models/Allocation/Allocation");
exports.rotas = (0, express_1.Router)();
exports.rotas.get('/', (req, res) => {
    Allocation_1.Allocation.Criar();
});
