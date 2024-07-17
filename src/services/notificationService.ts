// src/services/notificationService.ts
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const SOCKET_URL = 'http://localhost:15674/stomp'; // Asegúrate de reemplazar esto con tu URL de RabbitMQ

let stompClient: Stomp.Client | null = null;

export function connect(onMessageReceived: (message: any) => void) {
  const socket = new SockJS(SOCKET_URL);
  stompClient = Stomp.over(socket);

  stompClient.connect({}, (frame) => {
    console.log('Connected: ' + frame);

    stompClient?.subscribe('/user/queue/notifications', (message) => {
      if (message.body) {
        onMessageReceived(JSON.parse(message.body));
      }
    });
  }, (error) => {
    console.error('Error connecting to WebSocket:', error);
  });
}

export function disconnect() {
  if (stompClient !== null) {
    stompClient.disconnect(() => {
      console.log('Disconnected');
    });
  }
}
