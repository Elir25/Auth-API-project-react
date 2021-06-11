import './App.css';
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";


function App() {
  return (
    <div className="App">
      <header className="">
        <Home />
        <Login />
        <Register />
      </header>
    </div>
  );
}

export default App;
