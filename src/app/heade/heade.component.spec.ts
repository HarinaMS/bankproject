import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadeComponent } from './heade.component';

describe('HeadeComponent', () => {
  let component: HeadeComponent;
  let fixture: ComponentFixture<HeadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadeComponent]
    });
    fixture = TestBed.createComponent(HeadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
