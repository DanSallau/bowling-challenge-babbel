import React, { PureComponent, PropTypes } from 'react';


export default class Pins extends PureComponent {
    
    static propTypes = {
        score = PropTypes.number
    };

    render() {
        const { score } = this.props;
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