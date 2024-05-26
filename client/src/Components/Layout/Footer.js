import React from "react";
import { Link } from "react-router-dom";
const Fotter = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All Right Reserved &copy; SUbhadeep</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privecy Policy</Link>
      </p>
    </div>
  );
};

export default Fotter;
