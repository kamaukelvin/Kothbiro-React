import React from "react";
import { Empty } from "antd";

const Final = () => {
  return (
    <div>
      <h5 className="landing__tabs__title">Finals</h5>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
          <span className="text-white">
            No Data is available for this stage
          </span>
        }
      />
    </div>
  );
};

export default Final;
