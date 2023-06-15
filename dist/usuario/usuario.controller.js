"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_dto_1 = require("./dto/usuario.dto");
const usuario_entity_1 = require("./usuario.entity");
const usuario_dm_1 = require("./usuario.dm");
const uuid_1 = require("uuid");
const listaUsuario_dto_1 = require("./dto/listaUsuario.dto");
let UsuarioController = class UsuarioController {
    constructor(clsUsuariosArmazenados) {
        this.clsUsuariosArmazenados = clsUsuariosArmazenados;
    }
    async RetornoUsuarios() {
        const usuariosListados = await this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(usuario => new listaUsuario_dto_1.listaUsuarioDTO(usuario.id, usuario.nome));
        return listaRetorno;
    }
    async criaUsuario(dadosUsuario) {
        var usuario = new usuario_entity_1.UsuarioEntity((0, uuid_1.v4)(), dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.cidade, dadosUsuario.email, dadosUsuario.telefone, dadosUsuario.senha);
        var retornoUsuario;
        this.clsUsuariosArmazenados.AdicionarUsuario(usuario);
        retornoUsuario = {
            id: usuario.id,
            message: "Usuário Criado"
        };
        return retornoUsuario;
    }
    async atualizaUsuario(id, novosDados) {
        const usuarioAtualizado = await this.clsUsuariosArmazenados.atualizaUsuario(id, novosDados);
        return {
            usuario: usuarioAtualizado,
            message: 'Usuario Atualizado'
        };
    }
    async removeUsuario(id) {
        const usuarioRemovido = await this.clsUsuariosArmazenados.removeUsuario(id);
        return {
            usuario: usuarioRemovido,
            message: 'Usuario Removido'
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "RetornoUsuarios", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_dto_1.criaUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "criaUsuario", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "atualizaUsuario", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "removeUsuario", null);
UsuarioController = __decorate([
    (0, common_1.Controller)('/usuarios'),
    __metadata("design:paramtypes", [usuario_dm_1.UsuarioArmazenados])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map