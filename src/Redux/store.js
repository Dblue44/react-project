import chatReducer from "./chat-reducer";

let store = {
    _state: {
        chatPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Daniil"},
                {id: 3, name: "Nikita"},
                {id: 4, name: "Sasha"}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'}
            ],
            newMessageBody: '',

        }

    },
    _callSubscriber(){},
    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },
    dispatch(action){
        this._state.chatPage = chatReducer(this._state.chatPage, action);
        this._callSubscriber(this._state);
    },
}

export default store;
window.store = store;