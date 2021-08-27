"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    server: { port: process.env.PORT || 3000 },
    mongoDB: { devConnection: process.env.DB_URL || 'Alterar Para Sua String de Conexão' },
    TOKEN_SECRET: 'HVEX_TOKEN_SECRET',
}
