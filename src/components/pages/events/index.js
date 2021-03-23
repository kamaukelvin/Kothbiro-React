import React from "react";
import Navbar from "components/backNavbar";
import { useHistory } from "react-router-dom";
import "./event.css";
import Timeline from "components/timeline";
import { Link } from "react-router-dom";

const Events = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div>
      <Navbar fn={goBack} />
      <div className="events__wrapper">
        <div className="events__fixture__preview">
          <Link to="/matches/Dallas" style={{ flex: 1 }}>
            <div className="event__homeTeam">
              Dallas Fc
              <h6 className="event__score">0</h6>
            </div>
          </Link>
          <Link to="/matches/KenFC" style={{ flex: 1 }}>
            <div className="event__awayTeam">
              Ken Fc
              <h6 className="event__score">0</h6>
            </div>
          </Link>
        </div>
        <div className="events__timeline">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Events;
