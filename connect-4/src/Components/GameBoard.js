import React, { useEffect, useState } from "react";
import GameCircle from "./GameCircle";
import '../Game.css';
import Header from "../Header";
import Footer from "../Footer";
import { isWinner, isDraw, getComputerMove, getSmartComputerMove } from "../helper";
import {NO_OF_CIRCLS, PLAYER0, PLAYER1, PLAYER2, GAME_STATE_PLAYING, GAME_STATE_WIN, GAME_STATE_DRAW} from "../Constants";


//Component GameBoard
const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(PLAYER0));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER1);
    const [gameState, setGameState] =  useState(GAME_STATE_PLAYING);
    const [winPlayer, setWinPlayer] = useState(PLAYER0);

    console.log(gameBoard);

    //Run once
    useEffect(() => {
        initGame();
    }, []);

    //Initialize Board with 0's when user clicks New Game
    const initGame = () =>{
        //console.log("initGame called");
        setGameBoard(Array(NO_OF_CIRCLS).fill(PLAYER0));
        setCurrentPlayer(PLAYER1);
        setGameState(GAME_STATE_PLAYING);
    }

    //Ask Computer to suggest a Move
    const suggestMove = () => {
        circleClicked(getSmartComputerMove(gameBoard));
    }

    //Set the Board using renderCircle function
    const initBoard = () =>{
       const circles = [];
       for(let i=0; i < NO_OF_CIRCLS; i++){
            circles.push(renderCircle(i));
       }
       return circles;
    }

    //When Circle is clicked, either set the state(win, draw), who is playing, or set who won after connect-4, or set 
    const circleClicked = (id) =>{
        //debugger;
        console.log("circle clicked" +id);
        if(gameBoard[id] != PLAYER0) return;
        
        if(gameState != GAME_STATE_PLAYING) return;

        if(isWinner(gameBoard, id, currentPlayer)){
           // console.log("Winner ");
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);
        }
        
        if(isDraw(gameBoard, id, currentPlayer)){
             setGameState(GAME_STATE_DRAW);
             setWinPlayer(PLAYER0);
         }
        setGameBoard(prev => {
            return prev.map((circle,pos) =>{
                if(pos === id)
                    return currentPlayer;
                return circle;
            })
        })

        setCurrentPlayer(currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1)
        console.log(gameBoard);
        console.log(currentPlayer);
    }
    //helper function
    const renderCircle =  id =>{
        return <GameCircle key= {id} id={id} className={`player${gameBoard[id]}`} onCircleClicked={circleClicked} />
    } 

    return (
        <>
            <Header gameState= {gameState} currentPlayer={currentPlayer} winPlayer={winPlayer}/>
            <div className="gameBoardStyle">
                <React.StrictMode>
                    {initBoard()}                    
                </React.StrictMode>
            </div>
            <Footer onNewGameEvent = {initGame} onSuggestClickEvent={suggestMove} />
        </>
    )
};

export default GameBoard;
