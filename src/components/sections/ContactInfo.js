const ContactInfo = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Get in Touch</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="info-list">
            <ul>
              <li>
                <strong>Email</strong> GeoGianniSoftware@gmail.com
              </li>
              <li>
                <strong>Phone</strong> +1 (786) 720-9767
              </li>
              <li>
                <strong>Freelance Status</strong> Available
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactInfo;
