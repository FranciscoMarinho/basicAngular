import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  listProduct: Product[];
  totalPrice = 0;

  constructor(protected productService: ProductService) {
    this.listProduct = [];
   }

  ngOnInit() {
    this.updateTotal();
  }

  updateTotal() {
    this.listProduct = this.productService.getMyCar();
    let soma = 0;
    if (this.listProduct) {
      this.listProduct.forEach(product => {
        soma += product.price;
      });
    }

    this.totalPrice = soma;
  }

  addToMyCar(product: Product) {
    // this.listProduct.splice(this.listProduct.indexOf(product), 1);
    this.productService.AddToMyCar(product);
    this.updateTotal();
  }

  removeFromMyCar(product: Product): void {
    this.productService.removeFromMyCar(product);
    this.updateTotal();
  }

}
