import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';
import Cloud from'../images/happy_cloud.png';
import Player from '../player/player';
import Resources from '../resources/resources';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <nav className="nav-when-log-in">
                <Link to={'/posts'}>All Clouds</Link>
                <Link to={'/inbox'}>Inbox</Link>
                <Link to={'/new_post'}>Write a Cloud</Link>
                <Link to={`/resources`}>Resources</Link>
                <Link to={`/about_us`}>About Us</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </nav>
        );
      } else {
        return (
            <nav className="nav-signin-signup">
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={`/resources`}>Resources</Link>
            </nav>
        );
      }
  }

  render() {
      return (
        <div className="navbar-page">
            <Link to={'/'}><img src={Cloud} className="nav-logo" alt="logo" width="80px" height="auto" /></Link>
            <Player />
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;