import React from "react";
import { useNavigate } from "react-router-dom";

function Products ({src,title,description,prix}) {
   const navigate = useNavigate()
   return (
    <div className="container mt-4 ">
        <div className="card-body" style={{ width: "24rem", margin: "auto" }} >
            <img src={src} alt="image" />
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">Prix : {prix}</p>
            <button className="btn btn-primary" onClick={() => navigate("/")}> Retour a la page d'acceuille  </button>
        </div>
    </div>
   )

}

export default Products