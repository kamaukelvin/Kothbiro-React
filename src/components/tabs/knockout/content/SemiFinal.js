import React from "react";
import { Empty } from "antd";

const SemiFinal = () => {
  return (
    <div>
      <h5 className="landing__tabs__title">Semi Finals</h5>
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

export default SemiFinal;
