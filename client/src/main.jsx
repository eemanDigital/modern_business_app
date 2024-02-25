import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthContextProvider } from './context/authContext.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/navbar.scss';
import './styles/home.scss';
import './index.scss';
import './styles/trust.scss';
import './styles/aside.scss';
import './styles/packages.scss';
import './styles/company.scss';
import './styles/post_inc.scss';
import './styles/partnership.scss';
import './styles/business.scss';
import './styles/ngo.scss';
import './styles/blog.scss';
import './styles/blogContent.scss';
import './styles/blogDetails.scss';
import './styles/write.scss';
import './styles/button.scss';
import './styles/footer.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
