import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
   selector: 'app-server-element',
   templateUrl: './server-element.component.html',
   styleUrls: ['./server-element.component.css'],
   encapsulation: ViewEncapsulation.Emulated // None or ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges, OnDestroy,
   DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
   @Input('srvElement') element: { type: string, name: string, content: string };
   @ViewChild('heading', { static: true }) header: ElementRef;
   @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

   constructor() {
      console.log('contructor call');
   }
   ngOnChanges(changes: SimpleChanges) {
      console.log('ngOnChanges call', changes);
   }
   ngOnInit(): void {
      console.log('ngOnInit call');
      console.log('textContent: ' + this.header.nativeElement.textContent);
   }
   ngDoCheck(): void {
      console.log('ngDoCheck call');
   }
   ngAfterContentInit(): void {
      console.log('ngAfterContentInit call');
      console.log('contentParagraph: ' + this.paragraph.nativeElement.textContent);
   }
   ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked call');
   }
   ngAfterViewInit(): void {
      console.log('ngAfterViewInit call');
      console.log('textContent: ' + this.header.nativeElement.textContent);
   }
   ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked call');
   }
   ngOnDestroy(): void {
      console.log('ngOnDestroy call');
   }
}
