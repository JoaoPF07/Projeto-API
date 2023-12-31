import { Injectable } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";


@Injectable ()

export class ProdutosArmazenados{
    #produtos: ProdutoEntity [] = [];
        AdicionarProduto(produto: ProdutoEntity){
            this.#produtos.push(produto);
        }

        get Produtos () {
            return this.#produtos;
        }

        private buscaPorID(id: string){
            const possivelProduto = this.#produtos.find (
                produtoSalvo => produtoSalvo.id === id
            )
            if (!possivelProduto){
                throw new Error("Produto não encontrado");
                
            }
            return possivelProduto;
            
        }

        async atualizaProduto(id: string, dadosAtualizacao: Partial<ProdutoEntity>){
            const produto = this.buscaPorID(id);
            Object.entries(dadosAtualizacao).forEach(
                ([chave, valor]) => {
                    if (chave === 'id'){
                        return;
                    }
                    produto[chave] = valor;
                }
            )
                return produto;

        }
        
        async adicionarEstoque(id:string, dadosAtualizacao: Partial<ProdutoEntity>){
            const produto = this.buscaPorID(id);
            produto.estoque = dadosAtualizacao.estoque;

            return produto;
        }


        async removeProduto(id:string){
            const produto = this.buscaPorID(id);
            this.#produtos = this.#produtos.filter(
                produtoSalvo => produtoSalvo.id !==id
            )
            return produto;
        }
}