// import React from "react";
const Navbar = () => {
  return (
    <div className="header" style={{ padding: "0 5rem" }}>
      <div className="navbar">
        <div className="navbar-start">
          <a className="font-bold text-[30px] text-black">Logo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-slate-800 text-lg">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-cyan-100 text-cyan-500 border-transparent text-lg hover:bg-cyan-300 hover:border-transparent">
            Username
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
