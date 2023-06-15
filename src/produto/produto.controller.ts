import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { listaProdutoDTO } from "./dto/listaproduto.dto";
import { criaProdutoDTO } from "./dto/produto.dto";
import { ProdutosArmazenados } from "./produto.dm";
import { ProdutoEntity } from "./produto.entity";
import {v4 as uuid} from 'uuid';
import { AlterarProdutoDTO } from "./dto/atualizaProduto.dto";


@Controller ('/produtos')

export class ProdutoController {

    constructor( private clsProdutosArmazenados: ProdutosArmazenados){
    }

    @Get ()
    async RetornoProdutos () {
        const produtosListados = await this.clsProdutosArmazenados.Produtos;
        const listaRetorno = produtosListados.map(
            produto => new listaProdutoDTO (
                produto.id,
                produto.nome
            )
        );
        
        return listaRetorno;
    }

    @Post ()
    async criaProduto ( @Body() dadosProduto: criaProdutoDTO) {

        var produto = new ProdutoEntity(
            uuid(),
            dadosProduto.nome,
            dadosProduto.ativo,
            dadosProduto.valor,
            dadosProduto.estoque,
            dadosProduto.medidas,
            dadosProduto.cor,
            dadosProduto.marca);

            var retornoProduto;

            this.clsProdutosArmazenados.AdicionarProduto(produto);
            retornoProduto={
                id: produto.id,
                message:"Produto Criado"
            }

            return retornoProduto;
    }

    @Put ('/:id')
    async atualizaProduto(@Param ('id') id:string, @Body() novosDados:Partial<AlterarProdutoDTO>){
        const produtoAtualizado = await this.clsProdutosArmazenados.atualizaProduto(id, novosDados);
        return {
            produto: produtoAtualizado,
            message: 'Produto Atualizado'
        }
    }

    @Delete ('/:id')
    async removeProduto(@Param('id') id:string){
        const produtoRemovido = await this.clsProdutosArmazenados.removeProduto(id);
        return{
            produto: produtoRemovido,
            message: 'Produto Removido'
        }
    }

}