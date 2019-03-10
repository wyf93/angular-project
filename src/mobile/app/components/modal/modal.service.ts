import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  ApplicationRef,
  ComponentRef
 } from '@angular/core';
 import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  componentRef: ComponentRef<any>;
  isOpen: boolean;
  isOpen$: Subject<boolean>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef
  ) {
    this.isOpen = false;
    this.isOpen$ = new Subject();
    this.close = this.close.bind(this);
  }

  changeIsOpen(isOpen: boolean): void {
    this.isOpen = isOpen;
    this.isOpen$.next(isOpen);
  }

  open(component) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const injector = Injector.create([]);
    this.componentRef  = componentFactory.create(injector);
    this.applicationRef.attachView(this.componentRef.hostView);
    document.body.appendChild(this.componentRef.location.nativeElement);
    console.log(this);
    setTimeout(() => {
      this.changeIsOpen(true);
    }, 0);
    return this.componentRef;
  }

  close() {
    console.log(this);
    this.changeIsOpen(false);
    setTimeout(() => {
      this.componentRef.location.nativeElement.remove();
    }, 120);
  }
}
