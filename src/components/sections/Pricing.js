import { Fragment } from "react";
const Pricing = () => {
  return (
    <Fragment>
      <div className="content pricing">
        {/* title */}
        <div className="title">Freelance Pricing</div>
        {/* content */}
        <div className="row pricing-items">
          {/* pricing item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="pricing-item">
              <div className="icon">
                <i className="fa fa-plane" />
              </div>
              <div className="name">Standard</div>
              <div className="amount">
                <span className="dollar">$</span>
                <span className="number">30</span>
                <span className="period">/ hour</span>
              </div>
              <div className="feature-list">
                <ul>
                  <li>Unity3D Developer</li>
                  <li>C# Programmer</li>
                  <li>Database Management</li>
                  <li className="disable">
                    Systems Consulting
                  </li>
                  <li className="disable">
                    Community Building <strong>NEW</strong>
                  </li>
                  <li className="disable">
                    Crowdfunding Management <strong>NEW</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* pricing item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="pricing-item">
              <div className="icon">
                <i className="fa fa-rocket" />
              </div>
              <div className="name">Premium</div>
              <div className="amount">
                <span className="dollar">$</span>
                <span className="number">37</span>
                <span className="period">/ hour</span>
              </div>
              <div className="feature-list">
                <ul>
                <li>Unity3D Developer</li>
                  <li>C# Programmer</li>
                  <li>Database Management</li>
                  <li>
                    Systems Consulting
                  </li>
                  <li>
                    Community Building <strong>NEW</strong>
                  </li>
                  <li>
                    Crowdfunding Management <strong>NEW</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Pricing;

