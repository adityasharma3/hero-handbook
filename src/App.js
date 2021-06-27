import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Heroes from './components/Heroes/Heroes';

function App() {
  return (
    <div className="App" >
      <Heroes />

      <Sidebar />
      {/* <Heroes /> */}
    </div>
  );
}

export default App;
