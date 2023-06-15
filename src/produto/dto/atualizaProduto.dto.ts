import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AlterarProdutoDTO {

    @IsString ()
    @IsNotEmpty ({message: "O nome não pode estar vazio!"})
    @IsOptional ()
    nome: string;

    @IsBoolean ()
    @IsOptional ()
    ativo: boolean;

    @IsString ({message: "Valor inválido"})
    @IsOptional ()
    valor: string;

    @IsInt({message: "Estoque inválido"})
    @IsOptional ()
    estoque: BigInt;

    @IsString({message:"Medidas inválidas"})
    @IsOptional ()
    medidas: [string];
    
    @IsString({message:"Cor inválida"})
    @IsOptional ()
    cor: [string];

    @IsString({message:"Marca inválida"})
    @IsOptional ()
    marca: string;

   
}