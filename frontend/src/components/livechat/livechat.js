import React, { Component } from 'react';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';
import { Link } from 'react-router-dom';
import logo from '../images/sun_icon.png';
 
class LiveChat extends Component {
  componentDidMount() {
    addResponseMessage("We're here to help!");
  }

  
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API

    let resourcesLink = <Link to={`cloudymind-herokuapp.com/resources`}>Click here for our resources information</Link>

    if (newMessage === "resources" || "Resources") {
        addResponseMessage("Check out our Resources =>"), addLinkSnippet(resourcesLink)
    } else {
        addResponseMessage("I'm sorry, type 'hi' or 'resources' for instructions")
    }
  }

 
  render() {
    
      const titleMessage = "Are You Feeling Cloudy Today?"
      const subTitleMessage = "Let's chat about it"
      const senderPlaceHolder = "Type 'Resources' or 'Hello' for instructions"
    return (
      <div className="livechat">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title={titleMessage}
          subtitle={subTitleMessage}
          senderPlaceHolder={senderPlaceHolder}
        />
      </div>
    );
  }
}
 
export default LiveChat;