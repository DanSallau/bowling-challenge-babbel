import React, { PureComponent, PropTypes } from 'react';
import Frames from './Frames';
import Pins from './Pins';
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';
import {
   setCurrentPlayer,
   addPlayer,
   setFrameIndex,
   setPlayerScore,
   setHasStrike,
   setHasSpare,
   setCurrentRoll,
   setCurrentGame,
   addGame
} from '../_actions';

export default class Bowling extends PureComponent {
    constructor(props) {
        super(props);
        this.state =  {
            player_name: '',
            game_name: '',
        };
    }    
    onPlayerTextBoxChanged(e){ 
        this.setState({player_name: e.target.value});
    }

    onGameTextBoxChanged(e){
        this.setState({game_name: e.target.value});
    }

    addPlayer(){
        const player = this.state.player_name;
        const {dispatch} = this.props;
        dispatch(addPlayer(player));
        this.setState({player_name: ''});
    }
    addGame() {
        const game = this.state.player_name;
        const {dispatch} = this.props;
        dispatch(addGame(game));
        this.setState({game_name: ''});
    }
    render() {
        const { bowling } = this.props;

        return(
            <div className="main">
                <Frames frames={bowling.frames.frames} />
                <Pins rolls={bowling.rolls.rolls} />
                <ScoreBoard players ={bowling.players.players} />
                <GameBoard players ={bowling.games.games} />
                <div className="txt_AddPlayer">
                    <input type="text" placeholder="add pslayer" onChange={this.onPlayerTextBoxChanged} />
                </div>
                <input type="submit" value="Add Player" onClick={this.addPlayer} />
            </div>
        );
    }
}
Bowling.propTypes = {
    bowling: PropTypes.object,
    dispatch: PropTypes.func,
}