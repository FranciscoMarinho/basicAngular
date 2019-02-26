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
    this.listProduct.forEach(product => {
      this.totalPrice += product.price;
    })
  }

  onClick(product) {
    this.listProduct.splice(this.listProduct.indexOf(product), 1);

    console.log(JSON.stringify(this.listProduct));
  }

}
