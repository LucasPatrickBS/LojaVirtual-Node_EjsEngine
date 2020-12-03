class Usuarios_db
{
    // construtor da classe
    constructor(db){ this._db = db; }

    selectUsuario(cpf,senha) {
       return new Promise((resolve,reject) => {
          var sqlConsUsuarios = "SELECT * FROM USUARIO WHERE cpf='" + cpf + "' AND senha='" + senha + "'";
          console.log("SELECT MONTADO = " + sqlConsUsuarios);
          this._db.query(sqlConsUsuarios, function (erro,resultado) {
              if (resultado.length > 0) {
                  var dados = resultado.length;
                  resolve(dados);
              }
              else { 
                return reject('USUÁRIO -> NÃO LOCALIZADO NO BD');
              }
          })
       })
    }
    criaCarrinho(){
        return new Promise((resolve,reject) => {
            var sqlConsUsuarios = "INSERT INTO `carrinho`(`qtdProduto`, `valorTotal`) VALUES (1,1)";
            this._db.query(sqlConsUsuarios, function (erro,resultado) {
                if (resultado.length > 0) {
                    var dados = resultado.length;
                    resolve(dados);
                }
                else { 
                  return reject('CARRINHO -> NÃO INSERIDO NO BD');
                }
            })
         })
    }
    selectUsuarioPorCpf(cpf, callback) {
        var sqlCons = "SELECT idUsuario FROM USUARIO WHERE cpf='" + cpf + "'";
        console.log(sqlCons);
        this._db.query(
            sqlCons,
            (erro, resultados) =>
                callback(erro, resultados)
        )
    }
    incluiUsuarios(usuario) {
        return new Promise((resolve,reject) => {
            var sqlInsusUario = "INSERT INTO USUARIO (nome, cpf, senha, eMail) VALUES('" + usuario.nome + "','" + usuario.cpf + "','" + usuario.senha + "','" + usuario.email + "');";
            console.log("INSERT MONTADO = " + sqlInsusUario);
            this._db.query(sqlInsusUario, function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('INCLUSÃO USUARIO -> ERRO');
                }
                else { return resolve();  }
            }) 
        })
    }
    
}
module.exports = Usuarios_db;