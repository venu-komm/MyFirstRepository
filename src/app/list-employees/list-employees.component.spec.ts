import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListEmployeesComponent } from './list-employees.component';

describe('ListEmployeesComponent', () => {
  let component: ListEmployeesComponent;
  let fixture: ComponentFixture<ListEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Employees initialized with 2 employees', () => {
    expect(component.Employees).toBeDefined();
    expect(component.Employees.length).toBe(2);
    expect(component.Employees[0]).toEqual(jasmine.objectContaining({
      EmployeName: 'Venu',
      Designation: 'ML'
    }));
    expect(component.Employees[1]).toEqual(jasmine.objectContaining({
      EmployeName: 'Subba Reddy',
      Designation: 'ATA'
    }));
  });
});
