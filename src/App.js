import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SubComponent />
        <SubComponent2 />
        <MessageComponent />
        <GreetingComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function SubComponent() {
  return <h1>Hello Component 1</h1>;
}

function SubComponent2() {
  return <h4>Hello Component 2</h4>;
}

const MessageComponent = () => <h2>Hello Message Component</h2>;
const GreetingComponent = () => {
  return <h3>Greeting message</h3>;
};

export default App;
