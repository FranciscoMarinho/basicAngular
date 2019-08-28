import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductComponent } from './new-product.component';
import { ItemProductComponent } from '../item-product/item-product.component';
import { RouterModule, Router } from '@angular/router';
import { ProductService, Product } from '../product.service';

describe('NewProductComponent', () => {
  let component: NewProductComponent;
  let fixture: ComponentFixture<NewProductComponent>;
  let productService: ProductService;
  const product = new Product(1, 'tea', 2);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductComponent, ItemProductComponent],
      imports: [RouterModule.forRoot([])],
      providers: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    productService = new ProductService();
    fixture = TestBed.createComponent(NewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterAll(() => {
    productService = new ProductService();
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new product', () => {
    component.onClick('tea', 2);
    expect(component.listProduct.length).toEqual(1);
  });

  it('should edit a product', () => {
    const routerstub: Router = TestBed.get(Router);
    spyOn(routerstub, 'navigate');
    component.edit(product);
  });

  it('should remove a product', () => {
    component.remove(product);
    expect(component.listProduct.length).toEqual(0);
  });

});
