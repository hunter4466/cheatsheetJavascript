import React from 'react';
import { useSelector } from 'react-redux';
import Navigator from './components/Logged/navigator';
import Login from './components/Login/login';

const App = () => {
  const userData = useSelector((state) => state.userReducer);
  return (
    <div>
      {!userData ? <Login />
        : <Navigator />}
    </div>
  );
};

export default App;
