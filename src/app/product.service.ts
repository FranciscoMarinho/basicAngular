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

  myCar = [];
  readonly MY_CAR_KEY = 'my_car_key';

  constructor() {  }

  private recoverList(key: string): Product[] {
    const auxlistProduct: Product[] = JSON.parse(localStorage.getItem(key));
    if (auxlistProduct) {
      return auxlistProduct;
    }
  }

  getListProduct(): Product[] {
    let aux = this.recoverList(this.LIST_KEY);
    if (aux) {
      this.listProduct = aux;
    }
    return this.listProduct;
  }

  addProduct(product: Product): void {
    this.listProduct.push(product);
    localStorage.setItem(this.LIST_KEY, JSON.stringify(this.listProduct));
  }

  removeProduct(product: Product): void {
    const DELETION_COUNT = 1;
    if (this.listProduct.length === 0) {
      this.listProduct = this.recoverList(this.LIST_KEY);
    }
    this.listProduct.splice(this.listProduct.indexOf(product), DELETION_COUNT);
    localStorage.setItem(this.LIST_KEY, JSON.stringify(this.listProduct));
  }

  getProductByID(id: number): Product {
    this.listProduct = this.recoverList(this.LIST_KEY);
    let auxProduct: Product;
    if (this.listProduct) {
      this.listProduct.forEach((product: Product) => {
        if (product.id == id) {
          auxProduct = product;
        }
      });
    }
    return auxProduct;
  }

  editProduct(product: Product): void {
    this.recoverList(this.LIST_KEY);
    this.listProduct.forEach(itemProduct => {
      if (itemProduct.id == product.id) {
        itemProduct.name = product.name;
        itemProduct.price = product.price;
      }
    });
    localStorage.setItem(this.LIST_KEY, JSON.stringify(this.listProduct));
  }

  addToMyCar(product: Product): void {
    this.myCar.push(product);
    localStorage.setItem(this.MY_CAR_KEY, JSON.stringify(this.myCar));
  }

  removeFromMyCar(product: Product): void {
    const DELETION_COUNT = 1;
    if (this.myCar.length === 0) {
      this.myCar = this.recoverList(this.MY_CAR_KEY);
    }
    this.myCar.splice(this.myCar.indexOf(product), DELETION_COUNT);
    localStorage.setItem(this.MY_CAR_KEY, JSON.stringify(this.myCar));
  }

  getMyCar(): Product[] {
    let aux = this.recoverList(this.MY_CAR_KEY);
    if (aux) {
      this.myCar = aux;
    }
    return this.myCar;
  }
}
