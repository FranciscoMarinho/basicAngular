import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id;

  product;

  constructor(protected ActivatedRoute: ActivatedRoute, protected productService: ProductService) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.product = this.productService.getProductByID(this.id);
    });
  }

  onClick(name, price) {
    this.product.name = name;
    this.product.price = price;
    this.productService.editProduct(this.product)
  }

}
