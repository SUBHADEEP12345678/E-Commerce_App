import React from "react";
import AdminMenu from "../../Components/Layout/AdminMenu";
import Layouts from "../../Components/Layout/Layouts";

const Users = () => {
  return (
    <Layouts title="Dashnoard - All Users">
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Users;
