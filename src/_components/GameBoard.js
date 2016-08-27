import React, { PureComponent, PropTypes } from 'react';


export default class GameBoard extends PureComponent {

    render() {
        const { games } = this.props;
        return(
            <div className="game-board">
            { games &&
                games.map(obj => {
                    obj.isCurrentGame ?
                        <div className="current-board">
                            Total Players : { obj.players} 
                        </div> :
                    <div className="player">
                        Player : { obj.players} 
                    </div>
                }) 
            }
            </div>
        );
    }
}

GameBoard.propTypes = {
    games : PropTypes.array
};