import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ItemProductComponent } from './item-product/item-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    EditProductComponent,
    MyCartComponent,
    PageNotFoundComponent,
    NewProductComponent,
    ItemProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
