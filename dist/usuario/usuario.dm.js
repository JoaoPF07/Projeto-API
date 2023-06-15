"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _UsuarioArmazenados_usuarios;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioArmazenados = void 0;
const common_1 = require("@nestjs/common");
let UsuarioArmazenados = class UsuarioArmazenados {
    constructor() {
        _UsuarioArmazenados_usuarios.set(this, []);
    }
    AdicionarUsuario(usuario) {
        __classPrivateFieldGet(this, _UsuarioArmazenados_usuarios, "f").push(usuario);
    }
    get Usuarios() {
        return __classPrivateFieldGet(this, _UsuarioArmazenados_usuarios, "f");
    }
    async validaEmail(email) {
        const possivelUsuario = __classPrivateFieldGet(this, _UsuarioArmazenados_usuarios, "f").find(usuario => usuario.email === email);
        return (possivelUsuario !== undefined);
    }
    buscaPorID(id) {
        const possivelUsuario = __classPrivateFieldGet(this, _UsuarioArmazenados_usuarios, "f").find(usuarioSalvo => usuarioSalvo.id === id);
        if (!possivelUsuario) {
            throw new Error('Usuario nao encontrado');
        }
        return possivelUsuario;
    }
    async atualizaUsuario(id, dadosAtualizacao) {
        const usuario = this.buscaPorID(id);
        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            usuario[chave] = valor;
        });
        return usuario;
    }
    async removeUsuario(id) {
        const usuario = this.buscaPorID(id);
        __classPrivateFieldSet(this, _UsuarioArmazenados_usuarios, __classPrivateFieldGet(this, _UsuarioArmazenados_usuarios, "f").filter(usuarioSalvo => usuarioSalvo.id !== id), "f");
        return usuario;
    }
};
_UsuarioArmazenados_usuarios = new WeakMap();
UsuarioArmazenados = __decorate([
    (0, common_1.Injectable)()
], UsuarioArmazenados);
exports.UsuarioArmazenados = UsuarioArmazenados;
//# sourceMappingURL=usuario.dm.js.map