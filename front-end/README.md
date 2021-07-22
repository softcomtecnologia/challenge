<h1 align="center">
    <img alt="Surf" title="#surf" src="https://user-images.githubusercontent.com/55166538/124842695-938bc100-df66-11eb-8da2-7edf75b874f5.png" width="800px" />
</h1>



<h4 align="center">
  🐶 PetFriends
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Davidxy9/petFriends">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Davidxy9/petFriends">
  
  <a href="https://github.com/Davidxy9/petFriends/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Davidxy9/petFriends">
  </a>

  <a href="https://github.com/Davidxy9/petFriends/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Davidxy9/petFriends">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>



<br>

<p align="center">
  <img alt="Frontend" src="https://user-images.githubusercontent.com/55166538/124844294-490c4380-df6a-11eb-83b0-c03ea47036d0.png" width="60%">
  <img alt="Frontend" src="https://user-images.githubusercontent.com/55166538/124844391-853fa400-df6a-11eb-877a-5375d2c2d6dc.png" width="60%">
  <img alt="Frontend" src="https://user-images.githubusercontent.com/55166538/124844387-840e7700-df6a-11eb-9e96-f34eea456437.png" width="60%">
  <img alt="Frontend" src="https://user-images.githubusercontent.com/55166538/124844390-84a70d80-df6a-11eb-97e3-5d3f6ce341bc.png" width="60%">  
    
</p>


## :rocket: Tecnologias

Esse projeto foi desenvolvido com a seguinte tecnologia:

