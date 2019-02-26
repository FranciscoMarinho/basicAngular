import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listProduct = [{id: '1', name: 'coca-cola', price:'4,00'}];
  product = {id: '', name: '', price:''};

  constructor() { }

  ngOnInit() {
  }

}
