import "./Header.css";
const Header = () => {
  return (
    <div className="header_main">
      <input placeholder="Find by Name or phone number" />
      <div></div>
      <div className="header_filters">
        <div>
          <label for="gender">Gender</label>
          <select id="gender">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div>
          <label for="member_status">Member Status</label>
          <select id="member_status">
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
