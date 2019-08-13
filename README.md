# basicAngular  
Uma introdução ao Angular   
Instale o visual code, ou outra IDE

Exemplo: https://basic-angular.herokuapp.com/

## Pré-requisitos:  
[node](https://nodejs.org/en/)  
[npm](https://www.npmjs.com/)  
[Angular](https://angular.io/)

## Comandos: 
`npm install -g @angular/cli`  
`ng help`  
`ng new my-store`

## Já temos um projeto funcional  
`ng serve`

## Vamos criar alguns componentes  
`ng generate component list-product`  
`ng generate component edit-product`  
`ng generate component new-product`  
`ng generate component item-product`  
`ng generate component my-cart`  

Temos cinco componentes criados  
agora é só ajustar o routing para criar um menu

## Vamos adicionar os caminhos:  
`{ path: 'produtos', component: ListProductComponent }`

## E para os caminho que não temos:  
`{ path: '**', component: PageNotFoundComponent }`

## O componente PageNotFoundComponent é criado assim  
`ng generate component page-not-found`

## Finalizando o routing  
vamos adicionar um redirect para a home que vai ser uma lista de produtos:  
`{ path: '', redirectTo: '/produtos' }`

## Com isso finalizamos nossas rotas
### Ela deve ficar assim:

```javascript
const routes: Routes = [  
{ path: '', redirectTo: '/produtos', pathMatch: 'full'},  
{ path: 'produtos', component: ListProductComponent },  
{ path: 'novoproduto', component: NewProductComponent},  
{ path: 'editarprodutos/:id', component: EditProductComponent },  
{ path: 'meuCarrinho', component: MyCartComponent },  
{ path: '**', component: PageNotFoundComponent }
];
```  

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

