# Back-end Challenge - Softcom

## Problema

Precisamos criar uma loja virtual para nossos pequenos empreendedores. Nessa lojinha teremos apenas cadastro do empreendedor e os itens que ele deseja vender. Lembrando que o item deve ter pelo menos um preço para venda e caso o pagamento seja em dinheiro, o sistema pode conceder um desconto de até 5% do preço do item.
Toda a separação entre classes, interfaces e atributos é por sua conta. Como dito acima, estaremos de olho em todo o código.
Abaixo retorno os exemplos das rotas que minimamente sejam disponibilizadas.

## Configuração do ambiente de desenvolvimento

### Instalar o Node.js

Node.js é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis e poderá ser instalado por meio do endereço `https://nodejs.org/en/`.

### Instalar o Docker por meio do seguinte endereço

`https://docs.docker.com/docker-for-windows/install/`

### Criar o container Docker

```bash
docker run --name softcom -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11
```

Observação: caso a porta 5432 esteja ocupada rodando outra aplicação, poderá definir qualquer outra porta que ele redirecionará para a porta 5432, mas na configuração do .env, deverá ser definida a porta que escolheu para rodar na aplicação, se não o banco de dados não será encontrado.

### Instalar o Postbird

Postbird é um SGBD para bancos de dados criados com Postgres e após instalado o mesmo deverá ser executado, passando os dados de acesso, tais como:

host: 192.168.99.100 ou localhost
Port: 5432
Username: postgres
password:  docker
Todos esses dados poderam ser alterados de acordo com a configuração na criação inicial do container

Linux ou Mac: `https://electronjs.org/apps/postbird`
Windows: `https://github.com/Paxa/postbird/releases`

### Instalar o Yarn e incializar o projeto

O yarn é um gerenciador de pacotes e poderá ser instalado por meio do endereço
`https://yarnpkg.com/en/docs/install`, seguindo os passos conforme documentação

Para inicializar o projeto após realizar o clone do repositório por meio do endereço
`https://github.com/thalysssonNascimento/challenge`, deverá rodar o seguinte comando
na raiz do projeto

```bash
yarn
```

ou caso o yarn não esteja instalado

```bash
npm install
```

### Instalar o Insomnia REST Client

O Insomnia é um cross-platform onde poderá realizar testes na sua API GraphQL ou REST, poderá ser instaldo
por meio do endereço `https://insomnia.rest/download/`

## Rotas

### Rotas da API Desafio Softcom

 * post - http://localhost:3333/api/v1user
 * get -  http://localhost:3333/api/v1user/find/:id
 * post - http://localhost:3333/api/v1auth/sign_in

 * post -   http://localhost:3333/api/v1user/item
 * get -    http://localhost:3333/api/v1user/item
 * get -    http://localhost:3333/api/v1user/item/:id
 * put -    http://localhost:3333/api/v1user/item/:id
 * delete - http://localhost:3333/api/v1user/item/:id

 * get -  http://localhost:3333/api/v1list-product/
 * get -  http://localhost:3333/api/v1product-for-sales/user/:id
 * get -  http://localhost:3333/api/v1product-for-sales/user/:id/item/:idItem
 * post - http://localhost:3333/api/v1product-for-sales/user/:id/item/:idItem/buy

### Requisitos funcionais alcançados

   + O usuário deve poder criar uma conta com nome, e-mail, cnpj e senha;
    
   + O usuário deve poder se autenticar na aplicação com e-mail ou cnpj e senha;
    
   + O usuário deve poder cadastrar um item com nome, descrição, preço;
    
   + O usuário não pode criar uma conta caso o e-mail/cnpj já exista no sistema;
    
   + O usuário deve poder excluir um item pelo id;
    
   + O usuário deve poder atualizar um item pelo id;
    
   + O usuário deve poder exibir um item pelo id;
    
   + O usuário deve poder listar os itens por usuário.
