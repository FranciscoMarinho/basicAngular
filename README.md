basicAngular
An introduction to Angular.

instalar o visual code, ou outra ide.

Prerequisites: instalar o node.js: https://nodejs.org/en/

command: npm install -g @angular/cli

ng help

ng new my-store

Já temos uma projeto funcional. ng serve

ng generate component list-product
ng generate component edit-product
ng generate component new-product
ng generate component my-cart
temos quatro componentes criados, vamos agora ajustar o routing e cria um menu.

Vamos adicionar isso: { path: 'produtos', component: ListProductComponent }

para os caminho que temos.

e vamos adicionar isso para os caminho que não temos: { path: '**', component: PageNotFoundComponent }

e vamos criar o componente PageNotFoundComponent com o comando: ng generate component page-not-found.

para finalizar o routing vamos adicionar um redirect para a home que é nossa lista de produtos: { path: '', redirectTo: '/produtos' }.

Com isso finalizamos nossas rotas.

em list-product Vamos criar a lista de produtos: vai ser uma simples array.

em edit-product vamos criar um outro array de produtos, criar o imput para editar o produto.
