//This code determines who win the game

export const winLines = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [4,7,11,15],
        [0,5,10,15],
        [3,6,9,12]
];

export const isWinner = (gameBoard, currentMove, currentPlayer) => {
    const board = [... gameBoard];  //copy board array        
    board[currentMove]= currentPlayer;

    for(let i=0; i< winLines.length; i++){
        const [c1,c2,c3,c4] = winLines[i];
        if(board[c1] > 0  &&    //if element > 0, if player already clicked a circle)
            board[c1] === board[c2] &&
            board[c2] === board[c3] &&
            board[c3] === board[c4]){
            return true;
        }
    }
    return false;
}

export const isDraw =  (gameBoard, currentMove, currentPlayer) => {
    const board = [... gameBoard];  //copy array        
    board[currentMove]= currentPlayer;
    let count = board.reduce((n,x) => n + (x === 0),0);  //calculates total unclicked circles
    console.log(`count ${count}`);
    return count === 0;
}

const getComputerMove = (gameBoard) =>{
    let validMoved =[];
    for(let i=0; i<gameBoard.length; i++){
        if(gameBoard[i] === 0)
            validMoved.push(i);   //if the Gameboard entry at the current Index is Zero(no player currently occupied that circle) 
    }                                   //pushing the Index of Gameboard to "validMoved" array
    let num = Math.floor(validMoved.length * Math.random());
    return validMoved[num];
}

export const getSmartComputerMove = (gameBoard) =>{
    let moveChecks = [
      
        {
            indexes: [0, 4, 8, 12], max: 4, step:1                //vertically winning Lines
        },

        {                                                           //horizontal circles
            indexes: [0, 1, 2, 3], max: 16, step:4                  //4 rows to be checked (4*4)
        },
        {
            //diagonally
            indexes: [0, 5, 10, 15], max: 16, step:16               //repeats only one time
        },
        {
            //diagonally
            indexes: [3, 6, 9, 12], max: 16, step:16
        }
    ];
    let postion = getPositon(gameBoard, moveChecks);
    if(postion > -1) 
        return postion;
    return getComputerMove(gameBoard);
}

const getPositon =(gameBoard, moveChecks) =>{
    for(let i=0; i<moveChecks.length; i++){
        for(let j=0; j<moveChecks[i].max; j+=moveChecks[i].step){
            let series = gameBoard[j + moveChecks[i].indexes[0]].toString() +
            gameBoard[j + moveChecks[i].indexes[1]].toString() +
            gameBoard[j + moveChecks[i].indexes[2]].toString() +
            gameBoard[j + moveChecks[i].indexes[3]].toString();

            switch(series){
                case "1110":
                case "2220":
                    return j + moveChecks[i].indexes[3];
                case "1101":
                case "2202":
                    return j + moveChecks[i].indexes[2];
                case "1011":
                case "2022":
                    return j + moveChecks[i].indexes[1];
                case "0111":
                case "0222":
                    return j + moveChecks[i].indexes[0];
                default:
            }
        }
    }
    return -1;
};