import React, { Component } from 'react';

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.triggerSendMessage = this.triggerSendMessage.bind(this);
    this.state = {message:''};
  }

  handleChange(e){
    this.setState({message: e.target.value});
  }

  triggerSendMessage(e) {
    if(13 === e.keyCode )
    {
      this.props.onMessageSend(this.state.message);
      this.setState({message: ''});
      e.preventDefault();
    }
  }

  render() {
    return (
      <div className="MessageInput">
        <textarea placeholder='type your message here' value={this.state.message} onChange={this.handleChange} onKeyDown={this.triggerSendMessage}></textarea>
     </div>

    )
  }
}

export default MessageInput;
