import { Component, OnInit } from '@angular/core';
import { ModalService } from './components/modal/modal.service';
import { TestModalComponent } from './components/test-modal/test-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test2';

  constructor(
    private modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.modalService.open(TestModalComponent);
    setTimeout(() => {
      this.modalService.close();
    }, 2000);
  }
}


