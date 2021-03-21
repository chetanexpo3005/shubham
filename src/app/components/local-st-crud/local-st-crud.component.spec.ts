import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStCrudComponent } from './local-st-crud.component';

describe('LocalStCrudComponent', () => {
  let component: LocalStCrudComponent;
  let fixture: ComponentFixture<LocalStCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalStCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalStCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
