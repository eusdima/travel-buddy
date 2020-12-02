import React, { useState } from 'react';

import ChatForm from './chat/ChatForm';
import ChatHistory, { Message } from './chat/ChatHistory';

import { app } from './utils/firebase';

import './App.css';

async function submitMessage(message: Message) {
  const { from, to } = message;

  const database = app.database();

  // const groupRef = database.ref('groups').child(groupId);
  // groupRef.push(message);

  const messageFromRef = database.ref('messages').child(from).child(to);
  const messageToRef = database.ref('messages').child(to).child(from);

  await messageFromRef.push(message);
  await messageToRef.push(message);
}

function App() {
  const [messagesState, setMessageState] = useState<Message[]>([]);

  async function listenToMessages(from: string) {
    const database = app.database();

    // database
    // .ref('groups')
    // .child(groupId)
    // .on('value', (snapshot) => {

    database
      .ref('messages')
      .child(from)
      .on('value', (snapshot) => {
        const messagesJson = snapshot.val();

        const messages: Message[] = [];

        if (!messagesJson) {
          return;
        }

        Object.values(messagesJson).forEach((messagesToAndFrom) => {
          Object.values(
            messagesToAndFrom as Record<string, Message>
          ).forEach((message) => [messages.push(message)]);
        });

        setMessageState(messages);
      });
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <ChatHistory messages={messagesState} />
        <ChatForm
          onSubmit={(message) => submitMessage(message)}
          listenToMessage={listenToMessages}
        />
      </body>
    </div>
  );
}

export default App;
