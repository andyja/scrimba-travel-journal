import React from "react";

function LocationCard(props) {
    return (
        <div className="card">
            <h1>{props.item.title}</h1>
            <img src={props.item.coverImg} className="card--image"/>
        </div>
    )
}

export default LocationCard