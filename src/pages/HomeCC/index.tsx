import React from "react";

import CalculatorCC from "@/components/Calculator/class";
import HeaderCC from "@/components/Header/class";

class HomePageCC extends React.PureComponent {
  render() {
    return (
      <>
        <HeaderCC />
        <CalculatorCC />
      </>
    );
  }
}

export default HomePageCC;
