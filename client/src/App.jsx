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
import Posts from './pages/Posts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from './pages/Edit';
import Company from './pages/Company';
import Business from './pages/Business';
import Ngo from './pages/Ngo';
// import Partnership from './pages/Partnership';
import WebDev from './pages/WebDev';
import PostDetails from './pages/PostDetails';
import NotFound from './components/NotFound';
import PostImageUpload from './pages/PostImageUpload';
import AdminBoard from './pages/AdminBoard';
import UpdateUser from './pages/UpdateUser';
import ProtectRoute from './components/ProtectRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Pricing from './pages/Pricing';
import SearchResults from './pages/SearchResult';
import AddPostForm from './pages/AddPostForm';
import UpgradeUser from './pages/UpgradeUser';
import FullCategoryPage from './pages/FullCategoryPage';
import ContactForm from './components/ContactUs';
import AllPosts from './pages/AllPosts';

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
        <Route path='contact-us' element={<ContactForm />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='blog' element={<Posts />} />
        {/* <Route path='blog' element={<AllPosts />} /> */}
        <Route path='blog/:slug/:id' element={<PostDetails />} />
        <Route path='blog/create' element={<AddPostForm />} />
        <Route path='blog/:id/edit' element={<Edit />} />
        <Route path='blog/:id/upload' element={<PostImageUpload />} />
        <Route path='blog/category/:category' element={<FullCategoryPage />} />
        <Route
          path='admin-board'
          element={
            <ProtectRoute>
              <AdminBoard />
            </ProtectRoute>
          }
        />

        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='users/:id/upgrade' element={<UpgradeUser />} />
        <Route path='users/update' element={<UpdateUser />} />
        <Route path='services/company' element={<Company />} />
        <Route path='services/business' element={<Business />} />
        <Route path='/search' element={<SearchResults />} />

        {/* <Route path='partnership' element={<Partnership />} /> */}
        <Route path='services/ngo' element={<Ngo />} />
        <Route path='services/webDev' element={<WebDev />} />
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
