import React from 'react';

const Image = (props) => {

    const style={
        width: props.width,
        height: props.height
    }

    return (
        <div>
            <img src = {props.src} style={style} className={props.classes}></img>
        </div>
    );
}

export default Image;