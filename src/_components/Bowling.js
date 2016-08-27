import React, { PureComponent, PropTypes } from 'react';
import {store} from '../_store/basicStore';
import Frames from './Frames';
import Pins from './Pins';
import ScoreBoard from './ScoreBoard';
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
    constructor() {
        this.state = {
            player_name: '',
            game_name: '',
        }
    }
    
    onPlayerTextBoxChanged = e => this.setState({player_name: e.target.value});

    onGameTextBoxChanged = e => this.setState({game_name: e.target.value});

    addPlayer = () => {
        const player = this.state.player_name;
        store.dispatch(addPlayer(player));
        this.setState({player_name: ''});
    }
    addGame = () => {
        const game = this.state.player_name;
        store.dispatch(addGame(game));
        this.setState({game_name: ''});
    }
    render() {
        const { games } = this.props;
        return(
            <div className="main">
                <Frames frames={store.getState().frames.frames} />
                <Pins pins={store.getState().rolls.rolls.find(x => x.isCurrentRole===true).score} />
                <ScoreBoard players ={store.getState().players.players} />
                <GameBoard players ={store.getState().games.games} />
                <div className="txt_AddPlayer">
                    <input type="text" placeholder="add pslayer" onChange={this.onPlayerTextBoxChanged} />
                </div>
                <input type="submit" value="Add Player" onClick={this.addPlayer} />
            </div>
        );
    }
}