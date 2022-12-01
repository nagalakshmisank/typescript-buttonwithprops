import './index.css';
import Button from "./ButtonComponent";
import React from 'react';
function App() {
    return (React.createElement("div", { className: 'wrapper' },
        React.createElement("h1", null, "Welcome"),
        React.createElement("h3", null, "Please click on button to see alert"),
        React.createElement(Button, { border: "dashed", color: "pink", height: "250px", onClick: () => alert("You clicked on the pink circle!"), radius: "50%", width: "250px", children: "pink circle!" })));
}
export default App;
