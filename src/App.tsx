import { useState } from "react";
import produce from "immer";


function App() {

  const [buts, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ])

  const handleClick = () => {
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if (bug) bug.fixed = true;
    }))

  }



  const [alertVisible, setAlertVisibility] = useState(false);

  return (<div className="container mt-5">
    {buts.map(bug => <p key={bug.id} >{bug.title} {bug.fixed ? 'fixed' : 'new'}</p>)}
    <button onClick={handleClick}>Click The button</button>
  </div>);
}


export default App;