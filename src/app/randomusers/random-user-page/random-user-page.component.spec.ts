import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUserPageComponent } from './random-user-page.component';

describe('RandomUserPageComponent', () => {
  let component: RandomUserPageComponent;
  let fixture: ComponentFixture<RandomUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomUserPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
