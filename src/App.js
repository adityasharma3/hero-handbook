import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home/Home';
import Heroes from './components/Heroes/Heroes';
import { Villains } from './components/Villains/Villains';
import { Search } from './components/Search/Search';


function App() {
  return (
    <div className="App" >

      <Router>
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path="/heroes" exact component={Heroes} />
          <Route path="/villains" exact component={Villains} />
          <Route path="/search" exact component={Search} />
        </Switch>
      </Router>
      
      <Sidebar />
    </div>
  );
}

export default App;
