import React from "react";
import { Timeline } from "antd";
import "./timeline.css";
import { BsFillSquareFill, BsArrowsAngleExpand } from "react-icons/bs";
import { IoIosFootball } from "react-icons/io";

const TimelineComponent = () => {
  return (
    <div>
      {/* <Timeline mode="alternate">
        <Timeline.Item
          dot={<BsFillSquareFill style={{ fontSize: "16px" }} />}
          color="red"
          label="15'"
        >
          Nyai Leo
        </Timeline.Item>
        <Timeline.Item
          label="17'"
          dot={
            <BsFillSquareFill style={{ fontSize: "16px", color: "#FFC200" }} />
          }
        >
          Omondi
        </Timeline.Item>
        <Timeline.Item
          label="47'"
          dot={<BsArrowsAngleExpand style={{ fontSize: "16px" }} />}
        >
          Omar
        </Timeline.Item>
        <Timeline.Item
          label="89'"
          color="white"
          dot={<IoIosFootball style={{ fontSize: "16px" }} />}
        >
          Kang'ethe
        </Timeline.Item>
      </Timeline> */}
      <Timeline mode="alternate">
        <Timeline.Item
          label="12'"
          dot={
            <BsFillSquareFill style={{ fontSize: "16px", color: "#FFC200" }} />
          }
        >
          Omondi
        </Timeline.Item>
        <Timeline.Item
          label="19'"
          color="white"
          dot={<IoIosFootball style={{ fontSize: "16px" }} />}
        >
          Kang'ethe
        </Timeline.Item>
        <Timeline.Item
          label="49'"
          color="red"
          dot={<BsFillSquareFill style={{ fontSize: "16px" }} />}
        >
          Sed ut
        </Timeline.Item>
        <Timeline.Item
          label="52'"
          dot={<BsArrowsAngleExpand style={{ fontSize: "16px" }} />}
        >
          Ocharo John
        </Timeline.Item>
        <Timeline.Item
          label="87'"
          color="white"
          dot={<IoIosFootball style={{ fontSize: "16px" }} />}
        >
          Kamau
        </Timeline.Item>
        <Timeline.Item
          label="90+5'"
          dot={
            <BsFillSquareFill style={{ fontSize: "16px", color: "#FFC200" }} />
          }
        >
          Here we indictae match ws finished in a lengthy way
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default TimelineComponent;
