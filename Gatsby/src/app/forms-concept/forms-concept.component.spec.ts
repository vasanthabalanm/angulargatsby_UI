import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsConceptComponent } from './forms-concept.component';

describe('FormsConceptComponent', () => {
  let component: FormsConceptComponent;
  let fixture: ComponentFixture<FormsConceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsConceptComponent]
    });
    fixture = TestBed.createComponent(FormsConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
