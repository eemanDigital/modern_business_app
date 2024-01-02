import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './constants/styles/navbar.scss';
import './constants/styles/outlets.scss';
// import './constants/styles/footer.scss';
import './constants/styles/home.scss';
import './index.scss';
import './constants/styles/trust.scss';
import './constants/styles/aside.scss';
import './constants/styles/packages.scss';
import './constants/styles/description.scss';
import './constants/styles/post_inc.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
