import { MinLength, IsEmail ,IsNotEmpty, IsString, IsInt} from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class criaUsuarioDTO {
    @IsString()
    @IsNotEmpty ({message: "O nome não pode estar vazio"})
    nome: string;

    @IsInt ({message: "Idade inválida"})
    idade: BigInteger;

    @IsString ({message: "Cidade inválida"})
    cidade: string;

    @IsEmail (undefined,{message: "Email inválido"})
    @EmailUnico ({message: "Já existe usuário com esse email"})
    email: string;

    @IsString ({message: "Telefone inválido"})
    telefone: string;

    @MinLength (6,{message: "Tamanho da senha inválido"})
    senha: string;
}