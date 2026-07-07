class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let n = board.length;
        let rows = new Set();
        let columns = new Set();
        let boxes = new Set();

        for(let row = 0; row < n; row++){
            for(let col = 0; col < n; col++){
                let val = board[row][col];

                if(val === "."){
                    continue;
                }

                let rowKey = `${row}-${val}`;
                let colKey = `${col}-${val}`;
                let boxesKey = `${Math.floor(row/3)}-${Math.floor(col/3)}-${val}`;

                if(rows.has(rowKey) || columns.has(colKey) || boxes.has(boxesKey)){
                    return false;
                }

                rows.add(rowKey);
                columns.add(colKey);
                boxes.add(boxesKey);

            }
        }
        return true;
    }
}
