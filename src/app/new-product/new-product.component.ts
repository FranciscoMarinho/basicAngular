import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  listProduct = [];

  constructor(protected productService: ProductService, protected router: Router) { }

  ngOnInit() {
    this.listProduct = this.productService.getListProduct();
  }

  onClick(name: string, price: number) {
    this.productService.addProduct(new Product(this.listProduct.length+1, name, price));
    this.listProduct = this.productService.getListProduct();
  }
  remove(product: Product) {
    this.productService.removeProduct(product);
    this.listProduct = this.productService.getListProduct();
  }
  edit(product: Product){
    this.router.navigate(['editarprodutos', product.id ]);
  } 

}
