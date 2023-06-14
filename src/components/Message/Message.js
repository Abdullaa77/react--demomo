import React from 'react';
import './Message.css'
function Message(props) {
    return (
        <div className='msg' >
            <h2>{props.title}</h2>
        </div>
    );
}

export default Message;