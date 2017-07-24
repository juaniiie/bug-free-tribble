import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from './cell/cell';
import { ControlsService } from '../../services/game-controls';

@Component({
    selector: 'app-board-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
    @Input() public cells = [];
    @Output() public onSelectCell: EventEmitter<any> = new EventEmitter<any>();
    private controls: ControlsService = null;

    constructor(controlsService: ControlsService) {
        this.controls = controlsService;
    }

    public ngOnInit() {
    }

    public handleCellClick(cell: Cell): void {
        if (this.controls.isFlagOn()) {
            cell.setFlag(true);
        } else if (this.controls.isUnFlagOn()) {
            cell.setFlag(false);
        } else {
            this.onSelectCell.emit(cell);
        }
    }
}
