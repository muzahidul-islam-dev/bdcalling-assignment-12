import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/shared/Layout";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Testimonial from "../pages/Testimonial";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'portfolio',
                element: <Portfolio />
            },
            {
                path: 'testimonial',
                element: <Testimonial />
            }
            
        ]
    }
])

export default routes;