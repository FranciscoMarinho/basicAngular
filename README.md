# basicAngular
Uma introdução ao Angular.

Instale o visual code, ou outra IDE.

## Pré-requisitos:
  node.js:
   > https://nodejs.org/en/

## Comandos: 
  > npm install -g @angular/cli

  > ng help

  > ng new my-store

## Já temos um projeto funcional.
>  ng serve

## Vamos criar alguns componentes.
 > ng generate component list-product

 > ng generate component edit-product

 > ng generate component new-product

 > ng generate component item-product

 > ng generate component my-cart

Temos cinco componentes criados. 
vamos agora ajustar o routing e criar um menu.

## Vamos adicionar os caminhos: 
> { path: 'produtos', component: ListProductComponent }

## e para os caminho que não temos: 
> { path: '**', component: PageNotFoundComponent }

## criar o componente PageNotFoundComponent: 
> ng generate component page-not-found.

## para finalizar o routing
vamos adicionar um redirect para a home que vai ser uma lista de produtos: 

> { path: '', redirectTo: '/produtos' }.

## Com isso finalizamos nossas rotas

## Vamos criar a lista de produtos
vai ser uma simples array.

## em item-product...

## em edit-product 
vamos criar um outro array de produtos.
criar o input para editar o produto.

## em new-product...
## em my-cart...

## criar o serviço para produto.
## criar o serviço para my-cart.

## Modificar o edit product passando por parametro...

