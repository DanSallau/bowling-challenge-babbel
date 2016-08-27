import React, { PureComponent, PropTypes } from 'react';


export default class Pins extends PureComponent {

    render() {
        const { rolls } = this.props;
        const roll = rolls.find(x => x.isCurrentRole===true);
        const score = roll ? roll.score : 10;
        const remainingPins = 10 - score;
        return(
            <div className="pins">
            {
                [...Array(remainingPins)].map(obj => {
                    <img src="../../public/images/pin.png" id={obj.id} />
                }) 
            }
            </div>
        );
    }
}

Pins.propTypes = {
    rolls : PropTypes.array
};