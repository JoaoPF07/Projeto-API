import { criaUsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioArmazenados } from "./usuario.dm";
import { listaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AlterarUsuarioDTO } from "./dto/atualizaUsuario.dto";
export declare class UsuarioController {
    private clsUsuariosArmazenados;
    constructor(clsUsuariosArmazenados: UsuarioArmazenados);
    RetornoUsuarios(): Promise<listaUsuarioDTO[]>;
    criaUsuario(dadosUsuario: criaUsuarioDTO): Promise<any>;
    atualizaUsuario(id: string, novosDados: Partial<AlterarUsuarioDTO>): Promise<{
        usuario: UsuarioEntity;
        message: string;
    }>;
    removeUsuario(id: string): Promise<{
        usuario: UsuarioEntity;
        message: string;
    }>;
}
