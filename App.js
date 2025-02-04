


const parent = React.createElement("h1",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"60L package"),
        React.createElement("h2",{},"60L package"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"60L package"),
        React.createElement("h2",{},"60L package"),
    ]),
]);





   const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);

