import "../assets/css/home.css";
import React from "react";

import Carousel from "../components/Carousel";

import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import ButtonAdd from "../components/ButtonAdd";

export default function Home() {

    const {pizzas } = useUserContext();
    const navigate = useNavigate ();

        
    return(
        <div >
        <Carousel/>
        <div className="home" >
            {pizzas.map(item =>(
                <div className="row-cols-1 row-cols-md-1 " key={item.id} >
                    <div className="col">
                        <div className="card h-100">
                            <img src={item.img} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <ul className="card-text">
                                    <li>
                                        🍕{item.ingredients[0]}
                                    </li>
                                    <li>
                                        🍕{item.ingredients[1]}
                                    </li>
                                    <li>
                                        🍕{item.ingredients[2]}
                                    </li>
                                    <li>
                                        🍕{item.ingredients[3]}
                                    </li>
                                </ul>
                            </div>
                            <hr />
                            <div className="card-footer" >
                                <h5 className="text-muted">$ {item.price}</h5>
                            <div className="buttonHome">
                                <button className="btn btn-primary" onClick={() => {  
                                    navigate(`/DetallePizza/${item.id}`);
                                }}>Ver más 👀</button>
                                <ButtonAdd idPizza={item.id} />
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
            </div>
        
    )
}