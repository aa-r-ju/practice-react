// const heading = React.createElement("h1", {}, "Meow Meow from Billi! :)");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I am h1 tag"),
    React.createElement("h1", { id: "h2" }, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "I am h1 tag"),
    React.createElement("h1", { id: "h2" }, "I am h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

console.log("checking?");
