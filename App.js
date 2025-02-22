// const heading = React.createElement("h1", {}, "Meow Meow from Billi! :)");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
