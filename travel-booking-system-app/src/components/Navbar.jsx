import React from "react";
import classes from "./Navbar.module.css";

const bookingNavDecisions = [
  { id: 1, title: "Stays", link: "/stays", icon: "" },
  { id: 2, title: "Flights", link: "/flights", icon: "" },
  { id: 3, title: "Car rentals", link: "/car-rentals", icon: "" },
  { id: 4, title: "Attractions", link: "/attractions", icon: "" },
  { id: 5, title: "Airport taxis", link: "/airport-taxis", icon: "" },
];

const Navbar = () => {
  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.headerContainer}>
        {/* NAVBAR HEADER  */}
        <header className={classes.headerRoot}>
          <h1>Booking.com</h1>
        </header>
        <div>
          <nav className={classes.navBarButtons}>
            <button className={classes.headerSmallButton}>ILS</button>
            <button className={classes.headerSmallButton}>UK</button>
            <button className={classes.headerSmallButton}>?</button>
            <button className={classes.headerListButtons}>
              List your property
            </button>
            <button className={classes.headerUserButtons}>Register</button>
            <button className={classes.headerUserButtons}>Login</button>
          </nav>
        </div>

        {/* NAVBAR BUTTONS */}
      </div>
      <div>
        <ul className={classes.navUl}>
          {bookingNavDecisions.map((desicion, index) => (
            <li key={index} className={classes.navLi}>
              <a href={desicion.link} className={classes.navA}>
                {desicion.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
