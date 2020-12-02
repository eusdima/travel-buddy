import { ChangeEvent, FC, useState } from 'react';

export type SubmitProps = {
  from: string;
  to: string;
  body: string;
};

export type Props = {
  onSubmit: (props: SubmitProps) => void;
  listenToMessage: (from: string) => void;
};

const ChatForm: FC<Props> = (props) => {
  const onSubmitProps = props.onSubmit;
  const listenToMessageProps = props.listenToMessage;

  const [fromState, setFromState] = useState('');
  const [toState, setToState] = useState('');
  const [messageState, setMessageState] = useState('');

  const onFromChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFromState(event.target.value);
  };

  const onToChange = (event: ChangeEvent<HTMLInputElement>) => {
    setToState(event.target.value);
  };

  const onMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageState(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmitProps({
      from: fromState,
      to: toState,
      body: messageState,
    });

    setMessageState('');
  };

  const listenToMessage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    listenToMessageProps(fromState);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>From</label>
      <input type="text" value={fromState} onChange={onFromChange}></input>
      <label>To</label>
      <input type="text" value={toState} onChange={onToChange}></input>
      <label>Message</label>
      <input
        type="text"
        value={messageState}
        onChange={onMessageChange}
      ></input>
      <button type="submit">Send</button>
      <button type="submit" onClick={listenToMessage}>
        Start Listening
      </button>
    </form>
  );
};

export default ChatForm;
