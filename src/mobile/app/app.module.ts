import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { TestModalComponent } from './components/test-modal/test-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TestModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
    ModalComponent,
    TestModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
