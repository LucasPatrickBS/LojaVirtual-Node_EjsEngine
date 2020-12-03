const UsuarioControlador = require('../controllers/usuarios_controllers');
const usuarioCont = new UsuarioControlador();

const HomeControlador = require('../controllers/home_controllers');
const homeCont = new HomeControlador();

const ProdutosControlador = require('../controllers/produtos_controllers');
const produtosCont = new ProdutosControlador();

const CarrinhoControlador = require('../controllers/carrinho_controllers');
const carrinhoCont = new CarrinhoControlador();

module.exports = (aplicacao) => {

        aplicacao.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    /****************  ROTAS  ****************/

    aplicacao.get('/login', function(req,res) {
        res.render('login.ejs');
        console.log('Acessou login...');
    })
    
    aplicacao.get('/cadastrar', function(req,res) {
        res.render('cadastrar.ejs');
        console.log('Acessou cadastro...');
    })

    aplicacao.get('/', homeCont.exibeProdutos());

    aplicacao.get('/Produtos', produtosCont.exibeProdutos());
    
    aplicacao.get('/Carrinho', carrinhoCont.exibeProdutosCarrinho());

    aplicacao.get('/logout', carrinhoCont.excluiProdutosDoCarrinho());

    aplicacao.post('/insertProdCarr', produtosCont.produtoNoCarrinho());

    aplicacao.post('/validaUsuarios', usuarioCont.validaAcessoUsuario());

    aplicacao.post('/insertUsuarios', usuarioCont.insereNovoUsuario());
}