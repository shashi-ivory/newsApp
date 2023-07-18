import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Component } from "react";
import News from "./Components/News";
import NewsItem from "./Components/NewsItem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <News />
      </div>
    );
  }
}

export default App;
