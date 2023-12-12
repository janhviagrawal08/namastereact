/*const heading = React.createElement("h1", {
    id: "headin"
}, "hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); */

const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {}, "hello from nested elements")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);