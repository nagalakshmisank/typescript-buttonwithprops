import './index.css';
import Button from "./ButtonComponent";
import React from 'react'; 

function App() {
  return (
    <div className='wrapper'>
      <h1>Welcome</h1>
      <h3>Please click on button to see alert</h3>
      <Button 
        border="dashed"
        color="pink"
        height = "250px"
        onClick={() => alert("You clicked on the pink circle!")}
        radius = "50%"
        width = "250px"
        children = "pink circle!"
      />
    </div>
  );
}

export default App;