import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsReorderPageComponent } from './products-reorder-page.component';

describe('ProductsReorderPageComponent', () => {
  let component: ProductsReorderPageComponent;
  let fixture: ComponentFixture<ProductsReorderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsReorderPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsReorderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
