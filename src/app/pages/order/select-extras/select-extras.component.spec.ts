import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExtrasComponent } from './select-extras.component';

describe('SelectExtrasComponent', () => {
  let component: SelectExtrasComponent;
  let fixture: ComponentFixture<SelectExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectExtrasComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
