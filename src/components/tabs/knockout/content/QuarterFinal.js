import React from "react";
import { Empty } from "antd";
import BackToTop from "components/backToTop";

const QuarterFinal = () => {
  return (
    <div>
      <BackToTop />
      <h5 className="landing__tabs__title">Quarter Finals</h5>
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

export default QuarterFinal;
