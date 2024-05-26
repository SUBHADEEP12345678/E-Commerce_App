import React from "react";
import Layouts from "../../Components/Layout/Layouts";
import UserMenu from "../../Components/Layout/UserMenu";

const Profile = () => {
  return (
    <Layouts title={"Your Profile"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h3>User Profile</h3>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Profile;
