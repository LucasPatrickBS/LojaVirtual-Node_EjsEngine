const Produtos_db = require('../BD/produtos_db');
var db = require('../../config/database');

class ProdutosControllers
{
    exibeProdutos() {
        return function (req, res) {
            const produtoDB = new Produtos_db(db);
            produtoDB.selecionaProduto(function (error, resultadosProduto) {
                produtoDB.selecionaCarrinho(function (error, resultadosCarrinho) {
                    var carrinho = resultadosCarrinho[0].carrinho;
                    console.log('Acessou produtos...')
                    res.render('produtos.ejs',{
                        produtos: resultadosProduto,
                        temCarrinho: carrinho
                    })
                });
            });
        }
    }
    produtoNoCarrinho() {
        return function(req,res) {
                const produtosDB = new Produtos_db(db);
                produtosDB.insereProdutoDoCarrinho(req.body)
            }
    }
}
module.exports = ProdutosControllers;