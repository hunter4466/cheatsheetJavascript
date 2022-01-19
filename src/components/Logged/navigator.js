import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import View from './views/view';

const Navigator = () => {
  const userData = useSelector((state) => state.userReducer);
  const providerData = useSelector((state) => state.mainReducer);
  const currency = ['BTC', 'ETH', 'XRP'];
  const calculateCurrency = (value) => {
    const currencyChange = 3.90;
    const prov1 = document.getElementById('prov1');
    const prov2 = document.getElementById('prov2');
    const prov3 = document.getElementById('prov3');
    prov1.innerHTML = (value / (currencyChange)) * providerData.providerOne[0].USD;
    prov2.innerHTML = (value / (currencyChange)) * providerData.providerTwo[0].USD;
    prov3.innerHTML = (value / (currencyChange)) * providerData.providerThree[0].USD;
  };
  return (
    <Router>
      <div className="page_holder">
        <h1>{userData ? userData.name : null}</h1>
        <h1>{userData ? userData.lastName : null}</h1>
        <div className="navigator_bar">
          {currency ? currency.map((elm) => (
            <NavLink key={elm} activeClassName="selected_nav_item" className="nav_item" to={`/${elm}`}>{elm}</NavLink>
          )) : null}
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect to={`/${currency[0]}`} />
          </Route>
          {currency ? currency.map((elm) => (
            <Route key={elm} path={`/${elm}`}>
              <View props={elm} />
            </Route>
          )) : null}
        </Switch>
        <div className="footer">
          <h1>Convert</h1>
          <input
            type="number"
            onChange={(e) => {
              calculateCurrency(e.target.value);
            }}
          />
          <h1>Provider 1</h1>
          <h2 id="prov1">0</h2>
          <h1>Provider 2</h1>
          <h2 id="prov2">0</h2>
          <h1>Provider 3</h1>
          <h2 id="prov3">0</h2>
        </div>
      </div>
    </Router>
  );
};

export default Navigator;
