import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  // Navigate,
} from 'react-router-dom';
// import NavBar from "./components/NavBar";
import Layout from './components/Layout';
// import GetStarted from './components/GetStarted';
// import Support from './components/Support';
// import GetTools from './components/GetTools';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
// import Services from './pages/Services';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Blog from './pages/Blog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Write from './pages/Write';
import Edit from './pages/Edit';
import Company from './pages/Company';
import Business from './pages/Business';
import Ngo from './pages/Ngo';
import Partnership from './pages/Partnership';
import WebDev from './pages/webDev';
import BlogDetails from './pages/BlogDetails';
import NotFound from './components/NotFound';
import ContactForm from './components/ContactUs';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='about-us' element={<AboutUs />} />

        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogDetails />} />

        <Route path='blog/write' element={<Write />} />
        <Route path='blog/:id/edit' element={<Edit />} />

        <Route path='contact-us' element={<ContactForm />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='company' element={<Company />} />
        <Route path='business' element={<Business />} />
        <Route path='partnership' element={<Partnership />} />
        <Route path='ngo' element={<Ngo />} />
        <Route path='webDev' element={<WebDev />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
