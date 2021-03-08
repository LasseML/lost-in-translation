import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SaveLoginName from "./compenents/pages/SaveLoginName"
import TempT from "./compenents/pages/TempT"
import Profile from "./compenents/pages/Profile"
import PrivateRoute from "./compenents/PrivateRoute"

function App() {
  return (
    <div>
        <Router>
            {/*<AppHeader />*/}
            <Switch>
                <Route path='/' exact component={SaveLoginName} />
                <PrivateRoute path='/translate' component={TempT} />
                <PrivateRoute path='/profile' component={Profile} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
