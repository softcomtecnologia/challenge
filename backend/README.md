<h1 align="center" width="100%" height="300px" background="#000">
    <img alt="Backend Node" title="Backend Node" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="220px" />
</h1>

<p align="center">
  <a href="#-tecnologia">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Como-rodar-o-projeto?">Como-rodar-o-projeto?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

 <img src="https://img.shields.io/static/v1?label=JS&message=Node&color=3E863D&labelColor=000000" alt="Node.JS!" />
</p>

<br>

## 🚀 Tecnologia

Projeto desenvolvido com a stack [Node.JS](https://nodejs.org/en/) com [TypeScript](https://www.typescriptlang.org/docs/home.html) e como banco de dados o [PostgreSQL](https://www.postgresql.org/docs/) através do [Docker](https://docs.docker.com/get-started/). Utilizando as libs: 

- [Express](https://expressjs.com/pt-br/api.html)
- [JWT](https://jwt.io/introduction/)
- [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)
- [Uuidv4](https://www.npmjs.com/package/uuidv4)
- [TypeORM](https://typeorm.io/#/)
- [Reflect-metadata](https://rbuckton.github.io/reflect-metadata/)
- [PostgreSQL-pg]()
- [bCryptJS](https://www.npmjs.com/package/bcryptjs)

## 💻 Projeto

## Problema

Precisamos criar uma loja virtual para nossos pequenos empreendedores. Nessa lojinha teremos apenas cadastro do empreendedor e os itens que ele deseja vender. Lembrando que o item deve ter pelo menos um preço para venda e caso o pagamento seja em dinheiro, o sistema pode conceder um desconto de até 5% do preço do item.
Toda a separação entre classes, interfaces e atributos é por sua conta. Como dito acima, estaremos de olho em todo o código.
Abaixo retorno os exemplos das rotas que minimamente sejam disponibilizadas.

### Rotas

**POST /api/v1/user - Cadastro de usuário**
Cadastra um novo usuário

**GET /api/v1/user/:id - Busca de usuário**
Recupera um usuário pelo ID

**POST /api/v1/auth/sign_in - Autenticação**
Autentica um usuário na aplicação

**POST /api/v1/user/:id/item - Cadastro de item**
Cadastra um novo item

**GET /api/v1/user/:id/item/:itemId - Busca um item**
Recupera um item do usuário

**UPDATE /api/v1/user/:id/item/:itemId - Atualiza um item**
Atualiza um item do usuário

**DELETE /api/v1/user/:id/item/:itemId - Remove um item**
Remove um item do usuário

## 👨🏻‍💻 Como-rodar-o-projeto?

É necessário ter instalado em sua máquina: 
- [Yarn](https://classic.yarnpkg.com/en/docs/getting-started)
- [Docker](https://docs.docker.com/get-started/)
- Opcional:
    - [Insomnia](https://support.insomnia.rest/category/9-getting-started) - Caso queira fazer requests
    - [DBeaver](https://dbeaver.com/docs/dbeaver.pdf) - Caso queira ver os dados no Banco

### Comandos: 

> Instalação das dependências
```bash
$ yarn
```

> Criando a imagem do banco no Docker
```bash
$ docker run --name softcom_postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres
```

> OBSERVAÇÃO
> CRIAR UM DATABASE COM O NOME: softcom_tecnologia
> geralmente eu crio através do DBeaver

> Rodando as migrations
```bash
$ yarn typeorm migration:run
```

> Iniciando Servidor
```bash
$ yarn dev:server
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

---

Feito com ♥ by Adrianderson Lira 

---

## Todos os Comandos 

```bash
$ yarn init -y
```
```bash
$ yarn add typescript -D
```
```bash
$ yarn tsc --init
```
```bash
$ yarn add ts-node-dev -D
```
```bash
$ yarn add express express-async-errors -D @types/express 
```
```bash
$ yarn add cors -D @types/cors
```
```bash
$ yarn add uuidv4
```
```bash
$ docker run --name softcom_postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres
```
```bash
$ yarn add typeorm pg
```
```bash
$ yarn typeorm migration:create -n CreateUser
```
```bash
$ yarn typeorm migration:run
```
```bash
$ yarn add reflect-metadata
```
```bash
$ yarn add bcryptjs -D @types/bcryptjs
```
```bash
$ yarn add jsonwebtoken -D @types/jsonwebtoken
```
```bash
$ yarn typeorm migration:create -n CreateItem
```
