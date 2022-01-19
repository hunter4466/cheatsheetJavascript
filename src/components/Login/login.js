import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reduxActions } from '../../redux/app/app';

const Login = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const clickSubmitHandler = () => {
    dispatch(reduxActions.storeUserInfo(formData));
  };

  const onChangeListener = (type, args) => {
    const newObj = formData;
    newObj[type] = args;
    setFormData(newObj);
  };
  return (
    <div className="">
      <h1>Welcome!</h1>
      <input onChange={(e) => { onChangeListener('name', e.target.value); }} placeholder="Name" type="Text" />
      <input onChange={(e) => { onChangeListener('lastName', e.target.value); }} placeholder="Last Name" type="Text" />
      <input onChange={(e) => { onChangeListener('email', e.target.value); }} placeholder="E-mail" type="Email" />
      <input onChange={(e) => { onChangeListener('phoneNumber', e.target.value); }} placeholder="Phone Number" max="10" type="Text" />
      <button type="button" onClick={() => { clickSubmitHandler(); }}>Submit</button>
    </div>
  );
};
export default Login;
