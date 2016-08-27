import React, { PureComponent, PropTypes } from 'react';


export default class Frames extends PureComponent {

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

Frames.propTypes = {
    frames : PropTypes.array
};