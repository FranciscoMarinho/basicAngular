import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id = 0;

  product: Product;

  constructor(protected activatedRoute: ActivatedRoute, protected productService: ProductService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.product = this.productService.getProductByID(this.id);
    });
  }

  onClick(name: string, price: number) {
    this.product.name = name;
    this.product.price = price;
    this.productService.editProduct(this.product);;
  }

}
