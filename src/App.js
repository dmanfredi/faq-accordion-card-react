import Dropdown from './Dropdown';
import womanMobile from './images/illustration-woman-online-mobile.svg';
import womanDesktop from './images/illustration-woman-online-desktop.svg';
import box from './images/illustration-box-desktop.svg';
// import desktopPattern from './images/bg-pattern-desktop.svg';
import { useState } from 'react';

function App() {
  const [desktop, isDesktop] = useState();
  function handleResize() {
    // console.log(window.innerWidth);
    if (window.innerWidth >= 768) isDesktop(true);
    else return isDesktop(false);
  }
  if (desktop === undefined) handleResize();
  window.addEventListener('resize', handleResize, false);

  return (
    <div className="App">
      <div className="img-margin"></div>
      <div className="container">
        <div className="img-container">
          <img
            className="faq-image"
            src={desktop ? womanDesktop : womanMobile}
            alt="women"
          />
          {desktop ? <img className="box-image" src={box} alt="box" /> : null}
          {/* {desktop ? <img className="desktopPattern-image" src={desktopPattern} alt="box" /> : null} */}
        </div>
        <div className="faq-container">
          <header className="faq">FAQ</header>
          <Dropdown
            question="How many team members can I invite?"
            answer="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
          />
          <div className="divider"> </div>
          <Dropdown
            question="What is the maximum file upload size?"
            answer="No more than 2GB. All files in your account must fit your allotted storage space."
          />
          <div className="divider"> </div>
          <Dropdown
            question="How do I reset my password?"
            answer="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
          />
          <div className="divider"> </div>
          <Dropdown
            question="Can I cancel my subscription?"
            answer="Yes! Send us a message and we'll process your request no questions asked."
          />
          <div className="divider"> </div>
          <Dropdown
            question="Do you provide additional support?"
            answer="Chat and email support is available 24/7. Phone lines are open during normal business hours."
          />
          <div className="divider"> </div>
        </div>
      </div>
    </div>
  );
}

export default App;
