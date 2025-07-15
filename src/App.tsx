import ListGroup from "./components/ListGroup";

function App() {

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


  return <div><ListGroup items={items} heading="Cities" /></div>;
}


export default App;