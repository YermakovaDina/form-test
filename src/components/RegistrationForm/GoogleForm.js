import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import s from '../../RegistrationForm/style.module.css';
import googleImg from '../../../static/logos/google_logo.png';

function GoogleForm() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null,
  );
  const handleFailure = result => {
    alert(result);
  };
  const handleLogin = googleData => {
    console.log(googleData);
    // const res = await fetch('/api/google-login', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         token: googleData.tokenId,
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });
    //  const data = await res.json();
    // setLoginData(data);
    // localStorage.setItem('loginData', JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };

  return (
    <div>
      {loginData ? (
        <div>
          <h3>You logged in as{loginData.email}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
          render={renderProps => (
            <button
              type="button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className={s.FormLink}
            >
              <img src={googleImg} alt="" width="17" height="18" />
              Google
            </button>
          )}
        />
      )}
    </div>
  );
}

export default GoogleForm;
