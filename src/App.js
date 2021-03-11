import './App.css';
import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
import Register from './Register/Register';
import Task2 from "./Task2/Task2";
function App() {
  return (
    <div className="App">
  <Router>
    <Switch>
      <Route  path="/home">
        <div className="align-center">
        Hello World
        </div>
        <Link className="link" to="/task2">Click Here For Counter TASK</Link>
      </Route>
      <Route  exact path="/">
        <Register></Register>
      </Route>
      <Route  exact path="/task2">
        <Task2></Task2>
      </Route>
    </Switch>
  </Router>
    </div>
  );
}

export default App;
