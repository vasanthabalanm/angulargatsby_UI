import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmployeeCrudComponent } from './show-employee-crud.component';

describe('ShowEmployeeCrudComponent', () => {
  let component: ShowEmployeeCrudComponent;
  let fixture: ComponentFixture<ShowEmployeeCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowEmployeeCrudComponent]
    });
    fixture = TestBed.createComponent(ShowEmployeeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
