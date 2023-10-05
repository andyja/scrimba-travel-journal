import React from "react"

export default function Header() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay
    if (hours < 12) {
        timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "evening";
    }
    return (
        <header className="header--container">
            <i className="fa-solid fa-earth-europe"></i>
            <h4 className="header--text">{`good ${timeOfDay}, welcome to andy's travel journal`}</h4>
        </header>
    )
}
