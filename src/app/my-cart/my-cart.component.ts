import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  listProduct = [{id: 1, name: 'coca-cola', price:4}];
  totalPrice = 0;

  constructor() { }

  ngOnInit() {
    this.updateTotal();
  }

  updateTotal() {
    let soma = 0;
    this.listProduct.forEach(product => {
      soma += product.price;
    })
    this.totalPrice = soma;
  }

  onClick(product) {
    this.listProduct.splice(this.listProduct.indexOf(product), 1);
    this.updateTotal();
  }

}
