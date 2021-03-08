import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SaveLoginName from "./compenents/pages/SaveLoginName"
import Profile from "./compenents/pages/Profile"
import PrivateRoute from "./compenents/PrivateRoute"
import TranslateComponent from "./compenents/pages/translater/TranslateComponent";

function App() {
  return (
    <div>
        <Router>
            {/*<AppHeader />*/}
            <Switch>
                <Route path='/' exact component={SaveLoginName} />
                <PrivateRoute path='/translate' component={TranslateComponent} />
                <PrivateRoute path='/profile' component={Profile} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
