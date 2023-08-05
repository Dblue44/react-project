import React from 'react';

const MessageItem = (props) => {
    return(
        <li key={props.id}>
            {props.message}
        </li>
    )
}

export default MessageItem;