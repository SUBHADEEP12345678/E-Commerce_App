import React from "react";
import Layouts from "../../Components/Layout/Layouts";
import UserMenu from "../../Components/Layout/UserMenu";

const Orders = () => {
  return (
    <Layouts title={"Your Order"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>All Orders</h1>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Orders;
