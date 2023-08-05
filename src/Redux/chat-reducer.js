const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"
const SEND_MESSAGE = "SEND-MESSAGE"

const chatReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessageBody = action.message;
            return state;
        case SEND_MESSAGE:
            let message = state.newMessageBody;
            state.newMessageBody = "";
            let newMessage = {
                id: 3,
                message: message
            };
            state.messages.push(newMessage);
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageCreator = (message) => ({type: UPDATE_NEW_MESSAGE, message: message});

export default chatReducer;