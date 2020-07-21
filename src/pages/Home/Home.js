import React from "react";
import PropTypes from "prop-types";
import { ShoppingContainer } from "../../layout";

const Home = ({ className }) => {
  return (
    <div className={className}>
      <ShoppingContainer />
    </div>
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
