import '../../../styles/ChatApp.css';
import React from 'react';
import io from 'socket.io-client';
import config from '../../../config';
import Messages from '../Messages';
import ChatInput from '../ChatInput';
import API from '../../../utils/API';

// This is where the main logic of the app will be. Here is where we will
// communicate with the chat server (send and receive messages). We will
// then pass the data received from the server to other components to be
// displayed
class ChatApp extends React.Component {
  socket = {};

  constructor(props) {
    super(props);

    // set the initial state of messages so that it is not undefined on load
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);

    // Connect to the server
    this.socket = io(config.api, { query: `username=${props.username}` }).connect();

    // Listen for messages from the server
    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  sendHandler(message) {
    const messageObject = {
      message
    };

    API.saveMessage({body: message});

    // Emit the message to the server
    this.socket.emit('client:message', messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
    // this.getMessages();
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  // todo: populate messages of socket room
  getMessages() {
    API
      .getMessages()
      .then(res => this.setState({ messages: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    // Here we want to render the main chat application components
    return (
      <div className="container">
        <h3>React Chat App</h3>
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }
}

ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
