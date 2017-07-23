import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'board-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
    @Input() public cells = [];

    constructor() { }

    ngOnInit() {
    }

}
