import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import '../style/main.css';
import jhiles from '../images/jhiles.png';
import chris from '../images/chris.png';
import github from '../images/GitHub.png';
import michelle from '../images/michelle.png';
import tahmina from '../images/tahmina.png';
import miumiu from '../images/miumiu-michelle.png';
import link from '../images/link.png';
import angel from '../images/angelist.png';


class About extends React.Component {

    render() {

        return (
          <>
          <NavBarContainer/>
          <section id="screen3">

        <div className="our-face">

          <div className="person">
            <img src={jhiles} alt="jhiles" className="face"/>
            <div className="person-discrib">
              <h3>Jhiles Young</h3>
              <div className="job-icons">
                <a target="_blank" href="https://github.com/jhilesyoung">
                  <img src={github} alt="github" width="25px" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/jhilesyoung/">
                    <img src={link} alt="" width="25px" />
                </a>
                <a target="_blank" href="https://angel.co/u/jhilesyoung-gmail-com">
                    <img src={angel} alt="" width="25px" />
                </a>
              </div>
            </div>
          </div>

          <div className="person">
            <img src={chris} alt="chris" className="face"/>
            <div className="person-discrib">
              <h3>Christopher Lee</h3>
              <div className="job-icons">
              <a target="_blank" href="https://github.com/Gogetaspirit">
                <img src={github} alt="github" width="25px" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/christopher-lee-7b48b6134/">
                  <img src={link} alt="" width="25px" />
              </a>
              <a target="_blank" href="https://angel.co/u/christopher-lee-133">
                  <img src={angel} alt="" width="25px" />
              </a> 
              </div>
            </div>
          </div>
          
          <div className="person">
            <img src={michelle} alt="michelle" className="face"/>
            <div className="person-discrib">
              <h3>Michelle Lin</h3>
              <div className="job-icons">
                <a target="_blank" href="https://github.com/michelleamazinglin">
                  <img src={github} alt="github" width="25px" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/michelle-lin-9b9b8614b/">
                  <img src={link} alt="" width="25px" />
                </a>
                <a target="_blank" href="https://angel.co/u/michelle-lin-29">
                    <img src={angel} alt="" width="25px" />
                </a>       
              </div>
            </div>
          </div>

          <div className="person">
            <img src={tahmina} alt="tahmina" className="face"/>
            <div className="person-discrib">
              <h3>Tahmina Nizam</h3>
              <div className="job-icons">
                <a target="_blank" href="https://github.com/tnizam">
                  <img src={github} alt="github" width="25px" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/tahminanizam/">
                    <img src={link} alt="" width="25px" />
                </a>
                <a target="_blank" href="https://angel.co/u/tahmina-nizam">
                    <img src={angel} alt="" width="25px" />
                </a>     
              </div>
            </div>
          </div>
        </div>
   
        <h3>Thanks for visiting &hearts;.</h3>

        <footer>
          Copyright &copy; 2020 TheCloud
          <br />
          <img src={miumiu} alt="miumiu" className="face"/>
          <br />
          <p>miumiu - our mascot</p>
          <br />
          <a target="_blank" href="https://github.com/michelleamazinglin/Cloud">
            Click here to see Cloudy Mind Repository
          </a>
        </footer>
      </section>
          </>
        );
    }
}

export default About;