import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  listProduct = [];

  constructor(protected productService: ProductService) { }

  ngOnInit() {
    this.listProduct = this.productService.getListProduct();
  }

  onClick(name: string, price: number) {
    this.productService.addProduct(new Product(this.listProduct.length+1, name, price));
    this.listProduct = this.productService.getListProduct();
  }

}
