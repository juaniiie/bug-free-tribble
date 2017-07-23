import { Component, OnInit, Input } from '@angular/core';
import { Cell } from './cell/cell';
import * as _ from 'lodash';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    @Input() private size;
    @Input() private mines;
    private board = [];

    constructor() {
    }

    public ngOnInit() {
        this.generateBoard();
        this.setMines();
        for (let y = 0; y < this.board.length; y++) {
            console.log(JSON.stringify(this.board[y]));
        }
    }

    private randomIndex() {
        return Math.floor(Math.random() * this.size);
    }

    private cellIsDefined(x, y) {
        return this.board[x] && this.board[x][y];
    }

    private getRotationSet(x, y) {
        return new Set([
            [x - 1, y - 1],
            [x - 1, y],
            [x - 1, y + 1],
            [x, y - 1],
            [x, y + 1],
            [x + 1, y - 1],
            [x + 1, y],
            [x + 1, y + 1] 
        ]);
    }

    private modifyAdjacentCells(x, y) {
        let rotation = this.getRotationSet(x, y);

        _.each(rotation, (cellCoords) => {
            let x = cellCoords[0];
            let y = cellCoords[1];

            if (this.cellIsDefined(x, y) && !this.board[x][y].isMine()) {
                this.board[x][y].incrementValueByOne();
            }
        });
    }

    private setMines() {
        let minesToSet = this.mines;

        while (minesToSet > 0) {
            let x = this.randomIndex();
            let y = this.randomIndex();

            if (!this.board[x][y].isMine()) {
                this.board[x][y].setMine();
                this.modifyAdjacentCells(x, y);
                minesToSet--;
            }
        }
    }

    private generateBoard() {
        for (let i = 0; i < this.size; i++) {
            let row = [];
            for (let j = 0; j < this.size; j++) {
                row.push(new Cell());
            }
            this.board.push(row);
        }
    }

}
