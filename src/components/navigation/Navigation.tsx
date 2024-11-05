import {JSX} from "react";
import logo from "../../assets/images/logo.png"
const Navigation=():JSX.Element=>{
    return (
        <nav className={"navbar navbar-dark bg-dark"}>
            <div className="container-fluid">
                <img src={logo} alt="logo"  width="50" height="50" className={"d-inline-block align-text-top"}/>
                <span className={"text-white"}>Grupo 1</span>
            </div>
        </nav>
    )
}
export default Navigation;
