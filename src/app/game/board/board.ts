import { OnInit, Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable()
export class Board implements OnInit {
    private size;
    private mines;
    private board = [];

    constructor(size, mines) {
        this.size = size;
        this.mines = mines;
    }

    public ngOnInit() {
    }

    private randomIndex() {
        return Math.floor(Math.random() * this.size);
    }

    private populateAdjacentCells(x, y, callback) {
        let rotation = [
            [x - 1, y - 1],
            [x - 1, y],
            [x - 1, y + 1],
            [x, y - 1],
            [x, y + 1],
            [x + 1, y -1],
            
        ];

        rotation.forEach((coord) => {
            let row = coord[0];
            let col = coord[1];

            if (this.board[row])
        })
    }

    private setMines() {
        let minesToSet = this.mines;

        while (minesToSet > 0) {
            let x = this.randomIndex();
            let y = this.randomIndex();

            if (this.board[x][y] !== -1) {
                this.board[x][y] = -1;
                minesToSet--;
            }
        }
    }

    private generateBoard() {
        for (let x = 0; x < this.size; x++) {
            let row = new Array(this.size);
            row.fill(0);                                         
            this.board.push(row);
        }
    }
}
