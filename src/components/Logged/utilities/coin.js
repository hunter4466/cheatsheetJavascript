/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Coin = ({ props }) => {
  const providerData = useSelector((state) => state.mainReducer);
  const getTheTime = () => {
    const d = new Date().toLocaleString('en-US');
    return d;
  };
  return (
    <div className="">
      <h1>Provider 1</h1>
      {
        providerData ? providerData[props].map((e) => (
          <div key={e.USD}>
            {`${getTheTime()} - $${e.USD}`}
          </div>
        )) : null
    }
    </div>
  );
};

Coin.propTypes = {
  props: PropTypes.string.isRequired,
};
export default Coin;
