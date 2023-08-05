import React from 'react';
import styles from './Chat.module.css';
import MessageItem from "./MessageItem";
import {sendMessageCreator, updateNewMessageCreator} from "../../Redux/chat-reducer";
const Messages = (props) => {
    let MessageItems = props.messages.map(message => <MessageItem id={message.id} message={message.message}/>)
    let newMessageBody = props.newMessageBody;
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (event) => {
        props.dispatch(updateNewMessageCreator(event.target.value))
    }

    return (
        <div className={styles.Chat}>
            <div className={styles.Messages}>
                <ul>
                    {MessageItems}
                </ul>
            </div>
            <div className={styles.sendMessageArea}>
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    className={styles.MessageInputArea}
                    cols="30"
                    rows="3"></textarea>
                <div className={styles.sendButton}>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

        </div>
    );
}

export default Messages;