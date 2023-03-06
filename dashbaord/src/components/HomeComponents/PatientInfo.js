import "./Patientinfo.css";

const PatientInfo = ({
  gender,
  Name,
  email,
  birthday,
  phonenumber,
  memberstatus,
  Past,
  Upcoming,
}) => {
  return (
    <div>
      <div className="patient_info">
        <div>{Name}</div>
        <div>{email}</div>
      </div>
      <div className="patient_detail-section">
        <div className="patient_basic_detail">
          <div className="border_right">
            <div className="info_heading">Gender</div>
            <div className="info_value">{gender}</div>
          </div>
          <div className="border_right">
            <div className="info_heading">Birthday</div>
            <div className="info_value">{birthday}</div>
          </div>
          <div className="border_right">
            <div className="info_heading">Phone Number</div>
            <div className="info_value">{phonenumber}</div>
          </div>
          <div>
            <div className="info_heading">Member Status</div>
            <div className="info_value">{memberstatus}</div>
          </div>
        </div>
        <div className="info_marks">
          <div className="info_container">
            <div className="info_value">{Past}</div>
            <div className="info_heading">Past</div>
          </div>
          <div>
            <div className="info_value">{Upcoming}</div>
            <div className="info_heading">Upcoming</div>
          </div>
          <p>VIEW SCG. REPORTS. DOCUMENTS.</p>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
