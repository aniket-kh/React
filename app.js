
 import React from "react"
 import ReactDOM from "react-dom/client"

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Am h1 tag"),
        React.createElement("p",{},"Am Paragraph"),
    ]),
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"Nested Child3"),
    React.createElement("p",{},"Nested child4")
    ])
])
//console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
