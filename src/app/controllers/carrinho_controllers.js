const Produtos_db = require('../BD/produtos_db');
var db = require('../../config/database');

class CarrinhoControllers
{
    exibeProdutosCarrinho() {
        return function (req, res) {
            const produtoDB = new Produtos_db(db);
            produtoDB.selecionaProdutoDoCarrinho(function (error, resultadosProduto) {
                produtoDB.selecionaCarrinho(function (error, resultadosCarrinho) {
                    var carrinho = resultadosCarrinho[0].carrinho;
                    var valorTotalP = 0;
                    var valorTotalF = 0;
                    for(var i = 0; i<resultadosProduto.length; i++){
                        valorTotalP = valorTotalP + resultadosProduto[i].valor;
                        valorTotalF = valorTotalF + resultadosProduto[i].totalDoProduto;
                    }
                    console.log('Acessou carrinho logout...')
                    res.render('carrinho.ejs',{
                        produtosSelecionados: resultadosProduto,
                        valorTotalF: valorTotalF,
                        temCarrinho: carrinho
                    })
                });
            });
        }
    }
    excluiProdutosDoCarrinho() {
        return function (req, res) {
            const produtoDB = new Produtos_db(db);
            produtoDB.deletaProdutos(function (error, resultadosProduto) {
                produtoDB.deletaCarrinhos(function (error, resultadosCarrinho) {
                    produtoDB.selecionaCarrinho(function (error, resultadosCarrinho) {
                        var carrinho = resultadosCarrinho[0].carrinho;
                        res.render('carrinho.ejs',{
                            produtosSelecionados: resultadosProduto,
                            valorTotalF: 0,
                            temCarrinho: carrinho
                        })
                    });
                });
            });
        }
    }
}
module.exports = CarrinhoControllers; 