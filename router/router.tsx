import {createBrowserRouter, redirect} from "react-router-dom";
import Layout from "../src/pages/Layout.tsx";
import Uploader from "../src/pages/uploader/Uploader.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children:[
            {
                path:'', element:<Uploader/>
            }
        ]
    },
    {
        path:'*',
        loader:()=>redirect("/")
    }
]);

export default router;
