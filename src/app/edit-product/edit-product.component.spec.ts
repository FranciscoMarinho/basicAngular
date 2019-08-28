import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductComponent } from './edit-product.component';
import { ItemProductComponent } from '../item-product/item-product.component';
import { RouterModule } from '@angular/router';
import { ProductService, Product } from '../product.service';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;
  let productService: ProductService;
  const product = new Product(1, 'tea', 2);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductComponent, ItemProductComponent],
      imports: [RouterModule.forRoot([])],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productService = new ProductService();
    productService.addProduct(product);
  });

  afterAll(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit', () => {
    component.product = product;
    component.onClick(product.name, 3);
    expect(productService.getProductByID(product.id).price).toEqual(3);
  });

});
