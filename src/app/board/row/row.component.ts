import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from './cell/cell';
import { GameStateService } from '../../services/game-state';

@Component({
    selector: 'app-board-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.css']
})
export class RowComponent {
    @Input() public cells = [];
    @Output() public onSelectCell: EventEmitter<any> = new EventEmitter<any>();

    constructor(private game: GameStateService) {
    }

    public handleCellClick(event, cell): void {
        if (this.game.getStatus() !== 'end' && this.game.getStatus() !== 'win') {
            if (event.type === 'contextmenu' || event.which === 3 || event.which === 2) {
                event.preventDefault();
                cell.setFlag(!cell.isFlagged());
            } else if (event.type === 'click') {
                if (!cell.isFlagged()) {
                    this.onSelectCell.emit(cell);
                }
            }  
        }  
    }
}
