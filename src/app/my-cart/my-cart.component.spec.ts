import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartComponent } from './my-cart.component';
import { Product } from '../product.service';

describe('MyCartComponent', () => {
  let component: MyCartComponent;
  let fixture: ComponentFixture<MyCartComponent>;
  const product = new Product(1, 'tea', 2);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add product to mycart', () => {
    component.addToMyCar(product);
    expect(component.listProduct.length).toEqual(1);
  });

  it('should remove product to mycart', () => {
    component.removeFromMyCar(product);
    expect(component.listProduct.length).toEqual(0);
  });

});
