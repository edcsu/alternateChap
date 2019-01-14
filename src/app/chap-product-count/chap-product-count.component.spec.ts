import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapProductCountComponent } from './chap-product-count.component';

describe('ChapProductCountComponent', () => {
  let component: ChapProductCountComponent;
  let fixture: ComponentFixture<ChapProductCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapProductCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapProductCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
