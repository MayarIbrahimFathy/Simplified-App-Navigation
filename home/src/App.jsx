
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './component/Home/Home';
import Layout from './component/Layout/Layout';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Portofolio from './component/Portofolio/Portofolio';
import Notfound from './component/Notfound/Notfound';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default App;

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path :"/contact", element :<Contact/>
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path :"/portfolio", element :<Portofolio/>
      },

      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

function App() {
  return <div className="App">
    
    
    <RouterProvider router = {routers}></RouterProvider>
  
    </div>;
}