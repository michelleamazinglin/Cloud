import React, { Component } from 'react';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';
 
import logo from '../images/sun_icon.png';
 
class App extends Component {
  componentDidMount() {
    addResponseMessage(response);
  }
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("Maybe we can help :-)");
  }
 
  render() {
    return (
      <div className="livechat">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title={"Are You Feeling Cloudy Today?"}
          subtitle={"Let's chat about it"}
          senderPlaceHolder={"Can we help you?"}
        />
      </div>
    );
  }
}
 
export default App;