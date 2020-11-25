import React, { useContext } from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle" style={{textTransform: "uppercase"}} >Discuss a project or just want to say hi? My Inbox is open for all.</p>
            </div>
            <a className="contact-detail-email" href={"mailto:" + contactInfo.email_address}>
                {contactInfo.email_address}
            </a>
            <div className="location-div"><span className="desc-prof"><svg viewBox="0 0 12 16" version="1.1" width="20" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>Mumbai, India</span></div>
            <div className="opp-div"><span className="desc-prof">Open for opportunities: Yes</span></div>
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            {/* <img className="profile-image" src="../../assets/images/me.jpg" alt="Salman Khan" /> */}
            <img className="profile-image" src="https://media-exp1.licdn.com/dms/image/C5103AQEEWZkkPJfJrQ/profile-displayphoto-shrink_200_200/0/1573970046849?e=1611792000&v=beta&t=HU785peP1p0vL0adKW3Tu8QwNTewr7nMGq4fLeSvvTc" alt="Salman Khan" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
