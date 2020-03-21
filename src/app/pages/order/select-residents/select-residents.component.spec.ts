import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectResidentsComponent } from './select-residents.component';

describe('SelectResidentsComponent', () => {
  let component: SelectResidentsComponent;
  let fixture: ComponentFixture<SelectResidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectResidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
