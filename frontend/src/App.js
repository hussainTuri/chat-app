import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import MessageInput from './components/MessageInput';
import MessagesView from './components/MessagesView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { msgQue: [], message: '', endpoint: 'ws://localhost:8080', response: false };
    this.handleSending = this.handleSending.bind(this);
    this.handleReceiving = this.handleReceiving.bind(this);
    this.state.socket;
  }

  handleReceiving(event) {
    this.setState(prevState => ({
      msgQue: [...prevState.msgQue, { user: 'Jack', message: event.data }]
    }));
  }

  handleSending(message) {

    this.setState(prevState => ({
      msgQue: [...prevState.msgQue, { user: 'me', message: message }]
    }));

    this.state.socket.send(message);
  }

  componentDidMount() {
    this.state.socket = new WebSocket('ws://localhost:8081');
    console.log(this.state.socket);

    // Connection opened
    this.state.socket.onopen = e => function (e) {
      console.log('Socket connection open');
      console.log(e);
    };

    // On message receiving
    this.state.socket.onmessage = e => this.handleReceiving(e);

    // Log error
    this.state.socket.onerror = e => function (e) {
      console.log('Error occurd');
      console.log(e);
    };

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <MessagesView messages={this.state.msgQue}/>
        <MessageInput onMessageSend={this.handleSending}/>
      </div>
    );
  }
}

export default App;
