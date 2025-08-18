# Challenge Backend - PHP

API REST desenvolvida em **PHP** com **PDO** e **MySQL**, utilizando autenticação com **JWT**.  

---

## 🚀 Tecnologias Utilizadas

- [PHP 8+](https://www.php.net/)
- [MySQL](https://www.mysql.com/)
- [Firebase PHP-JWT](https://github.com/firebase/php-jwt)
- [Composer](https://getcomposer.org/)

---

## ⚙️ Pré-requisitos

- [PHP 8+](https://www.php.net/)
- [MySQL 8+](https://dev.mysql.com/downloads/)
- [Composer](https://getcomposer.org/)

---

## 🛠 Configuração

1. **Banco de Dados MySQL**  
   Crie um banco de dados chamado `challenge_php` no MySQL:

```sql
CREATE DATABASE challenge_php;
```

2. **Configuração de Conexão**  
   No arquivo `src/config.php`, ajuste conforme seu ambiente:

```php
$host = 'localhost';
$db   = 'challenge_php';
$user = 'root';
$pass = '';
$charset = 'utf8';

$jwt_secreto = "minhachavesecreta";
```

3. **Instalar Dependências**  
   No diretório do projeto, rode:

```bash
composer install
```

---

## ▶️ Executando a Aplicação

Se estiver usando PHP embutido:

```bash
php -S localhost:8000 -t public
```

A API estará disponível em:  
👉 `http://localhost:8000`

---

## 📄 Endpoints Principais

### 👤 Usuários
- `POST /usuarios` → Registrar novo usuário  
- `POST /login` → Login e geração de JWT  

### 📦 Produtos
- `GET /produtos` → Listar produtos  
- `POST /produtos` → Criar produto (JWT obrigatório)  

### 🛒 Vendas
- `GET /vendas` → Listar vendas (JWT obrigatório)  
- `GET /vendas/{id}` → Detalhes de uma venda (JWT obrigatório)  
- `POST /vendas` → Criar venda (JWT obrigatório)  
- `DELETE /vendas/{id}` → Excluir venda (JWT obrigatório)  

### 📌 Itens da Venda
- `POST /vendas/{id}/itens` → Adicionar item à venda (JWT obrigatório)  
- `PUT /vendas/{id}/itens/{itemId}` → Atualizar item (JWT obrigatório)  
- `DELETE /vendas/{id}/itens/{itemId}` → Excluir item (JWT obrigatório)  

---

## 📄 Documentação da API no Postman

Você pode importar o arquivo JSON de coleção no Postman para testar todos os endpoints.  
👉 Exemplo: `Php-Softcom-Challenge.postman_collection.json`

---

## 📌 Observações

- Senhas são criptografadas com **password_hash (BCRYPT)**.  
- Autenticação baseada em **JWT** com expiração de **1 hora**.  
- CORS habilitado para permitir requisições externas.  
