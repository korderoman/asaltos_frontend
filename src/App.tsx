import './App.scss'
import Navigation from "./components/navigation/Navigation.tsx";
import {RouterProvider} from "react-router-dom";
import router from "../router/router.tsx";

function App() {
  return (
    <>
        <Navigation/>
        <main className={"container"}>
            <RouterProvider router={router} />
        </main>
    </>
  )
}

export default App
