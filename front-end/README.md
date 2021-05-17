## Bem vindo ao repositório do Desafio Front-End Softcom

Este é o reposítório de uma aplicação front-end desenvovida para um pet shop.
O desafio consiste em construir uma interface para a loja e integra-la a API.
Como não foi fornecido uma API para o desfio e eu não quis fazer mockado com JSON, pois usei mocks para testes, então resolvi usar a API do [Mercado Lire](https://developers.mercadolivre.com.br/pt_br/api-docs-pt-br).
Tentei ser o mais fiel possível ao [Protótipo](https://www.figma.com/file/ebcFb6dxwj4JkN7vENzgeQ/Desafio-UX?node-id=3585%3A0). E aos requisitos do projeto. Focando no produto e nas soluções. E não somente em skills e ferramentas. E também tentando me desapegar ao máximo das minhas ideias. Respeitando o que o cliente pediu.

<img src='/pet-shop/src/assets/verify-amazon.png' alt='verify' />

Este aplicativo foi criado com `npx create-react-app`. Mais detalhes na documentação do [create-react-app](https://create-react-app.dev/).
Os detalhes do desenvolimento, tomada de decições, ferramentas e considerações vem a seguir.

### Instruções

Clonar o repositório do desafio [softcomtecnologia/challenge](https://github.com/softcomtecnologia/challenge).

Acessar a branch `challenge-front-end-hugo-leonardo`.

Instalar as dependencias do projeto `npm i`.

Rodar com `npm start`.

Para obter a cobertura de testes `npm run test-coverage`.

### Features

1) Header com logomarca, título, informações e display do carrinho de compras.

2) NavTabs com scrolling horizontal e rotas configuradas.

3) Campo de busca validado com Formik+Yup e feedback para a pessoa usuária acerca da validação.

4) Grid responsivo.

5) Card com Modal para informações do produto e adição ao carrinho.

6) Responsive web design com interface para dispositivos web e mobile.

8) Footer versão web e Footer versão mobile

### Por que React?

É um dos framworks mais modernos do mundo. Principalmente para `Single Page Aplications`. Possui inúmeras vantagens. Que vão desde a quantidade de processamento até a experiencia do usuário final. Por ser desenvolvido e mantido por uma das maiores empresas de tecnologia do mundo, está em constante atualização e manutenção. É muito popular. Está entre os mais usados no mundo todo. Tem uma comunidade bastante ativa. Não é dificil encontrar artigos, textos, vídeos, aulas, etc. A documentção também é muito clara e objetiva. E está em várias línguas. Inclusive português. Possui diversos recursos avançados para otizmiação como o Lazy Load, exemplo. Tudo isso sem contar todo o ecossistema de bibliotecas oficias e de terceiros. `Jest`, `Redux` e `Testing Library` incluidos. Também é um framework para aplicações mobile. Com praticamente a mesma API para web.

### Bibliotecas

