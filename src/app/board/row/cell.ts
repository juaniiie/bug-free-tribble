export class Cell {
    private value = 0;
    private hidden = true;
    
    public isHidden() {
        return this.hidden;
    }

    public setMine() {
        this.value = -1;
    }

    public isMine() {
        return this.value === -1;
    }

    public show() {
        this.hidden = false;
    }

    public incrementValueByOne() {
        this.value = this.value + 1;
    }

    public reset() {
        this.value = 0;
        this.hidden = true;
    }

}