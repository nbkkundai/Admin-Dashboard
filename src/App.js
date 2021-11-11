import './App.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Topbar from './Components/TopBar/topbar';
import Sidebar from './Components/SideBar/sidebar';
import Dashboard from './Pages/Dashboard'
import TaskViews from './Pages/TaskView'
import Settings from './Pages/Settings'

const App=()=> (
    <>
      <Topbar/>
      <div className='sideContainer'>
        <Router>
          <Sidebar/>
          <div className="pages">
            <Switch>
                <Route path="/" exact><Dashboard/></Route>
                <Route path="/taskview"><TaskViews/></Route>
                <Route path="/settings"><Settings/></Route>
            </Switch>
            </div>
        </Router>
      </div>
    </>
  );

export default App;
