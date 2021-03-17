import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnVariableComponent } from './an-variable.component';

describe('AnVariableComponent', () => {
  let component: AnVariableComponent;
  let fixture: ComponentFixture<AnVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
