import './App.css';
import Carousel from './components/Carousel';
import Navigation from './components/Navigation';
import Trivias from './components/Trivias';
import About from './components/About';
import Trivia from './components/Trivia';
import Flags from './components/Flags';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    // <Carousel />

    // </div>
    <Router>
      <Navigation />
      <Switch>
    <Route exact path="/">
      <Carousel />
    </Route>
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/trivias">
      <Trivias />
    </Route>
    <Route exact path="/trivia/:id">
      <Trivia />
      </Route >
    <Route exact path="/flags">
    <Flags />
    </Route>
    
      </Switch>
    </Router>
  );
}

export default App;
