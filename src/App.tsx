import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";



function App() {

  const [alertVisible, setAlertVisibility] = useState(false);

  return <div className="container mt-5">

    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}

    <Button text="My Button" onClick={() => setAlertVisibility(true)} ButtonColor="primary" />
  </div>;
}


export default App;