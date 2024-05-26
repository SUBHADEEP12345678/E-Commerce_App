import React from "react";
import Layouts from "../../Components/Layout/Layouts";
import { useAuth } from "../../context/auth";
import UserMenu from "../../Components/Layout/UserMenu";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layouts title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>Usre Name: {auth?.user?.name}</h3>
              <h3>Usre Email: {auth?.user?.email}</h3>
              <h3>Usre Contact: {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Dashboard;
