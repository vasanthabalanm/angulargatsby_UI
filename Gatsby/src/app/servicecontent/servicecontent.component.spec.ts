import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecontentComponent } from './servicecontent.component';

describe('ServicecontentComponent', () => {
  let component: ServicecontentComponent;
  let fixture: ComponentFixture<ServicecontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicecontentComponent]
    });
    fixture = TestBed.createComponent(ServicecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
