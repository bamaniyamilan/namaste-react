import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id : "child"},
        [React.createElement("h1",{},"Namaste React Course 🚀"),
            React.createElement("h2",{},"I am h2 tag"),
            React.createElement("p",{},"Hello i am paragraph in react")
        ]
    )
);


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log("Milan");