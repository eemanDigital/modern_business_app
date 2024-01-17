import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
// import NavBar from "./components/NavBar";
import Layout from './components/Layout';
import GetStarted from './components/GetStarted';
import Support from './components/Support';
import GetTools from './components/GetTools';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Blog from './pages/Blog';
import Tools from './pages/Tools';
import Write from './pages/Write';
import Company from './pages/sub-pages/Company';
import Business from './pages/sub-pages/Business';
import Ngo from './pages/sub-pages/Ngo';
import Partnership from './pages/sub-pages/Partnership';
import WebDev from './pages/sub-pages/webDev';
import BlogDetails from './pages/sub-pages/BlogDetails';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}>
          <Route index element={<GetStarted />} />
          <Route path='support' element={<Support />} />
          <Route path='get-tools' element={<GetTools />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogDetails />} />
        <Route path='blog/write' element={<Write />} />

        <Route path='tools' element={<Tools />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='company' element={<Company />} />
        <Route path='business' element={<Business />} />
        <Route path='partnership' element={<Partnership />} />
        <Route path='ngo' element={<Ngo />} />
        <Route path='webDev' element={<WebDev />} />
      </Route>
    )
  );
  return (
    <div className=' app container-fluid'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
