import React  from "react";
import { GAME_STATE_PLAYING } from "./Constants";
/* Footer section contains two button - New Game and Suggest a move  */
const Footer =({onNewGameEvent, onSuggestClickEvent}) =>{

    return (
        <div className="panel footer">
            <button onClick={onNewGameEvent}>New Game</button>
            <button onClick={onSuggestClickEvent}>Next Move</button>
        </div>
    );
};

export default Footer;




