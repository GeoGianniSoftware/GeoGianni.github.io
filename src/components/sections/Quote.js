import { Fragment } from "react";
const Quote = () => {
  return (
    <Fragment>
      <div className="content quote">
        {/* title */}
        <div className="title">
          <span>Quote</span>
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="revs-item">
              <div className="text">
                <div>
                The pinnacle of game design craft is combining perfect mechanics and compelling fiction into one seamless system of meaning.
                </div>
              </div>
              <div className="user">
                <div className="img">
                  <img src="images/man1.jpg" alt="Harvey Mackay" />
                </div>
                <div className="info">
                  <div className="name">Tynan Sylvester</div>
                  <div className="company">Game Developer</div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Quote;
