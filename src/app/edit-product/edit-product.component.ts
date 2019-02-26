import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  listProduct = [{id: 1, name: 'coca-cola', price:'4,00'}];
  product = {id: '', name: '', price:''};


  constructor() { }

  ngOnInit() {
  }

  onClick(name: string, price: string) {
    console.log(name + price);
    this.listProduct.push({id: this.listProduct.length+1, name: name, price: price});
    console.log(this.listProduct);
  }

}
