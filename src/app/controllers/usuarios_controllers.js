const Usuarios_db = require('../BD/usuarios_db');
var db = require('../../config/database');

class UsuariosControllers
{
    insereNovoUsuario() {
        return function(req,res) {
            const usuarioDB = new Usuarios_db(db);
            usuarioDB.incluiUsuarios(req.body)
                .then(res.redirect('/'))
                .catch(erro => console.log(erro));
        }
    }
    validaAcessoUsuario()
    {
        return function(req,res) {
            const usuarioDB = new Usuarios_db(db);
            usuarioDB.selectUsuario(req.body.cpf,req.body.senha)
                .then (dados => {
                    if (dados > 0) {
                        usuarioDB.criaCarrinho()
                        .then (dados => {
                            console.log('CARRINHO -> ERRRO!');
                        })
                        .catch(erro => { 
                            console.log('CARRINHO -> SUCESSO!');
                        })
                        console.log('USUÁRIO -> EXISTE!');
                        res.redirect('/');
                    }
                })  
                .catch(erro => { 
                    console.log("SELECT RESULTADO = " + erro);
                    console.log('USUÁRIO -> INEXISTENTE!');
                    res.redirect('/login');
                })
        }
    }
}
module.exports = UsuariosControllers;