import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import BLSAPI from './components/BLSAPI';
import ApiCall from './components/ApiCall';
import Footer from './components/Footer';
import {CssBaseline} from '@material-ui/core';


function App() {
  return (
    <div className="App">
      {/* create css base format */}
      <CssBaseline />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/BLS-API" component={BLSAPI} />
          <Route path="/:category/:subcategories/:data" component={ApiCall} />
        </Switch>
        <Footer />
      </Router>  
    </div>
  );
}

export default App;
