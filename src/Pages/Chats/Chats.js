import React from 'react';
import styles from './Chats.module.css';
import Dialogs from '../../Components/Dialogs/Dialogs';
import Messages from '../../Components/Messages/Messages';

const Chats = (props) => {
    return (
        <div className={styles.MainPage}>
            <div className={styles.content}>
                <div className={styles.DialogsContainer}>
                    <Dialogs
                        dialogs={props.chatPage.dialogs}
                        dispatch={props.dispatch}
                    />
                </div>
                <div className={styles.middle}></div>
                <div className={styles.chat}>
                    <Messages
                        messages={props.chatPage.messages}
                        newMessageBody={props.chatPage.newMessageBody}
                        dispatch = {props.dispatch}
                    />
                </div>
            </div>
        </div>

    );
}

export default Chats;