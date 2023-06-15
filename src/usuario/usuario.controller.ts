import {Body , Controller, Post, Get, Put, Param, Delete} from "@nestjs/common";
import { criaUsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioArmazenados } from "./usuario.dm";
import {v4 as uuid} from 'uuid';
import { listaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AlterarUsuarioDTO } from "./dto/atualizaUsuario.dto";

@Controller ('/usuarios')

export class UsuarioController {


    constructor ( private clsUsuariosArmazenados: UsuarioArmazenados){
    }

    @Get ()
    async RetornoUsuarios() {
        const usuariosListados = await this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new listaUsuarioDTO (
                usuario.id,
                usuario.nome
            )
        );
            return listaRetorno;
    }

    @Post ()
    async criaUsuario( @Body() dadosUsuario: criaUsuarioDTO) {

        var usuario = new UsuarioEntity(
            uuid(),
            dadosUsuario.nome,
            dadosUsuario.idade,
            dadosUsuario.cidade,
            dadosUsuario.email,
            dadosUsuario.telefone,
            dadosUsuario.senha);

        var retornoUsuario;

       
        this.clsUsuariosArmazenados.AdicionarUsuario(usuario);
        retornoUsuario={
            id: usuario.id,
            message:"Usuário Criado"
            }

            return retornoUsuario;
    }

    @Put ('/:id')
    async atualizaUsuario(@Param('id') id:string, @Body() novosDados:Partial<AlterarUsuarioDTO>){
        const usuarioAtualizado = await this.clsUsuariosArmazenados.atualizaUsuario(id, novosDados);
        return {
            usuario: usuarioAtualizado,
            message: 'Usuario Atualizado'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.clsUsuariosArmazenados.removeUsuario(id);
        return{
            usuario: usuarioRemovido,
            message:'Usuario Removido' 
            }    
    }
}