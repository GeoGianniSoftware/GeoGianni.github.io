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


