import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";


function App() {
  return (
    
    <Router>
      <nav className="menu">
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
	<li>
	  <Link to="/Login">Login</Link>
	</li>
	<li>
	  <Link to="/Register">Register</Link>
	</li>
  </ul>
</nav>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
      {/* <Route component={PageNotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;
