import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewProductComponent } from './new-product/new-product.component';


const routes: Routes = [
  { path: '', redirectTo: '/produtos',  pathMatch: 'full' },
  { path: 'produtos', component: ListProductComponent },
  { path: 'novoproduto', component: NewProductComponent},
  { path: 'editarprodutos/:id', component: EditProductComponent },
  { path: 'meuCarrinho', component: MyCartComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
