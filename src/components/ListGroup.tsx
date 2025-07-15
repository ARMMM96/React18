import { MouseEvent } from "react";

function ListGroup() {

    let items = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose"

    ];

    const handleClick = (event: MouseEvent) => {
        console.log(event);
    };

    return (
        <>
            <h1>List </h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item" key={item} onClick={handleClick}>{item} </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup