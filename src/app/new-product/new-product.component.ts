import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  listProduct = [{id: 1, name: 'coca-cola', price:'4,00'}];
  product = {id: '', name: '', price:''};

  constructor() { }

  ngOnInit() {
  }

  onClick(name: string, price: string) {
    this.listProduct.push({id: this.listProduct.length+1, name: name, price: price});
  }

}
