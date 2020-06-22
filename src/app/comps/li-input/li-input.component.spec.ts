import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiInputComponent } from './li-input.component';

describe('LiInputComponent', () => {
  let component: LiInputComponent;
  let fixture: ComponentFixture<LiInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
