import { Stomp } from "@stomp/stompjs";

type MessageCallback = (message: any) => void;

const createStompClient = (url: string, onMessageCallback: MessageCallback) => {
  const client = Stomp.client(url);

  client.connect({}, () => {
    // Subscribe to a destination
    client.subscribe('/topic/someTopic', (message) => {
      // Handle incoming messages
      onMessageCallback(JSON.parse(message.body));
    });
  });

  return client;
};

export default createStompClient;
