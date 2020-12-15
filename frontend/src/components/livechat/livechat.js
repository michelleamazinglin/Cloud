import React, { Component } from 'react';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';
import logo from '../images/sun_icon.png';
 
class LiveChat extends Component {
  componentDidMount() {
    addResponseMessage("We're here to help!");
  }

  
 
  handleNewUserMessage = (newMessage) => {
    // console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    let response = ""

    let resourceLinks = {
        title: 'Click here for immediate help',
        link: '#/resources',
        target: '_blank'
    }
    
    let hiResponse = {
        title: 'As much as I would like to chat, you should share your thoughts with others in the cloud. Click here to get started',
        link: '#/signup',
        target: '_blank'
    }

    // let userResponses = ["resources", "resource", "hi", "Hi"]

    if (newMessage === "resources") {
        response = addLinkSnippet(resourceLinks)
        // addResponseMessage(response)
    } else  {
        // if (newMessage === ("Hi" || "hi"))
        response = addLinkSnippet(hiResponse)
        // addResponseMessage(response)
    }
  }

 
  render() {
    
      const titleMessage = "Are You Feeling Cloudy Today?"
      const subTitleMessage = "Let's chat about it"
      const senderPlaceHolder = "Type 'resources' or 'hi' for instructions"
    return (
      <div >
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