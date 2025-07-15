import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {


  return <div className="container mt-5">
    <Alert> Hello <span className="text-primary">My World</span>
    </Alert>
    <Button text="Click " onClick={() => console.log("Button Clicked!")} ButtonColor="primary" />
  </div>;
}


export default App;