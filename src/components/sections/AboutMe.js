import { Fragment } from "react";
const bio_ = ` <p>
Default.
</p>`;

const birthday = "2000/04/28";
const yearsOld = calculateAge();

function calculateAge() { 
  var years = new Date(new Date() - new Date(birthday)).getFullYear() - 1970;
  return years;
}

const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">About</span> Me
        </div>

        {/* content */}
        <div className="about-container">
          {/* Headshot + Name intro */}
          <div className="about-intro">
            <img
              src="images/man1.jpg"
              alt="Gianni Rivero"
              className="about-headshot"
            />
            <div className="about-intro-text">
              My name is <span className="highlight-name">Gianni Rivero</span>,<br />
              I am a Senior Unity Engineer.
            </div>
          </div>
          <div className="about-specialize">
            I specialize in <span className="highlight-name">Performance Optimization</span>, <span className="highlight-name">Systems Architecture</span>, and <span className="highlight-name">Multiplayer</span>.
          </div>

          {/* Bio */}
          <div
            className="about-bio"
            dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
          ></div>

          {/* Info list with styled pills */}
          <div className="about-info">
            <ul>
              <li>
                <span className="info-label">Age</span>
                <span className="info-value">{yearsOld}</span>
              </li>
              <li>
                <span className="info-label">Location</span>
                <span className="info-value">Colorado, USA</span>
              </li>

              <li className="status-item">
                  <span className="status-ribbon"><i className="fa fa-briefcase"></i> Freelance Status:</span>
                  <span className="status-badge">
                <span className="status-dot" aria-hidden="true"></span>
                Available
              </span>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;


