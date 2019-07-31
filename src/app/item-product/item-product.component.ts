import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {

  @Input() product: Product = {};

  constructor() { }

  ngOnInit() {
  }

}
