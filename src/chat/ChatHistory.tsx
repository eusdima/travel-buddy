import { FC } from 'react';

export type Message = {
  from: string;
  to: string;
  body: string;
};

export type Props = {
  messages: Message[];
};

const ChatHistory: FC<Props> = (props) => {
  const { messages } = props;

  return (
    <div className="chatHistoryContainer">
      {messages.map((message) => {
        return (
          <div>
            {message.from}: {message.body}
          </div>
        );
      })}
    </div>
  );
};

export default ChatHistory;
