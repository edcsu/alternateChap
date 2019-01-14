import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapOrderTableComponent } from './chap-order-table.component';

describe('ChapOrderTableComponent', () => {
  let component: ChapOrderTableComponent;
  let fixture: ComponentFixture<ChapOrderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapOrderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
