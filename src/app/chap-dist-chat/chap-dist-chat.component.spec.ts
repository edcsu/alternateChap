import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapDistChatComponent } from './chap-dist-chat.component';

describe('ChapDistChatComponent', () => {
  let component: ChapDistChatComponent;
  let fixture: ComponentFixture<ChapDistChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapDistChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapDistChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
