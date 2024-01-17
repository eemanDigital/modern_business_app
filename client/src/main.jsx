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
import './constants/styles/company.scss';
import './constants/styles/post_inc.scss';
import './constants/styles/partnership.scss';
import './constants/styles/business.scss';
import './constants/styles/ngo.scss';
import './constants/styles/blog.scss';
import './constants/styles/blogContent.scss';
import './constants/styles/write.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
