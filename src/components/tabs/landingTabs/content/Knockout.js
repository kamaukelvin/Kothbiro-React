import React from "react";
import { Tabs } from "antd";
import "../../knockout/knockout.css";
import R16 from "../../knockout/content/RoundOf16";
import QuarterFinal from "../../knockout/content/QuarterFinal";
import SemiFinal from "../../knockout/content/SemiFinal";
import Final from "../../knockout/content/Final";

const Knockouct = () => {
  const { TabPane } = Tabs;
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size="large"
        centered
        // tabPosition="bottom"
        // className="knockout__bottom__tabs"
      >
        <TabPane tab="1/8" key="1">
          <R16 />
        </TabPane>
        <TabPane tab="1/4" key="2">
          <QuarterFinal />
        </TabPane>
        <TabPane tab="Semi" key="3">
          <SemiFinal />
        </TabPane>
        <TabPane tab="Finals" key="4">
          <Final />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Knockouct;
