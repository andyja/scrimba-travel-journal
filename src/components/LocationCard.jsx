import React from "react";

function LocationCard(props) {
    return (
        <div className="card">
            <img src={props.item.coverImg} className="card--image"/>
            <h1 className="card--title">{props.item.title}</h1>
        </div>
    )
}

export default LocationCard