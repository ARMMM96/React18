import { useState } from "react";
import produce from "immer";


function App() {

  const [customer, setCustomer] = useState({
    name: 'John',
    address: {
      city: 'San Francisco',
      zipCode: 94111
    }
  })


  const handleClick = () => {

    setCustomer({ ...customer, address: { ...customer.address, zipCode: 94112 } })

  }



  const [alertVisible, setAlertVisibility] = useState(false);

  return (<div className="container mt-5">

    <button onClick={handleClick}>Click The button</button>
  </div>);
}


export default App;