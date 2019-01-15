import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ChapDistChatListComponent } from './../chap-dist-chat-list/chap-dist-chat-list.component';


@Component({
  selector: 'app-chap-dist-chat',
  templateUrl: './chap-dist-chat.component.html',
  styleUrls: ['./chap-dist-chat.component.scss']
})


export class ChapDistChatComponent implements OnInit {

  constructor( private bottomSheet: MatBottomSheet ) { }

  ngOnInit() {
  }

  openBottomSheet(): void {
    this.bottomSheet.open(ChapDistChatListComponent);
  }

}

