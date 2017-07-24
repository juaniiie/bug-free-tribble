import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
@Directive({
    selector: '[cellColor]'
})
export class CellColorDirective implements OnInit {
    @Input() public value: number = 0;
    private colorRange: string[] = [
        '#1FFF9C',
        '#1F54FF',
        '#FF1FBF',
        '#2D1FFF',
        '#711FFF',
        '#B51FFF',
        '#FF1F7B',
        '#FF4B1F',
        '#FF1F37'
    ];

    constructor(private elementRef: ElementRef) {
    }

    /**
     * Sets color css for value passed in, method called
     * when directive initiated
     * @name ngOnInit
     */
    ngOnInit(): void {
        let element: HTMLElement = this.elementRef.nativeElement;
        if (this.value === -1) {
            element.style.color = '#FF6347';
        } else {
            element.style.color = this.colorRange[this.value - 1];
        }
    }
}