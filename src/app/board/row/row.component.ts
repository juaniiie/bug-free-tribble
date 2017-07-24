import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-board-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
    @Input() public cells = [];

    constructor() { }

    public ngOnInit() {
    }

    public onCellClick(): void {
        
    } 

}
