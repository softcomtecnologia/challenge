## Api Back-end Challenge Softcom

**Api desenvolvida para o teste de nivelamebto em programação back-end da Softcom.**

Neste projeto eu optei por uma abordagem mais funcional, o que considerei mais interessante para trabalhar com Javascript puro neste cenário, e por não estar utilizando TypeScript nele, os conceitos de Orientação a Objetos ficam menos convenientes no contexto da estruturação que fiz.

Também fiquei na duvida em utilizar o query bulder Knex, mas acabei optando por usar o driver MySql para escrever as querys na mão, pois já que vou ser avaliado, acho mais conveniente demostrar conhecimentos em SQL, pois o Nkex facilita muito, proporcionando varias vantagens como a legibilidade e escrita do código, manutenibilidade, abstração das querys, enfim, embora sejam considerações essenciais para um projeto real, reitero que para finalidade de avaliação, considerei mais interessante a escrita manual das querys.

Optei também por implementar a autenticação, utilizando a biblioteca bcrypt para conversão da senha em um código hash para gravação no banco e para comparação da senha enviada durante login com o hash do banco de dados no processo de autenticação, onde também utilizei a biblioteca jsonwebtoken para geração do jwt de acesso dos usuários.  A jsonwebtoken também é utilizado no modulo de login para garantir que algumas rotas só sejam acessadas por usuários autenticados.


## Rotas disponibilizadas

**POST /api/v1/user - Cadastro de usuário**
Cadastra um novo usuário

**GET /api/v1/user/:id - Busca de usuário**
Recupera um usuário pelo ID

**POST /api/v1/user/:id/item - Cadastro de item**
Cadastra um novo item

**GET /api/v1/user/:id/item - listar itens por usuário**
Recupera e lista itens por usuário

**GET /api/v1/user/:id/item/:itemId - Busca um item**
Recupera um item do usuário

**UPDATE /api/v1/user/:id/item/:itemId - Atualiza um item**
Atualiza um item do usuário

**DELETE /api/v1/user/:id/item/:itemId - Remove um item**
Remove um item do usuário

**POST /api/v1/auth/sign_in - Autenticação**
Autentica um usuário na aplicação

### Recursos utilizados

- NodeJS
- Express
- Mysql
- Dotenv
- Bcrypt
- Jsonwebtoken

### Script e entidades do banco de dados
**Script para gerar o banco de dados esta dentro da pasta assets com nome script.sql**

**Entidades**
![](/assets/entidades.png)