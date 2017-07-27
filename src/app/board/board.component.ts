import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { Cell } from './row/cell/cell';
import { GameStateService } from '../services/game-state';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    @Input() private height: number;
    @Input() private width: number;
    @Input() private mines: number;
    private firstClick: boolean = false;
    private board: any[] = [];
    private minesLocations: Set<any> = new Set();
    private cellsToWin: number = (this.height * this.width) - this.mines;
    private cellsRevealed: number = 0;

    constructor(private game: GameStateService) {
    }

    /**
     * Subscrives to game changes
     * @name ngOnInit
     */
    public ngOnInit(): void {
        this.game.getChanges().subscribe((state) => {
            if (state === 'reset') {
                this.resetBoard();
            }
        });
    }

    /**
     * Executed when input changes are detected
     * @name ngOnChanges
     */
    public ngOnChanges(changes: SimpleChanges): void {
        let h: SimpleChange = changes['height'];
        let w: SimpleChange = changes['width'];
        let m: SimpleChange = changes['mines'];

        if (h.currentValue !== h.previousValue ||
            w.currentValue !== w.previousValue ||
            m.currentValue !== m.previousValue) {
                this.resetBoard();
            }
    }

    /**
     * Sets the board cells and mines
     * @name resetBoard
     */
    public resetBoard(): void {
        this.board = [];
        this.firstClick = false;
        this.minesLocations.clear();
        this.cellsToWin = (this.height * this.width) - this.mines;
        this.cellsRevealed = 0;
        this.generateBoard();
        this.setMines();
    }

    /**
     * Handles cell selection
     * @name handleSelectCell
     * @param { Cell }
    */
    public handleSelectCell(cell: Cell): void {
        if (!this.firstClick) {
            this.game.start();
            this.firstClick = true;
        }
        if (!cell.visited && !cell.isFlagged()) {
            this.cellsRevealed++;
            cell.visit();
            cell.show();
            if (this.cellsToWin === this.cellsRevealed) {
                this.game.win();
            }
            if (cell.isMine()) {
                cell.markDoom();
                this.revealAllMines();
                this.game.end();
            } else if (cell.value === 0) {
                let coords: any = cell.getCoords();
                this.modifyAdjacentCells(coords.x, coords.y, (c) => {
                    this.handleSelectCell(c);
                });
            }
        }
    }

    /**
     * Reveals all mines
     * @name revealAllMines
     */
    private revealAllMines(): void {
        this.minesLocations.forEach((loc) => {
            this.board[loc.x][loc.y].show();
        });
    }

    /**
     * Generates random number from 0 to size,
     * inclusive
     * @name randomIndex
     * @returns { number }
     */
    private randomIndex(side): number {
        return Math.floor(Math.random() * this[side]);
    }

    /**
     * Checks if x and y point to defined cell
     * in board
     * @name cellIsDefined
     * @param { number } x
     * @param { number } x
     * @returns { boolean }
     */
    private cellIsDefined(x, y): boolean {
        return this.board[x] && this.board[x][y];
    }

    /**
     * Returns corresponding rotation
     * x and y values derived from coordinate
     * passed in
     * @name getRotationSet
     * @param { number } x
     * @param { number } y
     * @returns { Set<any[]> }
     */
    private getRotationSet(x, y): Set<any[]> {
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

    /**
     * Modifies values in the 8 cells that surround the
     * cell identified by the passed in x and y
     * @name modifyAdjacentCells
     * @param { number } x
     * @param { number } y
     * @param { Function } cb
     */
    private modifyAdjacentCells(x, y, cb): void {
        let rotation = this.getRotationSet(x, y);

        rotation.forEach((cellCoords: any[]) => {
            const i = cellCoords[0];
            const j = cellCoords[1];

            if (this.cellIsDefined(i, j) && !this.board[i][j].isMine()) {
                cb(this.board[i][j]);
            }
        });
    }

    /**
     * Sets mines in randomized cells in board
     * @name setMines
     */
    private setMines(): void {
        let minesToSet: number = this.mines;

        while (minesToSet > 0) {
            const x: number = this.randomIndex('height');
            const y: number = this.randomIndex('width');

            if (!this.board[x][y].isMine()) {
                this.minesLocations.add({x: x, y: y});
                this.board[x][y].setMine();
                this.modifyAdjacentCells(x, y, (cell) => {
                    cell.incrementValueBy(1);
                });
                minesToSet--;
            }
        }
    }

    /**
     * Generates row arrays and cells
     * @name generateBoard
     */
    private generateBoard(): void {
        for (let i = 0; i < this.height; i++) {
            const row: any[] = [];
            for (let j = 0; j < this.width; j++) {
                let cell = new Cell();
                cell.setCoords(i, j);
                row.push(cell);
            }
            this.board.push(row);
        }
    }

}
