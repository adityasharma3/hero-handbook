import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home/Home';
import Heroes from './components/Heroes/Heroes';
import { Villains } from './components/Villains/Villains';
import { Search } from './components/Search/Search';
import { ViewCharacter } from './components/ViewCharacter/ViewCharacter';

function App(props) {
  return (
    <div className="App" >

      <Router>
        <Switch>
          <Route path="/" exact component={Home} id="home" />
          <Route path="/heroes" exact component={Heroes} id="heroes"/>
          <Route path="/villains" exact component={Villains} id="villains"/>
          <Route path="/search" exact component={Search} id="search"/>

          <Route 
            path='/viewCharacter' 
            component={() => <ViewCharacter charcter={props} />} 
            id="viewcharacter"
          />
          
        </Switch>
      </Router>

      <Sidebar />
    </div>
  );
}

export default App;
