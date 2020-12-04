import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import '../style/main.css';
import jhiles from '../images/jhiles.png';
import chris from '../images/chris.png';
import github from '../images/GitHub.png';
import michelle from '../images/michelle.png';
import tahmina from '../images/tahmina.png';
import miumiu from '../images/miumiu-michelle.png';

class MainPage extends React.Component {
  
  render() {
    return (
    <>
      <section id="screen1">
        <div className="main-page-text">
          <h1>“What mental health needs is more sunlight, more candor, and more unashamed conversation.” – Glenn Close</h1>
          <p>This is a safe space to allow users to speak freely and anonymously. Please try out our application and join our community dedicated to helping mental stress!</p>
        </div>
      </section>
      <div className="main-page-nav">
        <NavBarContainer />
      </div>
      <section id="screen2">
        <div className="happy-list">
          <div>
             <h1>How to Be Happy: 25 Habits to Add to Your Routine</h1>
             <p>credit to <a href = 'https://www.healthline.com/health/how-to-be-happy'>Medically reviewed by Timothy J. Legg, Ph.D., CRNP — Written by Ann Pietrangelo on January 15, 2019</a></p>
          </div>
         
          <ul>
            <li>Smile</li>
            <li>Exercise</li>
            <li>Get plenty of sleep</li>
            <li>Eat with mood in mind</li>
            <li>Be grateful</li>
            <li>Give a compliment</li>
            <li>Breathe deeply</li>
            <li>Acknowledge the unhappy moments</li>
            <li>Keep a journal</li>
            <li>Face stress head-on</li>
            <li>Declutter</li>
            <li>See friends</li>
            <li>Plan your week</li>
            <li>Ditch your phone</li>
            <li>Get into nature</li>
            <li>Explore meditation</li>
            <li>Consider therapy</li>
            <li>Find a self-care ritual</li>
            <li>Give back</li>
            <li>Take yourself out</li>
            <li>Create a thought list</li>
            <li>Take time to reflect</li>
            <li>Reevaluate your goals</li>
            <li>Take care of your body</li>
            <li>Let go of grudges</li>
          </ul>
        </div>
      </section>
      <section id="screen3">

        <div className="our-face">

          <div className="person">
            <img src={jhiles} alt="jhiles" className="face"/>
            <div className="person-discrib">
              <h3>Jhiles Young</h3>
              <a href="https://github.com/jhilesyoung">
                <img src={github} alt="github" width="25px" />
              </a>
            </div>
          </div>

          <div className="person">
            <img src={chris} alt="chris" className="face"/>
            <div className="person-discrib">
              <h3>Christopher Lee</h3>
              <a href="https://github.com/Gogetaspirit">
                <img src={github} alt="github" width="25px" />
              </a>
            </div>
          </div>
          
          <div className="person">
            <img src={michelle} alt="michelle" className="face"/>
            <div className="person-discrib">
              <h3>Michelle Lin</h3>
              <a href="https://github.com/michelleamazinglin">
                <img src={github} alt="github" width="25px" />
              </a>
            </div>
          </div>

          <div className="person">
            <img src={tahmina} alt="tahmina" className="face"/>
            <div className="person-discrib">
              <h3>Tahmina Nizam</h3>
              <a href="https://github.com/tnizam">
                <img src={github} alt="github" width="25px" />
              </a>
            </div>
          </div>
        </div>
   
        <p>Thanks for visiting. Signup to join our community &hearts;.</p>

        <footer>
          Copyright &copy; 2020 TheCloud
          <br />
          <img src={miumiu} alt="miumiu" className="face"/>
          <br />
          <p>miumiu - our mascot</p>
        </footer>
      </section>
 
      </>
    );
  }
}

export default MainPage;

//this is a comment