import React, { PureComponent, PropTypes } from 'react';


export default class Frames extends PureComponent {
    
    static propTypes = {
        frames = PropTypes.array
    };

    render() {
        const { frames } = this.props;
        return(
            <div className="frames">
            {
                frames.map(obj => {
                    <img src="../../public/images/frames.png" id={obj.id} />
                }) 
            }
            </div>
        );
    }
}