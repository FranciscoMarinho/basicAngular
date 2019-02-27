import { Injectable } from '@angular/core';

export class Product {
  id?: number;
  name?: string;
  price?: number;
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listProduct = [];
  readonly LIST_KEY = 'list_key';


  constructor() {  }

  recoverList() {
    const auxlistProduct = JSON.parse(localStorage.getItem(this.LIST_KEY));
    if (auxlistProduct) {
      this.listProduct = auxlistProduct;
    }
  }
  getListProduct() {
    this.recoverList()
    return this.listProduct;
  }
  addProduct(product: Product) {
    this.listProduct.push(product);
    localStorage.setItem(this.LIST_KEY, JSON.stringify(this.listProduct));
  }
}
