import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listProduct = [];

  constructor(protected productService: ProductService) { }

  ngOnInit() {
    this.listProduct = this.productService.getListProduct();
  }

}
