export declare class UsuarioEntity {
    #private;
    id: string;
    nome: string;
    idade: BigInteger;
    cidade: string;
    email: string;
    telefone: string;
    constructor(id: string, nome: string, idade: BigInteger, cidade: string, email: string, telefone: string, senha: string);
    get senha(): string;
    set senha(senhaNova: string);
}