- [React JS](https://facebook.github.io/react/)

## 💻 Projeto

Olá!

Bem-vindo a nossa lojinha! Aqui você encontrará tudo o que você precisa para seu bichinho🐈.

Se aventure em nossas promoções e saia com um sorriso no rosto!


## 🎮 Start

- Passo 1: Utilize o comando `yarn install || só yarn` para instalar as dependências do projeto;

- Passo 2: Utilize o comando `yarn start` para inicializar;

Obs: Dúvidas? [clique aqui](https://reactjs.org/docs/getting-started.html) e acesse a documentação do ReactJS! 



## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 🤯 Observações

Este é um desafio proposto para front-end:weight_lifting:, se você não manja das interfaces tenha cuidado:warning: 


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

## :arrow_right: Introdução 
O desafio proposto para Front-end é composto pela criação de uma loja virtual, com o objetivo de saber o nível e experiência do desenvolvedor em questão, utilizando-se de diversos conhecimentos ligados a programação web.



## 🤖 Tópicos 

1 - Criação do projeto
2 - Configuração inicial
3 - Trabalhando no layout
4 - Criando os primeiros componentes
5 - Inserindo dados no componente Summary
6 - Componente Category
7 - Componente Product
8 - MirageJS
9 - Modal
10 - Modo dinâmico
11 - Propriedade OFF
12 - Lógica do carrinho de compras e context API
13 - Inserindo novos componentes
14 - Category com scroll
15 - Aplicando a função Search ao input
16 - Melhorando o código
17 - Adicionando responsividade


## 👨‍🏫: Criação do projeto 
                                                                            
Antes de começar a desenvolver, utilizei um bodyplate que é uma estrutura pré- configurada pelo próprio time react para poupar configurações manuais envolvendo babel, loaders,webpack, source map e typescript , consequentemente, após usar o comando yarn create react-app nome-do-projeto - -template typescript pude obter a estrutura gerada com as pré-configurações citadas anteriormente.

## 👨‍🏫: Configuração inicial

Abrindo o projeto com o comando code . no terminal do git iniciei o que seriam as alterações e configurações inicias para começar o desafio. Deletei arquvos css, test, imagens e o report web que são gerados nativamente com o create react-app, logo após fazer a limpeza desses arquivos e remover suas importações coloquei App para exportar a sua função, pois irei renderiza-lo no index da raiz da aplicação! Fui em package.json e criei a seção devDependecies para colocar diversas dependências, sobretudo envolvendo Typescript e testing de forma que não sobrecarregue quando o projeto estiver operando sem ser em modo  de desenvolvimento.

## 👨‍🏫: Trabalhando no layout

Agora que o projeto estava para pronto para desenvolvimento criei uma pasta assets e coloquei nela imagens e um favicon para posteriormente colocar o favicon no index.html da public, procurei uma imagem em png que seria condizente com o tema da aplicação para então coloca-lá como ícone e dando o título de “PetFriends | Store”. Instalei a dependência styled-components, para poder utilizar componentes estilizados juntamente de seus @types para o TS reconhece-lo. Criei uma pasta chamada styles contendo um arquivo global.ts e importando do styled-components  o “createGlobalStyle” para definir os estilos globais do projeto para depois chamarmos esses estilos dentro de App.tsx, analisei no figma quais as fontes utilizadas no projeto e as importei através do google fonts criando uma chamada para as fontes dentro de nosso index.html estando elas logo abaixo da primeira tag head para ser chamada com prioridade. Em global.ts foi inserido primeiramente um root contendo variáveis com cores que irão se repetir várias vezes dentro de nossa aplicação. Defini valores padrões de margin, padding e font para vários atributos em toda aplicação incluindo body e html, não esquecendo de habilitar o cursor padrão como pointer em button.

## 👨‍🏫: Criando os primeiros componentes

Como ideia inicial (que posteriormente foi descartada) decidi que faria um componente Header para conter o background roxo que é apresentado no figma, no qual possui o nome lojinha” virtual” e avisando que é um desafio, um componente Summary que teria a soma de informações do cabeçalho da aplicação, um componente Main  que serviria para agrupar as ideias principais e finalmente o componente Dashboard que tinha a função de organizar e agrupar esses componentes quando fossem renderizados.
Para iniciar esses repositórios criei uma pasta com seus nomes e dentro de cada uma delas havia um arquivo index.tsx e um styles.ts, dentro do index eu iniciava o componente e o exportava usando:

export function nomeDoComponente () {//conteúdo do componente}

E em styles importava o styled-components, seguidamente, da exportação de uma const com o nome do componente estilizado que eu iria exportar, informando o seu tipo como tag html. Geralmente usei como div por ser uma “caixa genérica” e não esquecendo de colocar as propriedades css utilizando notação rem e % para se adaptar ao zoom do usuário e gerarmos futuramente uma responsividade, consequentemente, ao fazer isso em cada componente terminei de criar os primeiros componentes.

## 👨‍🏫: Inserindo dados no componente Summary

Inseri os dados estáticos no componente em questão e comecei a fazer diversos testes em seu css como podemos ver nos commits com prefixo “testes css em summary” , acrescentado os dados do que seria o cabeçalho da aplicação e não podendo esquecer de acrescentar o componente em App.tsx para ele ser renderizado em tela na posição escolhida.


## 👨‍🏫: Componente Category

Pensando nos botões de categoria do produto selecionados para o usuário decidi criar um componente próprio para isso, pois sua função era muito mais especifica do que algo a ser somado com outras informações dentro de Summary.

## 👨‍🏫: Componente Product

Na ideia inicial esse componente conteria um input para pesquisar o nome do produto, além de listar todos os produtos.

## 👨‍🏫: MirageJS

Após estilizar o cabeçalho em Summary e  inserir os dados de forma estática em Product, decidi que era hora de criar a fake API responsável por fornecer os dados dos produtos em questão e para isso utilizei a dependência mirageJS, então em index.tsx na raiz eu chamei a função createServer do miragem e defini uma rota para os produtos, tive umas ideias iniciais de mandar uma propriedade “type” que acabaram não sendo utilizadas e substituídas por soluções melhores. Adicionei o Axios para interceptar as requisições e o importei em uma pastar de services contendo um arquivo api.ts com uma const axios.create que possui a propriedade baseURL que contém o endereço que será utilizado em todas as requisições.

Para chamar as requisições foi inserido em Product um Hook chamado useEffect inicialmente conterá a api.get de products e colococará essa response em um console.log para fins de desenvolvimento inicial.

## 👨‍🏫: Modal

Utilizando a dependência react-modal para criar um modal onde o usuário pudesse adicionar ou remover um produto foi feita uma chamada da biblioteca em Product. Assim, seguindo as instruções da documentação do react-modal criei um estado contendo um boolean com valor padrão false para informar se o modal está aberto ou fechado, seguidamente, adicionando duas funções que setavam o estado como true ou false, coloquei uma função onClick no botão para abrir o modal e coloquei a informação para abrir e fechar o modal no componente Modal além de inserir por hora informações estáticas no mesmo.

## 👨‍🏫: Modo dinâmico

Com as informações estáticas prontas, estava na hora de inserir a primeira lógica nos componentes. Tive a ideia de separar cada produto em seu próprio componente possuindo suas próprias informações e estados para a listagem de produtos. Assim, criei um componente Toys referente a categoria brinquedos e tanto nele quanto em Product adicionei um estado para guardar o array de informações dos nossos dados inseridos através do miragem, então eu tipei esses dados e criei um useEffect para substituir o antigo, no qual ele pegava uma determinada rota setava as informações dessa rota em um determinado estado, logo em Product ele pegava os dados da rota product e inseria no array listProduct dentro do componente Product e em Toys ele pegava os dados da rota toys e inseria no array listToys dentro do componente Toys, colocando nos 2 componentes um map próprio para cada seus respectivos estados array, utilizando como key o Id e formatando o que era valor em dinheiro instanciando o Intl, não esquecendo de colocar a nova rota toys em index.tsx da raiz. 

Após isso era hora de inserir a lógica do Modal, para essa lógica eu pensei o seguinte: 
-Criar 1 estado que recebe um objeto
-Criar sua tipagem
-Colocar um button dentro de outro button, pois ao clicar no segundo botão a função do primeiro é ativada automaticamente assim podendo usar 2 propriedades onClick, uma para pegar o id do produto e salvar em uma função assim que o usuário clicar e a outra para abrir o modal, pois assim eu pegaria esse id em especifico e o transferiria para uma função, no qual dentro da função haveria uma const que percorresse o array de produtos e olhasse se o id daquele produto era igual ao id que foi passado para aquela função, então com outra const diríamos que ela era um objeto e em cada propriedade desse objeto passaríamos o valor relativo a propriedade que queremos daquele produto em especifico.
-Após ter esse objeto do produto especifico em mãos, inserimos esse objeto dentro do estado que criamos que recebe um objeto, consequentemente, fazemos uma chamada a esse estado dentro do modal selecionando as propriedades que estão inseridas dentro dessa aplicação. 

Fiz isso tanto para Toys quanto Product.

Após aplicar a lógica em modal, peguei imagens através do figma e da dependência react-icons e adicionei em alguns componentes como Summary e Category.

## 👨‍🏫: Propriedade OFF

Então inserir algumas noções de responsividade em Summary e adicionar icons do react-icons decidi colocar o span informando se aquele produto estava em promoção ou não, primeiramente, inserindo essa informação via miragem e depois acessando em Product e Toys, avisando ao typescript que essa informação era opcional.

## 👨‍🏫: Lógica do carrinho de compras e context API

Para construir a lógica do carrinho de compras foi necessário:
-Criar um estado chamado productCart para guardar a quantidade de produtos que será inserida no carrinho. 
-Criar um estado chamado productValue que guardar o valor em reais do produto
-Criar um estado chamado productQuantity que será incrementado ao usuário clicar em determinado botão.
-Criar a função handleAddProduct para adicionar um produto, para adicionar esse produto foi necessário criar uma constante e nela eu guardei o amount que estava guardado no estado que possui as informações repassadas ao modal, pois funciona assim: O usuário vai clicar no produto para comprar, então o programa aproveita que há uma função anterior que salva aquele produto especifico em um objeto e o usa para setar em valor productValue com uma informação do tipo Number( 1, 2, 3...).
-Criar a função handleMoreQuantityProduct, no qual a cada clique que o usuário der em um determinado botão dentro do modal ele irá incrementar o valor de productQuantity
-Criar a função handleLessQuantityProduct, no qual a cada clique que o usuário der em um determinado botão dentro do modal ele irá decrementar o valor de productQuantity
-Adicionar em handleAddProduct um setProductCart, no qual seu valor será: Seu valor padrão + productQuantity.Assim, temos a quantidade exata de produtos assim que o usuário clicar em adicionar!
-Para resolver alguns problemas em handleLessQuantityProduct colocamos 2 ifs:

    if (productQuantity <= 0) return;

no qual caso a quantidade seja menor ou igual a 0 ele para ali mesmo e não faz mais nenhuma ação dentro da função.

    if (productCart <= 0) return;
 
esse if é para o valor quantidade que está dentro do carrinho não ficar negativo, encerrando o programa caso o usuário tente decrementar algo que está em zerado.
Agora, o valor de productCart e productValue precisam estar disponíveis para outro componente, o Summary... Para termos acesso aos valores desses estados a partir de outro componente utilizei o hook useContext, no qual sendo criado na pasta contextos e recebendo as determinas funções e tipagens ofereceu a toda a aplicação o acesso ao valor desses estados em tempo real. 


## 👨‍🏫: Inserindo novos componentes

Para aplicar as informações nas outras categorias criei outros componentes com o nome delas para ter seus determinados produtos em cada componente com seu próprio estado armazenando o array de produtos.

## 👨‍🏫: Category com scroll

Com o objetivo de acessar determinada categoria ao clicar no botão utilizei a função window.scroll do javascript nativo, usando de forma desestruturada para receber a propriedade que informa para onde ele deve ir e utilizando “smooth” para deixar a transição do scroll mais suave ao usuário.

## 👨‍🏫: Aplicando a função Search ao input

Para o input finalmente ter sua função adicionada (busca por produto através de seu nome) foram necessárias as seguintes etapas:
-Criar um estado chamado productSearch iniciando como uma string vazia para guardar o que o usuário digitou.
-capturar o que o usuário digitou com um event.target.value e inserir em productSearch usando a propriedade onChange do input.
-Fazer uma const que tenha um valor dado a partir do uso de um filter na lista de produtos para saber se aquele produto que o usuário digitou está incluso na propriedade title daquele produto, se sim ele retorna uma nova lista filtrada com apenas aquele produto especifico, se não ele apenas retorna a lista normalmente. Assim, inserimos essa lista para percorrer no map normalmente.

## 👨‍🏫: Melhorando o código

Partindo do principio que cada componente tem a sua função e que o uso desses componentes veio para facilitar nossas vidas a repetição do código repetidas vezes de forma desnecessária é algo terrível quando queremos um código limpo e de fácil readaptação para mudanças futuras, pensando nisso simplifiquei o código utilizando o poder do react, usando os conceitos de propriedade, contexto e componente.

Partindo da ideia que cada componente responsável por uma categoria de produto está repetindo as mesmas funções, mudanças podem ser feitas! E como isso se deu?

1-  Peguei a parte do código que mais se repetia em todo componente e separei em um só chamado Cards, agora só existem 2 componentes responsáveis pela listagem Cards e Product.
2-	Agora se quiser chamar novamente um novo card basta apenas importar o componente para Product e passando os valores necessários que mudam de um componente para o outro a         partir de propriedades!
3–  Aplicamos agora verificações antes de as propriedades irem até o componente Cards como props.

## 👨‍🏫: Adicionando responsividade

Como tarefa final me esforcei para deixar o site responsivo para que usuários mobile possam ter uma boa experiência com suas telas menores. Para tal tarefa utilizei porcentagens, rem ao invés de px e media queries.

Feito com ♥ by David William :wave: [Entre em contato!](https://www.linkedin.com/in/david-william-0a0638195/)
