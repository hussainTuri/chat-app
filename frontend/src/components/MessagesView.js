import React, { Component } from 'react';

class MessagesView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="messages" className="messages">
        <ul>
          {
            this.props.messages.map((msg, i) =>
              <li key={i}>
                <span className={msg.user == 'me' ? 'right' : 'left'}>{msg.message} </span>
                <div className="clear"></div>
              </li>
            )
          }
        </ul>
      </div>

    );
  }
}

export default MessagesView;
