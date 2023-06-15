import { MinLength, IsEmail ,IsNotEmpty, IsString, IsInt, IsOptional} from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class AlterarUsuarioDTO{

    @IsString()
    @IsNotEmpty ({message: "O nome não pode estar vazio"})
    @IsOptional ()
    nome: string;

    @IsInt ({message: "Idade inválida"})
    @IsOptional ()
    idade: BigInteger;

    @IsString ({message: "Cidade inválida"})
    @IsOptional ()
    cidade: string;

    @IsEmail (undefined,{message: "Email inválido"})
    @EmailUnico ({message: "Já existe usuário com esse email"})
    @IsOptional ()
    email: string;

    @IsString ({message: "Telefone inválido"})
    @IsOptional ()
    telefone: string;

    @MinLength (6,{message: "Tamanho da senha inválido"})
    @IsOptional ()
    senha: string;
}