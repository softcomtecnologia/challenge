# Challenge Backend

API REST desenvolvida em **Node.js** com **Express** e **Sequelize** 

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [JWT (JSON Web Token)](https://jwt.io/)
- [BcryptJS](https://www.npmjs.com/package/bcryptjs)
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)

---

## ⚙️ Pré-requisitos

- [Node.js 18+](https://nodejs.org/)
- [MySQL 8+](https://dev.mysql.com/downloads/)

---

## 🛠 Configuração

1. **Banco de Dados MySQL**  
   Crie um banco de dados chamado `challenge_backend` no MySQL:

```sql
CREATE DATABASE challenge_backend;
```

2. **Configuração de Conexão**  
   No arquivo `src/config/db.config.js`, ajuste conforme seu ambiente:

```javascript
export default {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "challenge_backend",
    PORT: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
};
```

---

## ▶️ Executando a Aplicação

Para instalar dependências:

```bash
npm install
```

Para rodar em modo desenvolvimento:

```bash
npm start
```

Isso irá:

- Iniciar o servidor (`server.js`) na porta configurada (padrão: **8080**)

---

## 📄 Documentação da API

Você pode importar o arquivo Json (`postman\Backend-Softcom-Challenge.postman_collection.json`) diretamente no Postman para visualizar todas as rotas, parâmetros e exemplos de requisições mapeadas.

---


## 📌 Funcionalidades

- **Criar usuário**: Cadastro com senha criptografada.
- **Autenticação/login**: retorna informações do usuário e token JWT.
- **Criar item**: adiciona um item ao banco do usuário.
- **Listar itens**: retorna os itens do usuário.
- **Criar venda**: calcula o valor total com base no preço e quantidade dos itens; aplica desconto de 5% se o pagamento for em dinheiro.
- **Listar vendas**: retorna todas as vendas do usuário.

---

## 📌 Observações

- Senhas são criptografadas com **bcrypt**.
- Autenticação baseada em **JWT** com expiração de 30 minutos.
- Roles suportadas: `user`, `admin`, `moderator`.
