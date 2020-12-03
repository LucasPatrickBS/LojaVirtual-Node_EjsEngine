Create table usuario (
	idUsuario int primary key AUTO_INCREMENT,
	cpf varchar(11) not null,
	nome varchar(100) not null,
	email varchar(100) not null,
	senha varchar(50) not null
	);
Create table produto (
	idProduto int primary key AUTO_INCREMENT,
	nome varchar(100) not null,
	codigo varchar(100) not null,
	descricao varchar(500) not null,
	foto varchar(50) not null,
	valor decimal(15,2) not null
);

Create table PrdDoCar (
	idPdrDoCar int primary key AUTO_INCREMENT,
	fkProduto int not null,
	constraint `fk_fkProduto` foreign key(`fkProduto`) references Produto(`idProduto`),
	quantidade int not null
);

Create table carrinho(
	idCarrinho int primary key AUTO_INCREMENT,
	qtdProduto int not null,
	valorTotal int not null
);