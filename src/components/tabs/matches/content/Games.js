import React from "react";
import { Card, Divider } from "antd";
import { Link } from "react-router-dom";
import "../matches.css";

const Games = () => {
  return (
    <div>
      <Card className="knockout__card">
        <p>
          <Link to="/events/1">
            Digo United<span className="knockout__score">2</span>
          </Link>
        </p>
        <p>
          <Link>
            Dallas All Stars<span className="knockout__score">2</span>
          </Link>
        </p>

        <Divider className="knockout__card__divider" />
        <p>
          <Link>
            Digo United<span className="knockout__score">2</span>
          </Link>
        </p>
        <p>
          <Link>
            Dallas All Stars<span className="knockout__score">2</span>
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Games;
