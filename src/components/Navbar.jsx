import "../assets/css/navbarFooter.css";
import { NavLink } from "react-router-dom";

import icon from '../assets/img/icon-pizza-2.png'
import { useOperationsContext } from "../context/OperationsContext";




export default function Navbar() {

    const activeLink = ({ isActive }) => (isActive ? 'active' : 'undefined')
   
    const {FormatCoin, total} = useOperationsContext ()
    return (

        <nav>
            <div className=" d-flex ">
                <div className="p-1 flex-grow-1 icon">
                    <img src={icon} alt="pizza" width={70} />
                </div>
                <div className="p-1 navHom">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/" >🍕Pizzeria Mamma Mia!!</NavLink>
                </div>
                <div className="p-1 navHom car">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/Car" >🛒{FormatCoin(total)}</NavLink>
                </div>
            </div>
        </nav>
    );
}
