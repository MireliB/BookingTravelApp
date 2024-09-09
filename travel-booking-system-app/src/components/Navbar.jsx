import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { MdOutlineBed } from "react-icons/md";
import { FaCarRear } from "react-icons/fa6";
import { MdOutlineAttractions } from "react-icons/md";
import { LiaTaxiSolid } from "react-icons/lia";

import CurrencyDialog from "./Dialogs/CurrencyDialog";

import classes from "./Navbar.module.css";

const bookingNavDecisions = [
  { id: 1, title: "Stays", link: "/stays", icon: <MdOutlineBed /> },
  {
    id: 2,
    title: "Flights",
    link: "/flights",
    icon: <PiAirplaneInFlightFill />,
  },
  { id: 3, title: "Car rentals", link: "/car-rentals", icon: <FaCarRear /> },
  {
    id: 4,
    title: "Attractions",
    link: "/attractions",
    icon: <MdOutlineAttractions />,
  },
  {
    id: 5,
    title: "Airport taxis",
    link: "/airport-taxis",
    icon: <LiaTaxiSolid />,
  },
];

const Navbar = () => {
  const navigation = useNavigate();
  const [currencyDialogOpen, setCurrencyDialogOpen] = useState(false);

  const homepageNavigationHandler = () => {
    navigation("/");
  };

  const onOpenCurrencyHandler = () => {
    setCurrencyDialogOpen(true); // Open the dialog
  };

  const onCloseCurrencyHandler = () => {
    setCurrencyDialogOpen(false); // Close the dialog
  };

  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.headerContainer}>
        {/* NAVBAR HEADER  */}
        <header className={classes.headerRoot}>
          <h1 onClick={homepageNavigationHandler}>Booking.com</h1>
        </header>
        <div>
          <nav className={classes.navBarButtons}>
            <button
              className={classes.headerSmallButton}
              onClick={onOpenCurrencyHandler}
            >
              ILS
            </button>
            <button className={classes.headerSmallButton}>UK</button>
            <button className={classes.headerSmallButton}>?</button>
            <button className={classes.headerListButtons}>
              List your property
            </button>
            <button className={classes.headerUserButtons}>Register</button>
            <button className={classes.headerUserButtons}>Sign in</button>
          </nav>
        </div>
      </div>
      {/* NAVBAR BUTTONS */}
      <div>
        <ul className={classes.navUl}>
          {bookingNavDecisions.map((decision, index) => (
            <li key={index} className={classes.navLi}>
              <a href={decision.link} className={classes.navA}>
                {decision.icon}
                {decision.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Currency Dialog */}
      <CurrencyDialog
        open={currencyDialogOpen}
        onClose={onCloseCurrencyHandler}
      />
    </div>
  );
};

export default Navbar;
