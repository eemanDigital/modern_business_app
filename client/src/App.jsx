import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
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
// import Partnership from './pages/Partnership';
import WebDev from './pages/WebDev';
import BlogDetails from './pages/BlogDetails';
import NotFound from './components/NotFound';
import PostImageUpload from './pages/PostImageUpload';
import AdminBoard from './pages/AdminBoard';
import UpdateUser from './pages/UpdateUser';
import ProtectRoute from './components/ProtectRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Pricing from './pages/Pricing';

function App() {
  // scroll animation handler
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,
    });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='about-us' element={<AboutUs />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogDetails />} />
        <Route path='blog/create' element={<Write />} />
        <Route path='blog/:id/edit' element={<Edit />} />
        <Route path='blog/:id/upload' element={<PostImageUpload />} />
        <Route
          path='admin-board'
          element={
            <ProtectRoute>
              <AdminBoard />
            </ProtectRoute>
          }
        />

        <Route path='login' element={<Login />} />
        <Route path='addUser' element={<SignUp />} />
        <Route path='users/:id/edit' element={<UpdateUser />} />
        <Route path='company' element={<Company />} />
        <Route path='business' element={<Business />} />
        {/* <Route path='partnership' element={<Partnership />} /> */}
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
