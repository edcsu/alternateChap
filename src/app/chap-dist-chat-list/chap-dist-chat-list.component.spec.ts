import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapDistChatListComponent } from './chap-dist-chat-list.component';

describe('ChapDistChatListComponent', () => {
  let component: ChapDistChatListComponent;
  let fixture: ComponentFixture<ChapDistChatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapDistChatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapDistChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
