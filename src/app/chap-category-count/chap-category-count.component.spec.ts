import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapCategoryCountComponent } from './chap-category-count.component';

describe('ChapCategoryCountComponent', () => {
  let component: ChapCategoryCountComponent;
  let fixture: ComponentFixture<ChapCategoryCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapCategoryCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapCategoryCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
