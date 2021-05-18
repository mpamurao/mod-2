import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import {CssBaseline} from '@material-ui/core';


function App() {
  return (
    <div className="App">
      {/* create css base format */}
      <CssBaseline />
      <Router>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />

        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
