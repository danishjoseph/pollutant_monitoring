import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HederCompComponent } from './heder-comp.component';

describe('HederCompComponent', () => {
  let component: HederCompComponent;
  let fixture: ComponentFixture<HederCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HederCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HederCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
