import { OnInit, Injectable } from '@angular/core';
import * as _ from 'lodash';

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
        this.generateBoard();
        this.setMines();
        console.log('this.board');
    }

    private randomIndex() {
        return Math.floor(Math.random() * this.size);
    }

    private modifyAdjacentCells(x, y, callback) {
        let rotation = [
            [x - 1, y - 1],
            [x - 1, y],
            [x - 1, y + 1],
            [x, y - 1],
            [x, y + 1],
            [x + 1, y -1],
            
        ];

        rotation.forEach((coord) => {
            if (this.board[coord[0]] && this.board[coord[0]][coord[1]]) {
                this.board[coord[0]][coord[1]] = callback(this.board[coord[0]][coord[1]]);
            }
        });
    }

    private setMines() {
        let minesToSet = this.mines;

        while (minesToSet > 0) {
            let x = this.randomIndex();
            let y = this.randomIndex();

            if (this.board[x][y] !== -1) {
                this.board[x][y] = -1;
                this.modifyAdjacentCells(x, y,
                    (val) => {
                        return val + 1;
                    });
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
