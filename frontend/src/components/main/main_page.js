import React from 'react';
import NavBarContainer from '../nav/navbar_container'

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <NavBarContainer />
        <h1>Clouds the smartest app by amazing people</h1>
        <footer>
          Copyright &copy; 2020 TheCloud
        </footer>
      </div>
    );
  }
}

export default MainPage;

//this is a comment