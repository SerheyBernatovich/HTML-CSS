export default function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  const sendMessage = name => {
    console.log(`${name}, ${message}! Your ${sender}`);
  };

  const setMessage = text => {
    message = text;
  };
  const setSender = senderName => {
    sender = senderName;
  };
  return { sendMessage, setMessage, setSender };
}
