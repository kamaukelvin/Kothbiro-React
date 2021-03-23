import React from "react";
import { Tabs } from "antd";
import "./landing.css";
import { IoIosFootball } from "react-icons/io";
import {
  AiOutlineClockCircle,
  AiOutlineOrderedList,
  AiOutlineTrophy,
} from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Roots from "./content/Roots";
import Standings from "./content/Standings";
import Knockout from "./content/Knockout";
import Gallery from "./content/Gallery";
import TopScorers from "./content/TopScorer";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const LandingTabs = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane
          key="1"
          tab={
            <span>
              <AiOutlineClockCircle />
              Roots
            </span>
          }
        >
          <Roots />
        </TabPane>
        <TabPane
          tab={
            <span>
              <AiOutlineOrderedList />
              Standings
            </span>
          }
          key="2"
        >
          <Standings />
        </TabPane>
        <TabPane
          tab={
            <span>
              <AiOutlineTrophy />
              Knockout
            </span>
          }
          key="3"
        >
          <Knockout />
        </TabPane>
        <TabPane
          tab={
            <span>
              <BsImages />
              Gallery
            </span>
          }
          key="4"
        >
          <Gallery />
        </TabPane>
        <TabPane
          tab={
            <span>
              <IoIosFootball />
              Top Scorers
            </span>
          }
          key="5"
        >
          <TopScorers />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default LandingTabs;
