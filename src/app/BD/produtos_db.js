class Produtos_db
{
    // construtor da classe
    constructor(db){ this._db = db; }
    insereProdutoDoCarrinho(produto) {
        var sqlCons = "INSERT INTO prddocar(fkProduto, quantidade) VALUES ('" + produto.idProduto + "','" + produto.quantidade + "')";
        this._db.query(sqlCons, function (erro) {
            if (erro) {
                console.log(erro);
                return reject('INSERT CARRINHO -> ERRO!');
            }
            else { 
                console.log("INSERT CARRINHO -> SUCESSO!");
            }
        })
    }
    selecionaProduto(callback) {
        var sqlCons = 'SELECT codigo, foto, nome, descricao, valor FROM produto';
        this._db.query(
            sqlCons,
            (erro, resultados) =>
                callback(erro, resultados)
        )
    }
    selecionaProdutoDoCarrinho(callback) {
        var sqlCons = 'SELECT p.codigo, p.foto, p.nome, p.descricao, p.valor, c.quantidade, (p.valor * c.quantidade) as totalDoProduto FROM produto p INNER JOIN prddocar c ON c.fkProduto = p.idProduto';
        this._db.query(
            sqlCons,
            (erro, resultados) =>
                callback(erro, resultados)
        )
    }
    selecionaCarrinho(callback){
        var sqlCons = 'SELECT sum(idCarrinho) as carrinho FROM carrinho';
        this._db.query(
            sqlCons,
            (erro, resultados) =>
                callback(erro, resultados)
        )
    }
    deletaProdutos(callback) {
        console.log('Fazendo drop')
        var sqlCons = 'DELETE FROM prddocar';
        this._db.query(
            sqlCons,
            (erro, resultados) =>
                callback(erro, resultados)
        )
    }
    deletaCarrinhos(callback) {
        console.log('Fazendo drop')
        var sqlCons = 'DELETE FROM carrinho';
        this._db.query(
            sqlCons,
            (erro, resultados) =>
                callback(erro, resultados)
        )
    }
}
module.exports = Produtos_db;