// src/WebSocketService.js
import Stomp from 'stompjs';

class WebSocketService {
  constructor() {
    this.socket = null;
    this.stompClient = null;
  }

  connect() {
    this.socket = new WebSocket('ws://localhost:8080/ws');
    this.stompClient = Stomp.over(this.socket);

    this.stompClient.connect({}, () => {
      console.log('WebSocket connected');
    }, (error) => {
      console.error('WebSocket connection error:', error);
    });
  }

  subscribe(destination, callback) {
    if (this.stompClient) {
      this.stompClient.subscribe(destination, (message) => {
        if (message.body) {
          callback(JSON.parse(message.body)); // Parse incoming JSON into ChatMessage
        }
      });
    }
  }

  sendMessage(destination, chatMessage) {
    if (this.stompClient) {
      this.stompClient.send(destination, {}, JSON.stringify(chatMessage)); // Send message as JSON
    }
  }

  disconnect() {
    if (this.stompClient) {
      this.stompClient.disconnect();
      console.log('WebSocket disconnected');
    }
  }
}

const webSocketService = new WebSocketService();
export default webSocketService;
