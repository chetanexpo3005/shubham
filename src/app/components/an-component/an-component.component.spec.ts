import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnComponentComponent } from './an-component.component';

describe('AnComponentComponent', () => {
  let component: AnComponentComponent;
  let fixture: ComponentFixture<AnComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
