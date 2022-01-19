import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reduxActions } from '../../../redux/app/app';
import Coin from '../utilities/coin';

const View = ({ props }) => {
  const dispatch = useDispatch();

  const fetchInfo = () => {
    dispatch(reduxActions.triggerFetch(props));
  };
  useEffect(() => {
    fetchInfo();
    const setInt = setInterval(() => {
      fetchInfo();
    }, 15000);
    return () => {
      clearInterval(setInt);
      dispatch(reduxActions.clearReducer());
    };
  }, []);
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Coin props="providerOne" />
        <Coin props="providerTwo" />
        <Coin props="providerThree" />
      </div>
    </div>
  );
};

View.propTypes = {
  props: PropTypes.string.isRequired,
};

export default View;
