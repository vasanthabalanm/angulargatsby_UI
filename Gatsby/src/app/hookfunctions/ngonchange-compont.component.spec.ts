import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgonchangeCompontComponent } from './ngonchange-compont.component';

describe('NgonchangeCompontComponent', () => {
  let component: NgonchangeCompontComponent;
  let fixture: ComponentFixture<NgonchangeCompontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgonchangeCompontComponent]
    });
    fixture = TestBed.createComponent(NgonchangeCompontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
