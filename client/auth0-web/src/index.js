import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from './profile';

ReactDOM.render(
  <Auth0Provider
    domain="auth0-hack.us.auth0.com"
    clientId="MM8cdEybhypsOfKZCkwrBAFMIzR2Jzef"
    redirectUri={window.location.origin}
  >
  <React.StrictMode>
  <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <row>
        <Profile/>
    <App />
        </row>

    </div>
  </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
