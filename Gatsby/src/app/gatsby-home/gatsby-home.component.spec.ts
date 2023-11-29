import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatsbyHomeComponent } from './gatsby-home.component';

describe('GatsbyHomeComponent', () => {
  let component: GatsbyHomeComponent;
  let fixture: ComponentFixture<GatsbyHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GatsbyHomeComponent]
    });
    fixture = TestBed.createComponent(GatsbyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
