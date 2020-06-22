import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlResultComponent } from './ul-result.component';

describe('UlResultComponent', () => {
  let component: UlResultComponent;
  let fixture: ComponentFixture<UlResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
