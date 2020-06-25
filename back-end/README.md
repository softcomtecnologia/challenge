# Back-end Challenge - Softcom

Esse é um teste de nivelamento. Queremos deixar claro que não é esperado que todos consigam realizá-lo por completo, já que é destinado a varios níveis de experiência. Esperamos que todas as pessoas que queiram trabalhar conosco tentem realizá-lo e submetam mesmo não tendo concluído todo o desafio. Esperamos que você crie um arquivo _README_ na raiz do projeto falando sobre o desenvolvimento do desafio.

Focamos aqui em design de código e design patterns em _JavaScript_ e principalmente criatividade em resolução de problemas. O objetivo é avaliar sua experiência em escrever código de fácil manutenção, baixo acoplamento e alta coesão.

A Softcom trabalha com feedbacks construtivos, e, portando, entraremos em contato e vamos enviar um retorno do teste enviado. Faremos questão de falar seus pontos fortes e os pontos a melhorar. Então, aproveite essa oportunidade. =]

## Principais responsabilidades que buscamos

- Colaborar com idéias que possam melhorar nossos sistemas e a vida dos nossos usuários;
- Estar disposto a aprender e a ensinar;
- Cuidar dos nossos sistemas como se fossem seus filhos;
- Estar sempre atento a oportunidades para melhorar o código e nossos processos.

## Requisitos e Skills

- Base em programação orientada a objetos;
- Graduado/Cursando Ciência da Computação ou áreas relacionadas ou experiência profissional equivalente;
- Experiência com JavaScript e/ou outra linguagem de programação.
- Conhecer o básico de versionamento com Git;
- Saber como funciona o protocolo HTTP.
- Experiência com banco de dados Relacional, como SQL Server ou MySQL, por exemplo

## Diferenciais

- Experiência em programação assíncrona ou relacionada arquitetura orientada a eventos;
- Experiência em Linguagens Funcionais;
- Experiência com metodologia ágil;
- Experiência com banco de dados NoSQL, como Mongo por exemplo;
- Experiência com testes de unidade;
- Escrita de código usando ECMAScript 6;

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

## Requisitos não funcionais

- Utilize banco de dados relacional

## Requisitos funcionais

- O usuário deve poder criar uma conta com nome, e-mail, cnpj e senha;
- O usuário deve poder se autenticar na aplicação com e-mail ou cnpj e senha;
- O usuário deve poder cadastrar um item com nome, descrição, preço;
- O usuário não pode criar uma conta caso o e-mail/cnpj já exista no sistema;
- O usuário deve poder excluir um item pelo id;
- O usuário deve poder atualizar um item pelo id;
- O usuário deve poder exibir um item pelo id;
- O usuário deve poder listar os itens por usuário.

## Plus

- Não cobramos nada na parte de segurança, mas implementar estratégia JWT e retornar o token do usuário na autenticação e solicitar a cada requisição do sistema, conta como extra.
- Da mesma maneira não estamos cobrando testes. Mas caso queira ganhar pontos extras, testes unitários cairiam bem na entrega.

## Avaliação

Para nos enviar seu código, você pode:

- Fazer um fork desse repositório, e nos mandar uma pull-request.
- Nos enviar o link do repositório por e-mail: lab@softcomtecnologia.com.br.
