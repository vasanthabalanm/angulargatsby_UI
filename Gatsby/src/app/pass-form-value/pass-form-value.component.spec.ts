import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassFormValueComponent } from './pass-form-value.component';

describe('PassFormValueComponent', () => {
  let component: PassFormValueComponent;
  let fixture: ComponentFixture<PassFormValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassFormValueComponent]
    });
    fixture = TestBed.createComponent(PassFormValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
