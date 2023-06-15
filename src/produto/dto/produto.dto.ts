import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class criaProdutoDTO {

    @IsString ()
    @IsNotEmpty ({message: "O nome não pode estar vazio!"})
    nome: string;

    @IsBoolean ()
    ativo: boolean;

    @IsString ({message: "Valor inválido"})
    valor: string;

    @IsInt({message: "Estoque inválido"})
    estoque: BigInt;

    @IsString({message:"Medidas inválidas"})
    medidas: [string];
    
    @IsString({message:"Cor inválida"})
    cor: [string];

    @IsString({message:"Marca inválida"})
    marca: string;

   
}