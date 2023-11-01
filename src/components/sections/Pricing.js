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
                <span className="number">27</span>
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
              <div className="lnks">
                <a href="#" className="lnk">
                  <span className="text">Learn More</span>
                  <i class="fa fa-chevron-right"></i>
                </a>
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
                <span className="number">32</span>
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
              <div className="lnks">
                <a href="#resume" className="lnk">
                  <span className="text">Learn More</span>
                  <i class="fa fa-chevron-right"></i>
                </a>
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

export const PriceClassic = () => {
  return (
    <div className="content pricing">
      {/* title */}
      <div className="title">Pricing</div>
      {/* content */}
      <div className="row pricing-items">
        {/* pricing item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="pricing-item">
            <div className="icon">
              <i className="ion ion-speedometer speed-basic" />
            </div>
            <div className="name">Basic</div>
            <div className="amount">
              <span className="dollar">$</span>
              <span className="number">22</span>
              <span className="period">hour</span>
            </div>
            <div className="feature-list">
              <ul>
                <li>Web Development</li>
                <li>Advetising</li>
                <li>Game Development</li>
                <li className="disable">Music Writing</li>
                <li className="disable">
                  Photography <strong>new</strong>
                </li>
              </ul>
            </div>
            <div className="lnks">
              <a href="#" className="lnk">
                <span className="text">Buy Basic</span>
                <i className="ion ion-speedometer speed-basic" />
              </a>
            </div>
          </div>
        </div>
        {/* pricing item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="pricing-item">
            <div className="icon">
              <i className="ion ion-speedometer" />
            </div>
            <div className="name">Pro</div>
            <div className="amount">
              <span className="dollar">$</span>
              <span className="number">48</span>
              <span className="period">hour</span>
            </div>
            <div className="feature-list">
              <ul>
                <li>Web Development</li>
                <li>Advetising</li>
                <li>Game Development</li>
                <li>Music Writing</li>
                <li>
                  Photography <strong>new</strong>
                </li>
              </ul>
            </div>
            <div className="lnks">
              <a href="#" className="lnk">
                <span className="text">Buy Pro</span>
                <i className="ion ion-speedometer" />
              </a>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
