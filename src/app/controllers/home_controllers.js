const Produtos_db = require('../BD/produtos_db');
var db = require('../../config/database');

class HomeControllers
{
    exibeProdutos() {
        return function (req, res) {
            const produtoDB = new Produtos_db(db);
            produtoDB.selecionaProduto(function (error, resultadosProduto) {
                produtoDB.selecionaCarrinho(function (error, resultadosCarrinho) {
                    var carrinho = resultadosCarrinho[0].carrinho;
                    console.log('Acessou index...')
                    res.render('index.ejs',{
                        produtosPrincipais: resultadosProduto,
                        temCarrinho: carrinho
                    })
                });
            });
        }
    }
}

module.exports = HomeControllers; 