import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from './cell/cell';
import { GameControlsService } from '../../services/game-controls';

@Component({
    selector: 'app-board-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
    @Input() public cells = [];
    @Output() public onSelectCell: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    public ngOnInit() {
    }

    public handleCellClick(cell: Cell): void {
        if (cell.isFlagged()) {
            cell.setFlag(false);
        } else {
            this.onSelectCell.emit(cell);
        }
    }
}
