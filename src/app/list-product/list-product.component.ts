import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listProduct: Product[];

  constructor(protected productService: ProductService) {
    this.listProduct = [];
  }

  ngOnInit(): void {
    this.listProduct = this.productService.getListProduct();
  }

  addProduct(product: Product): void{
    this.productService.AddToMyCar(product);
  }

}
