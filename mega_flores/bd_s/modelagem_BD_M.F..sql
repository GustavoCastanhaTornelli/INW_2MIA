create database mega_flores
use mega_flores

create table clientes(
id_cod_cli int primary key identity (1,1),
nome varchar(70) not null,
email varchar(50) not null,
senha varchar(30) not null,
cpf varchar(15),
endereco varchar(50)
)
create table produtos(
id_cod_prod int primary key identity (1,1),
nome varchar(100) not null,
descricao varchar(300),
quantidade int not null,
valor float not null
)
create table notaFiscal(
id_cod_NF int primary key identity (1,1),
dataEmicao date not null,
id_cod_cli int
)
create table transacao(
id_cod_prod int,
id_cod_NF int,
quantidade_vendas int
)

insert into produtos
(nome, descricao, quantidade, valor)
values('Margarida Branca','A flor margarida branca significa o amor, pureza, paz, inocência, juventude, criatividade, virgindade, sensibilidade e a bondade.',100,2.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Margarida Vermelha','O significado das margaridas vermelhas pode variar dependendo da cultura ou contexto em que são usadas. Em geral, a cor vermelha simboliza o amor, a paixão e a emoção intensa, então as margaridas vermelhas podem representar sentimentos românticos ou amorosos.',100,3.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Margarida Amarela','Há quem acredite que o significado de margarida amarela é amor leal. Mas, também tem quem ache que representa a bondade, afeto e pureza.',100,1.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Tulipa Branca','A tulipa branca representa pureza e perdão. Linda, ela ganha destaque na decoração devido à cor tão elegante e sofisticada.',100,4.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Tulipa Vermelha','A tulipa vermelha é uma flor de beleza incomparável, que simboliza amor verdadeiro e paixão intensa.',100,6.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Tulipa Amarela','A tulipa amarela simboliza alegria, felicidade, amizade e calor humano. É uma flor vibrante e exuberante, que transmite energia positiva e otimismo.',100,5.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Rosa Branca','No amor, a rosa branca transmite paz, tranquilidade e inocência, além de transpassar a sensação de calmaria e ingenuidade.',100,3.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Rosa Vermelha','As clássicas rosas vermelhas significam amor, romance e a mais profunda afeição por alguém.',100,2.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Rosa Amarela','Rosas Amarelas representam riqueza, o ouro, os raios do Sol, a energia e a prosperidade.',100,2.99)

select produtos from mega_flores


insert into clientes
(nome,email,senha,cpf,endereco)
values('Ricardo Flores','ricardogamer323@gmail.com','FloresSaoLegais','101 463 834-50','4173, Bela Vista, São Paulo SP')

insert into clientes
(nome,email,senha,cpf,endereco)
values('Vítor Rosário','vitorRosarioSilva@yahoo.com.br','Vitao11021994','413 551 591-70','5143, Apartamento 6, São Francisco, São Paulo SP')

insert into clientes
(nome,email,senha,cpf,endereco)
values('Suzana Ramos','susanaramos1@gmail.com','FQWJIBF_15943810','314 816 556-60','7546, São Cristóvão, São Paulo SP')

insert into clientes
(nome,email,senha,cpf,endereco)
values('Wanda Pacheco','pachecowanda@outlook.com.br','WP253581','113 414 182-60','950, Bela Vista, São Paulo SP')

insert into clientes
(nome,email,senha,cpf,endereco)
values('Leandro Borba','leandroBorba89@gmail.com','LALILULELO123456','931 546 513-30','5863, Boa Vista, Osasco SP')

select clientes from mega_flores


use master
drop database mega_flores