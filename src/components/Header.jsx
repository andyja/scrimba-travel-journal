import React from "react"

export default function Header() {
    const date = new Date();
    const hours = date.getHours();
    let day = date.getDay();
    let timeOfDay
    let dayOfWeek
    if (hours < 12) {
        timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "evening";
    }
    return (
        <div>
            <header>{`good ${timeOfDay}, welcome to andy's travel journal`}</header>
        </div>
    )
}