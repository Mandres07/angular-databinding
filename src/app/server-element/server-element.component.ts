import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
   selector: 'app-server-element',
   templateUrl: './server-element.component.html',
   styleUrls: ['./server-element.component.css'],
   encapsulation: ViewEncapsulation.Emulated // None or ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges, OnDestroy,
   DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
   @Input('srvElement') element: { type: string, name: string, content: string };
   constructor() {
      console.log('contructor call');
   }
   ngOnDestroy(): void {
      console.log('ngOnDestroy call');
   }
   ngAfterViewInit(): void {
      console.log('ngAfterViewInit call');
   }
   ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked call');
   }
   ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked call');
   }
   ngAfterContentInit(): void {
      console.log('ngAfterContentInit call');
   }
   ngDoCheck(): void {
      console.log('ngDoCheck call');
   }

   ngOnChanges(changes: SimpleChanges) {
      console.log('ngOnChanges call', changes);
   }

   ngOnInit(): void {
      console.log('ngOnInit call');
   }

}
