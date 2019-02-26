import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {
  }

}
