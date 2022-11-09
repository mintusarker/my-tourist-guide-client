import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blog/Blogs";
import ViewDetails from "../../Pages/Details/ViewDetails";
import Home from "../../Pages/Home/Home/Home";
import AllService from "../../Pages/Home/Service/AllService";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
     {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path: '/',
                element : <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path : '/blog',
                element : <Blogs></Blogs>
            },
            {
                path : '/allService',
                element: <AllService></AllService>
            },
            {
                path : '/detail/:id',
                element : <ViewDetails></ViewDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            }
        ]
     },

     {
        path: '*',
        element: <div className='text-center text-warning mt-5 pt-5'>
            <h3> Ops!! Page Not found: 4o4</h3> <p>You provide wrong link .</p>
        </div>
    }
])


export default router;