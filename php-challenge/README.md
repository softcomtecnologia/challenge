#Problema a ser resolvido

Precisamos criar uma tela de venda de produtos para pequenos empreendedores. 
Para tal, precisaremos do cadastro de produtos (nome, preço, descrição)
Na tela de vendas serão adicionados: (Nome do cliente, Telefone, Data da venda, e e-mail ), além de produtos: (quantidade e valor), sendo eles divididos em duas entidades (venda e venda_itens).
Toda a separação entre classes, interfaces e atributos é por sua conta. Como dito acima, estaremos de olho em todo o código.
Abaixo retorno os exemplos das rotas que minimamente sejam disponibilizadas.

#Requisitos não funcionais

- Utilize banco de dados relacional, de preferência Mysql


#Requisitos funcionais

- O usuário deve poder criar uma venda com nome do cliente, e-mail e endereço(não obrigatório);
- O usuário deve poder visualizar a listagem das vendas
- O usuário deve poder adicionar um item com nome, quantidade e preço;
- O usuário deve poder excluir um item da venda;
- O usuário deve poder atualizar um item da venda;
- O usuário deve poder excluir uma venda completa;
- O usuário deve pode adicionar um desconto em percentual ao total da venda


#Plus

- Não estamos cobrando autenticação, mas caso sua aplicação tenha algum tipo será bem vinda.
- Criar endpoint que retorne a listagem das vendas (nome do cliente e total da venda)
- Criar endpoint que retorne o detalhe de uma venda (objeto complexo, venda -> venda_itens)
- Da mesma maneira não estamos cobrando testes. Mas caso queira ganhar pontos extras, testes unitários cairiam bem na entrega.
