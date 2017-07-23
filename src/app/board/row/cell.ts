export class Cell {
    private value: number = 0;
    private hidden: boolean = true;
    private flagged: boolean = false;

    /**
     * Returns hidden value
     * 
     * @name isHidden
     * @returns { boolean }
     */
    public isHidden(): boolean {
        return this.hidden;
    }

    /**
     * Sets value to -1
     * 
     * @name setMine
     */
    public setMine(): void {
        this.value = -1;
    }

    /**
     * Returns wether value is -1
     * 
     * @name isMine
     * @returns { boolean }
     */
    public isMine(): boolean {
        return this.value === -1;
    }

    /**
     * Sets hidden value to false
     * 
     * @name show
     */
    public show(): void {
        this.hidden = false;
    }

    /**
     * Increments value by param
     * 
     * @name incrementValueBy
     */
    public incrementValueBy(num): void {
        this.value = this.value + num;
    }

    /**
     * Resets class properties to default
     * 
     * @name reset
     */
    public reset(): void {
        this.value = 0;
        this.hidden = true;
    }

    /**
     * Returns flagged value
     * 
     * @name isFlagged
     * @returns { boolean }
     */
    public isFlagged(): boolean {
        return this.flagged;
    }

    /**
     * Toogles value of flagged
     * 
     * @name toogleFlag
     */
    public toggleFlag():void {
        this.flagged = !this.flagged;
    }
}
