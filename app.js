// const heading = React.createElement("h1",
//     {id:"headding",xyz:"abc"},"Hello World From React")
//     const root = ReactDOM.createRoot(document.getElementById("root"))
//     root.render(heading)

{/* <div id="parent">
    <div id="child">
        <p>Am h1 tag</p>
    </div>
    <div id ="child2">
    <h1>Nested Child3</h1>
    <p> Nested child4</p>
    </div>
</div> */}
 
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
