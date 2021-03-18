import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnArrayComponent } from './an-array.component';

describe('AnArrayComponent', () => {
  let component: AnArrayComponent;
  let fixture: ComponentFixture<AnArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
