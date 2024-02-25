import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
// import NavBar from "./components/NavBar";
import Layout from './components/Layout';
// import GetStarted from './components/GetStarted';
// import Support from './components/Support';
// import GetTools from './components/GetTools';
import Contact from './pages/Contact';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
// import Services from './pages/Services';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Blog from './pages/Blog';
// import Tools from './pages/Tools';
import Write from './pages/Write';
import Edit from './pages/Edit';
import Company from './pages/Company';
import Business from './pages/Business';
import Ngo from './pages/Ngo';
import Partnership from './pages/Partnership';
import WebDev from './pages/webDev';
import BlogDetails from './pages/BlogDetails';
import { useAuthContext } from './hooks/useAuthContext';
import NotFound from './components/NotFound';
// import ScrollToTop from './components/ScrollToTop';

function App() {
  const { user } = useAuthContext();
  console.log('user', user);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}>
          {/* <Route index element={<GetStarted />} /> */}
          {/* <Route path='support' element={<Support />} /> */}
          {/* <Route path='get-tools' element={<GetTools />} /> */}
        </Route>
        <Route path='about-us' element={<AboutUs />} />
        {/* <Route path='services' element={<Services />} /> */}
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogDetails />} />
        {/* 
        <Route
          path='blog/write'
          element={user ? <Write /> : <Navigate to='/login' />}
        /> */}
        <Route path='blog/write' element={<Write />} />
        <Route path='blog/:id/edit' element={<Edit />} />

        {/* <Route path='tools' element={<Tools />} /> */}
        <Route path='contact-us' element={<Contact />} />
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
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default App;
