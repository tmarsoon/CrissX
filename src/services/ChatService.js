import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

let stompClient = null;

const connect = (onMessageReceived) => {
    const socket = new SockJS('http://localhost:8080/ws');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
        stompClient.subscribe('/topic/public', (message) => {
            onMessageReceived(JSON.parse(message.body));
        });
    });
};

const disconnect = () => {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
};

const sendMessage = (chatMessage) => {
    if (stompClient) {
        stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(chatMessage));
    }
};

const ChatService = {
    connect,
    disconnect,
    sendMessage
};

export default ChatService;