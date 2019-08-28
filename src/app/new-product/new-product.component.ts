import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  listProduct: Product[];

  constructor(protected productService: ProductService, protected router: Router) {
    this.listProduct = [];

   }

  ngOnInit() {
    this.listProduct = this.productService.getListProduct();
  }

  onClick(name: string, price: number) {
    let id = 0;
    if (this.listProduct) {
      id = this.listProduct.length + 1;
    }
    this.productService.addProduct(new Product(id , name, price));
    this.listProduct = this.productService.getListProduct();
  }
  remove(product: Product) {
    this.productService.removeProduct(product);
    this.listProduct = this.productService.getListProduct();
  }
  edit(product: Product) {
    this.router.navigate(['editarprodutos', product.id ]);
  }

}
