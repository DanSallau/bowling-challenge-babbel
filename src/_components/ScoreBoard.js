import React, { PureComponent, PropTypes } from 'react';


export default class ScoreBoard extends PureComponent {

    render() {
        const { players } = this.props;
        return(
            <div className="score-board">
            {
                players.map(obj => {
                    <div className="player">
                        Player : { obj.name} 
                        Score : { obj.score}  
                    </div>
                }) 
            }
            </div>
        );
    }
}
ScoreBoard.propTypes = {
    players : PropTypes.array
}