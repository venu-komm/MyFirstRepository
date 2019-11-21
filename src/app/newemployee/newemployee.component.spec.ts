import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewemployeeComponent } from './newemployee.component';

describe('NewemployeeComponent', () => {
  let component: NewemployeeComponent;
  let fixture: ComponentFixture<NewemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
