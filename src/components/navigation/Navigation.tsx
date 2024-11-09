import {JSX} from "react";
import logo from "../../assets/images/logo.png"
const Navigation=():JSX.Element=>{
    return (
        <nav className={"navbar navbar-dark bg-dark"}>
            <div className="container-fluid">
                <img src={logo} alt="logo"  width="50" height="50" className={"d-inline-block align-text-top"}/>
                <div className={"me-5 d-flex flex-column align-items-end"}>
                    <span className={"text-white fw-bold"}>Detección Automática de Violencia en Videos Usando Transformers y ResNet18 - Grupo 1</span>
                    <span className={"text-white fw-bold"}>Curso de Redes Neuronales y Aprendizaje Profundo </span>
                    <span className={"text-white fw-bold"}>Maestría en Inteligencia Artificial - UNI </span>
                </div>

            </div>
        </nav>
    )
}
export default Navigation;
