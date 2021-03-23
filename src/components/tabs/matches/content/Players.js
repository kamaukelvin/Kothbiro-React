import React from "react";
import { Empty } from "antd";
import NoPlayers from "assets/images/NoPlayers.png";

const Players = () => {
  return (
    <div>
      <Empty
        image={NoPlayers}
        imageStyle={{
          height: 60,
        }}
        description={<span>Coming soon</span>}
      ></Empty>
    </div>
  );
};

export default Players;