[Testing Library](https://testing-library.com/): oficial React Testing Library, ótima documentação e relativamente tranquila de se trabalhar.

[Reactstrap](https://reactstrap.github.io/): biblioteca de componentes React do Bootstrap. Todos os componentes são funcionais. Tornando a perfeita para trabalhar com React principalmente com hooks, context e até mesmo Redux. Possui vários tipos de componentes. Todos muito modernos e elegantes. Muito fácil de customizar e vem com várias features imbutidas nos componentes. Ajuda a ganhar tempo na hora de produzir. Precisa do `Bootstrap` para rodar.

[Formik](https://formik.org/docs/overview): uma biblioteca para lidar com validação e submição formulários de forma segura e performática. Além de possuir gerenciamento de erro. 

[Yup](https://github.com/jquense/yup): construtor de esquemas (objetos) para validação. Possibilitando validações complexas e com gerenciamento de erro.

[PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html): checagem de tipos de props passadas de componente pai para filho ajuda muito no desenvolvimento com seus avisos e a manter um código limpo e organizado.

[Redux](https://redux.js.org/): pra mim é a melhor forma de gerenciamente de estado de uma aplicação React. faz coisas que o React sozinho não faz. Oferece uma estrutura modularizada. O que facilita muito a manutenção e correção de bugs. É um upgrade para as  `devTools`. Possibilita mapear e distribuir funções e props para qualquer parte da aplicação. Enfim. Redux é muito lindo. Por mais que pareça verboso, o Redux passa uma sensção de controle muito grande. Usabilidade e manutenção de cógido.

[Redux Thunk](https://github.com/reduxjs/redux-thunk): um `middleware` para Redux lidar com actions assíncronas.

[ES Lint](https://reactjs.org/docs/hooks-rules.html#eslint-plugin): formatção de código, padronização, correção automática, avisos e erros relacionados a escrita e organização do código. Também é indicado pelo pessoal do React. Avisa quando um `useEffect` está com array de dependencias exausto. O que ajuda a previnir loops, renderização desnecessária e processamento de dados repetidos.

[Jest](https://jestjs.io/pt-BR/): melhor framewok de testes. pricipalmente por causa do modo `watchAll`. que permite desenvolver e testar em tempo real. E ir acompanhando os impactos de mudanças no código da apliação. Também é necessário para configurar e testar o React junto com Redux no ambiente de testes.

[babel-jest](https://redux.js.org/recipes/writing-tests): também necessário para configurar o `Redux` no ambiente de testes. De acordo com a documentação.

[react-router-dom](https://reactrouter.com/web/guides/quick-start): configura rotas, switches, links entre outras features. Armazena o histórico de navegação e persiste o estado da store. Não era necessáriamente obrigatório, mas facilita muito a configurar as paginas. Dava pra fazer tudo sem rotas. Em uma única landing page. Atualizando somente os componentes. Mas as rotas ajudam a compartimentar tudo. E também oferecem um aspécto semantico na hora da busca. Sendo que o usuário pode encontrar um rota específica com um tema que ele procuru no Google, por exemplo. 

[Insomnia](https://insomnia.rest/download): para realizar requisições GET a api do Mercado Livre, detalhar objetos e montar queries

[CodeSandBox](https://codesandbox.io/u/hugoleonardo.dev): ambiente virtual para desenvolvimento, uso muito para pesquisar componentes, bibliotecas e frameworks. Ou quando quero testar algum componente. Só renderizar.
Para não ter que crair um React App toda vez que tiver uma idéia ou pesquiser uma tecnologia nova.

[VS Code](https://code.visualstudio.com/): melhor editor de texto que eu conheço.

[git](https://git-scm.com/): versionamento de código local.

[GitHub](https://github.com/): versionamento em núvem.

### Tecnologia X e não Y?

Optei por `Redux` por que considero o `Context API` meio caótico. Embora seja a forma mais moderna de se trabalhar com React, o Context ainda deixa muito a desejar em relação ao gerenciamente global da aplicação. Gosto muito de usar `Hooks`. Também junto com Redux. Mas Context me desanima. Só a parte do devTools do Redux já me deixa animado. Porque facilita muito na hora de debugar a aplicação. Mas tem muito mais coisas que me atraem no Redux. É meio assustador no começo. Mas depois é só alegrias.

O Reactstrap/Bootstrap é uma biblioteca de componentes para React toda escrita com Hooks. Facilita e muito a vida de quem está trabalhando com essa tecnologia. Existem outras bibliotecas mais robustas como Material UI. Mas não precisava de tanto para resolver o problema. Então veio bem a calhar o Reacstrap. Pois trabalhei 100% com Hooks.

Com relação aos estilos, me ative principalmente ao protótipo. E com uma biblioteca de designe responsivo, não tive dificuldades em chegar no resultado final. Usei pouco `CSS` para ajeitar e deixar tudo no lugar. Porém, o pouco que utilizei já deixa claro que é muito difícil de fazer manuntenção só com CSS. Neste sentido, o `SASS` vem pra resolver este tipo de problema. Pois tem uma abordagem mais ampla. Como por exemplo armazenar cores em variáves globais, aninhamento, criar modulos parciais ou globais, mixins, operadores e outras vantagens. Que facilitam e muito o desenvolvimento e manutenção. O Reactstrap tem suporte para o SASS. `Styled Components` também é outra obardagem que facilita muito a vida. Mas uso ele mais no `React Native`. E usei pouco. Mas conheço também e estou disposto a me dedicar. Gosto muito da proposta de ambas. CSS puro é muito complicado.

Sou fan do `Jest` e da `React Testing Library`. Pelo menos o Facebook contribuiu com algumas coisas para humanidade. E entre elas estão o React, Jest, RTL, React Native, etc. Graças as configurações recomendadas pela documentação do React, Redux, Testing Library e Jest, não tive nenhum problema para testar a aplicação. Obtendo mais de 98% de cobertura de testes. Poderiam ser escritos mais casos de testes. Simulando comportamento do usuário. Porém me atentei a cobrir as funções, linhas e statements que a cobertura pedia. Um grande upgrade seria realizar testes `End-to-end`. Uma vez que a Testing Library não consegue capturar os eventos que envolvem o `Formik`. Não consegui capturar o feedback da pessoa usuária ao digitar um termo inválido para busca. Neste sentido, um teste de comportamento em navegador como o `Cypress`, poderia validar tal comportamento facilmente. 

Também gosto de criar meus protótipos no CodeSandBox. É uma ferramente muito interessante pra quem programa. Principalmente em React. Perfeita pra quem está perquisando uma biblioteca ou framework. E quer ver tudo funcionando com cóigo e em tempo real.

### Engenharia de software:

Bem, ainda não sou o melhor arquiteto de software. São tantos padrões que a gente fica meio perdido. Mas saber observar e identicar padrões são virtudes do programador. O que posso garantir é que tentei respeitar ao máximo os princípios do `DRY`. Não repetir código é uma coisa maravilhosa. Ajuda muito na manutenção. Principalmente pra quem pega o código depois de pronto. Também tento modularizar e organizr tudo da melhor forma. Incorporando pricípios do `SOLID`. Principalmente com a parte de responsabilidade única. Tentando ao máximo não atribuir muitas responsabilidades para uma única função. Reutilizar código e componentes, reafatoração, testar e debugar software, também são princípios básicos que devem estar no nosso dia a dia. `Responsive Design` e `Mobile First`, também foram levados em consireção. Além des aspectos semânticos e outras práticas.
Ainda criei uma camada de `service` com a API do Mercado Livre.

### Desafios e problemas:

Esta implementação foi bem tranquila até. Gostei muito de fazer e deixar do jeito que está sendo pedido. Os maiores desafios, com certeza, foram a implementação do Modal e, consequentemente, da adição ao carrinho de compras.
Mesmo com components prontos do Bootrastap, tive que bolar um jeito de deixar tudo com cara de Card. Então tive que usar uma propriedade do React chamada `Props Children`. Para passar um componente filho como props. Então o CardBody foi passado como props filho para o Button do Modal. Que é o responsável por capturar a action que aciona o modal no momento do click em cima do Card no Grid principal.
O gerenciamento de estado global com `Redux` facilita muito a vida na hora de realizar ações, como por exemplo clicar no botão de busca. No Modal não foi diferente. Porém utilizei também um `Hook` localmente. `useState` para gerenciar a quantidade de items que seriam adicionados ao carrinho. O motivo foi porque cada item tem uma quantidade disponivel diferente. Sendo assim, cada adição teria um limite. O que seria muito mais trabalhoso de abordar globalmente. Mas dá pra fazer também. Sem dúvida nenhuma.

### Melhorias e implementações:

Logo de cara, a primeira melhoria que eu faria seria na parte da interface. Implementar algumas features. Como por exemplo um botão flutuante que retorna para o topo. É muito importante. Principalmente no mobile.
Persistir o estado depois que ocorre um erro e voltar para a tela anterior. Transpilar para que possa rodar em ambientes com código legado. Empacotar conteúdos `dinámicos e torná-los estáticos`. Armazenando informação no `cache`. Implementar `Lazy Load` onde for possível. Otimização da engine de busca. Transformar em `Progressive Web Aplication` com modo `off-line` e dowload na máquina.Testes `end-to-end` e testes manuais. Dark mode. Melhorias na acessibilidade. Entre outras features como carrinho de compras, checkout e até mesmo um login para autenticar usuários.

### Importancia dos testes automatizados

Tenho contato com testes automatizados desde o primeiro dia que comecei a desenvolver. No início, mesmo não entendendo muito bem o porque daquilo tudo, achava muito interessante e atraente a ideia de o cumputador fazer verificações automaticamente. Desde que devidamente programado.
De lá pra cá venho tentando incorporar ao máximo a prática de `Test-Driven Development` no meu dia a dia. E, conforme o tempo vai passando, e vou adquirindo mais entendimento, a percepção da importancia dos testes só aumenta. Tanto nas minhas vivencias e experiencias, quanto na experiencia com colegas desenvolvedores. Hoje, tudo faz sentdo. Principalmente em um contexto de computação em núvem. Como na `AWS`.
Nos meus trabalhos individuais e em grupo, consegui verficar que os testes revelam muitos problemas que o nosso olho não enxerga. Mesmo se a aplicação funciona perfeitamente. A olho nú. Porém, não é muito difícil em um contexto de testes, você verificar um componente sendo renderizado 25, 30 vezes. Uma requisição sendo feita dezenas de vezes para um end-pont. Entre outros problemas. Isso pode gerar custos desnecessários de processamento e consequentemente perdas.
Então quando estamos falando de testes, estamos falando diretamente de dinheiro. Sem meias palavras. Fora outros tantos benefícios que a prática de testes traz.

### Sobre mim:

Sou desenvolvedor de software de Belo Horizonte, MG. Antes da pandemia eu estava estudando Engenharia Metalúrgica. Na Universidade Federal de Ouro Preto. Logo no início, quando pararam as aulas, fiquei pensando em um jeito de não parar de estudar e estar caminahdo para um progresso pessoal. Olhei a minha volta e vi que tudo que eu tinha era um computador velho, acesso a internet e vontade de aprender.
Sempre gostei de tecnologia. Porém, quando era adolescente, acabei criando um medo de tecnologia. Principalmente, por causa do meu pai. Que é outro doido com tecnologia. Mas ele não sabia passar as coisas para mim. Ele me deixava mais com medo do que com curiosidade e vontade de aprender. Mesmo assim, ainda passei em 3 universidades federais. E fui estudar Engenharia. Foi quando tiver um contato mais de perto com programação. Nas difciplinas obrigatórias. Alí deu pra sentir que não era tão difícil assim. Mas como já estava do meio pra frente no curso, não abandonei. Só que a pandemia mudou todo este contexto. Não só o contexto como as fobias também.
Já trabalhei como motorista de taxi, recepcionista de hotel noturno, atendente de telemarkeing, professor de ingles na rede estadual, garçom, entrevistador remoto e até de Uber. Também fui monitar nas diciplinas de introdução a ciência dos materias e quimica. Na Universidade Federal da Paraíba. Morei em João Pessoa por quase 2 anos. E se precisar me mudar, eu mudo de novo! Já vi que meu futuro não é na engenharia. Só se for engenharia de software. Me vejo fazendo isso bem velhinho. Já sei o que vou fazer antes de morrer. Um commit.

### Considerações finais

Agradeço desde já a oportunidade para mostrar minhas skills. Me identifico muito com a filosofia da empresa. Gotei muito do tratamento e da atenção desde o início. Estou familiarizado com `Metodologias ágeis` e boas práticas como `pair-programming`. Faço parte de um bootcamp onde tenho oportunidade de aprender e ensinar com meus colégas. Com projetos e simulação de ambiente de empresa. Aprendi muita coisa em pouco tempo porque tive oportunidade de trabalhar e conviver (mesmo que vitualmente) com pessoas desenvolvedoras. O olhar de fora sempre enxerga coisas que não estamos vendo.
Tenho interesse em fazer o projeto de back-end também. Minha meta é ser full-stack. Mas como comecei no front-end, então estou aproveitando ao máximo. E já estudei `banco de dados` MySQL e MongoDB. Além de `Node`, arquitetura REST, entre outros assuntos.

[Deploy Amazon](https://main.dtxwvs3wwbvit.amplifyapp.com/)

### Contatos

**Telefone**: `31999699361` também é whatsapp
**Email**: `hugoleonardo.dev@gmail.com`

[LinkedIn](https://www.linkedin.com/in/hugo-leonardo-matosinhos-de-souza/)

[GitHub](https://github.com/hugoleonardodev)

[CodeSandBox](https://codesandbox.io/u/hugoleonardo.dev)

-----------------------------------------------------------------------------

# Softcom Challenge - Front-end com React

Esse é um teste de nivelamento. Queremos deixar claro que não é esperado que todos consigam realizá-lo por completo, já que é destinado a vários níveis de experiência. Esperamos que todas as pessoas que queiram trabalhar conosco tentem realizá-lo e submetam mesmo não tendo concluído todo o desafio. Esperamos que você crie um arquivo _README_ na raiz do projeto falando sobre o desenvolvimento do desafio.

Focamos aqui em design de código e design patterns em _TypeScript_ exercendo da sua criatividade em resolução de problemas. O objetivo é avaliar sua experiência em escrever código de fácil manutenção, baixo acoplamento e alta coesão.

A Softcom trabalha com feedbacks construtivos, e, portando, entraremos em contato e vamos enviar um retorno do teste enviado. Faremos questão de falar seus pontos fortes e os pontos a melhorar. Então, aproveite essa oportunidade. =]

## 🚀Principais responsabilidades que buscamos

- Colaborar com ideias que possam melhorar nossos sistemas e a vida dos nossos usuários;
- Estar disposto a aprender e a ensinar;
- Cuidar dos nossos sistemas como se fossem seus filhos;
- Estar sempre atento a oportunidades para melhorar o código e nossos processos.

## 🎓 Requisitos

- Experiência com TypeScript;
- SSR ou SSG com Next.js
- HTML5 e CSS3;
- React Hooks;
- Context API;
- Styled Components e/ou Sass;
- Clean Code;
- Conhecer o básico de versionamento com Git;
- Experiência com criação de interfaces responsivas;
- Experiência em consumir API Rest;

## 🎓 Skills como diferenciais

- Experiência com Redux;
- Experiência em construir formulários com Formik + Yup;
- Experiência em autenticação JWT Token;
- Experiência com Testes unitários com Jest;
- Experiência com Continuous integration/continuous delivery;
- Experiência com metodologia ágil;
- Conhecimento em inglês para escrita de comentários, revisão de PRs e leitura;

## 🎯 Problema a ser resolvido

### **Lojinha Virtual**

O nosso cliente necessita de uma lojinha virtual para vender os seus itens, o mesmo já possui uma interface onde ele pode cadastrar os seus produtos, atribuir promoções e sinalizar os mesmos como sugestão de venda, o que você precisa desenvolver para o mesmo é uma interface para consumidores que irá disponibilizar a listagem desses itens já cadastrados e os recursos necessários que o mesmo adicione esses itens em uma sacola de compras, essa tela é para aprovação, você deverá criar apenas as interfaces solicitadas:

#### **Jornada do usuário:**

O usuário deverá ter acesso a uma tela de home com a listagem dos produtos comercializados pela empresa, os produtos devem ser agrupados por sua categoria, com possibilidade de filtrar os mesmos por sua categoria ou pesquisar por qualquer parte o nome do produto, ao clicar no card de um determinado produto, deverá ser exibido um modal contendo as informações sobre o mesmo com a possibilidade de alterar a quantidade e de adicionar a mesmo ao carrinho, não será necessário criar a interface do carrinho de compras, toda via, conforme protótipo, exibe no header da home um totalizador do carrinho que precisar ser alterado a cada adição de um produto.

#### **Link para o protótipo do interface do desafio:**

https://www.figma.com/file/ebcFb6dxwj4JkN7vENzgeQ/Desafio-UX?node-id=3585%3A0

## 🚀 Plus

- Como não disponibilizamos uma API para consumo nesse desafio, os dados devem ser simulados com um objeto JSON fixo ou outra maneira que você achar interessante para simular um consumo de um JSON, toda via, consideramos um diferencial simular a API REST através da instalação da dependência do JSON-Server.
- Da mesma maneira não estamos cobrando testes. Mas caso queira ganhar pontos extras, testes unitários cairiam bem na entrega.

## 📆 Avaliação

Para nos enviar seu código, você pode:

- Fazer um fork desse repositório, e nos mandar uma pull-request.
- Nos enviar o link do repositório por e-mail: lab@softcomtecnologia.com.br.
