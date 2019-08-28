import { TestBed } from '@angular/core/testing';

import { ProductService, Product } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ProductService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should added a product', () => {
    service.addProduct(new Product(1, 'test A', 2));
    expect(service.listProduct.length).toEqual(1);

    service.addProduct(new Product(2, 'test B', 2));
    expect(service.listProduct.length).toEqual(2);
  });

  it('should get a list of product', () => {
    expect(service.getListProduct().length).toEqual(2);
    expect(service.getListProduct()[0].id).toEqual(1);
    expect(service.getListProduct()[0].name).toEqual('test A');
    expect(service.getListProduct()[0].price).toEqual(2);
  });

  it('should get a product by id', () => {
    expect(service.getProductByID(1).id).toEqual(1);
    expect(service.getProductByID(1).name).toEqual('test A');
    expect(service.getProductByID(1).price).toEqual(2);
  });

  it('should edit a product', () => {
    let product = service.getProductByID(1);
    product.name = 'test A edited';
    service.editProduct(product);
    expect(service.getProductByID(1).name).toEqual('test A edited');
  });

  it('should remove a product', () => {
    service.removeProduct({id: 1, name: 'test A edited', price: 2});
    expect(service.getListProduct().length).toEqual(1);
    expect(service.getProductByID(0)).toBeUndefined();
  });

  it('should add a product to my car', () => {
    service.addToMyCar(new Product(1, 'test A', 2));
    expect(service.myCar.length).toEqual(1);

    service.addToMyCar(new Product(2, 'test B', 2));
    expect(service.myCar.length).toEqual(2);
  });

  it('should get my car', () => {
    expect(service.getMyCar().length).toEqual(2);
    expect(service.getMyCar()[1].id).toEqual(2);
    expect(service.getMyCar()[1].name).toEqual('test B');
    expect(service.getMyCar()[1].price).toEqual(2);
  });

  it('should remove a product from my car', () => {
    service.removeFromMyCar({id: 1, name: 'test A', price: 2});
    expect(service.getMyCar().length).toEqual(1);
  });

});
