import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { ModalService } from './modal.service';

@Component({
  selector: 'modal',
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        backgroundColor: 'red',
      })),
      state('closed', style({
        opacity: 0,
        backgroundColor: 'green',
        width: 0,
        height: 0,
      })),
      transition('open <=> closed', [
        animate('0.1s')
      ])
    ])
  ],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  isOpen: boolean;

  constructor(
    private modalService: ModalService
  ) {
    this.isOpen = false;
    this.modalService.isOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  ngOnInit() {
  }

  toggle(isOpen) {
    this.isOpen = isOpen;
  }

}
