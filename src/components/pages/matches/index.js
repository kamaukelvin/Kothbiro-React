import React from "react";
import Navbar from "components/backNavbar";
import Tabs from "components/tabs/matches";
import { useHistory } from "react-router-dom";

const Matches = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div>
      <Navbar fn={goBack} />
      <Tabs />
    </div>
  );
};

export default Matches;
