import React from 'react';
import NavBarContainer from '../nav/navbar_container'
import '../style/main.css'


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
        <p> this is the page inteoduce 4 of us</p>
        <p>Thanks for visiting. Signup to join our community &hearts;. Also, enjoy these cats to help you relax .</p>
        <footer>
          Copyright &copy; 2020 TheCloud
        </footer>
      </section>
 
      </>
    );
  }
}

export default MainPage;

//this is a comment