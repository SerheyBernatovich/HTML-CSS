/* eslint-disable */

// GLOBAL LEX ENV
// {
// "enviromentRecord":{
//      message = 'Test';
//      weight = 55;
//     'run': {
//          console.log('RUN');
//         },
//      'createMessenger':{ ..},
//      'messanger': ....
//     },
//   'outherLexicalEnv': null
// }
//
//
// createMessenger 1 LEX ENV
// {
// "enviromentRecord":{
//      message : "hello"
//      sender : ...
//     sendMessage: ...
//        ....
//     },
//   'outherLexicalEnv': global
// }
//
// createMessenger 2 LEX ENV
// {
// "enviromentRecord":{
//      message : ....
//      sender : ...
//     sendMessage: ...
//        ....
//     },
//   'outherLexicalEnv': global
// }
// setMessage LEX ENV
// {
// "enviromentRecord":{
//      'text':'hello'
//        ....
//     },
//   'outherLexicalEnv': createMessenger1
// }
// printer LEX ENV
// {
// "enviromentRecord":{
//            ....
//     },
//   'outherLexicalEnv': createMessenger1
// }
const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}
// inp none
// out obj
function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  // inp string
  // out undefined
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }
  function printer() {
    console.log(message);
  }

  return {
    sendMessage,
    setMessage,
    setSender,
    printer,
  };
}

const message1 = createMessenger();
message1.setMessage('hello');
message1.printer();
const message2 = createMessenger();
run();
