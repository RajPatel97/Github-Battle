import * as React from "react";
import * as ReactDOM from "react-dom";
import Popular from "./components/Popular";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Popular />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
