import React from "react";
import { Tabs } from "antd";
import Games from "./content/Games";
import Players from "./content/Players";
import "./matches.css";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const MatchesTabs = () => {
  return (
    <div>
      <h5 className="matches__tabs__title">
        Digo United <span className="matches__tab__sub">Group A</span>
      </h5>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane key="1" tab={<span>Matches</span>}>
          <Games />
        </TabPane>
        <TabPane tab={<span>Players</span>} key="2">
          <Players />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default MatchesTabs;
