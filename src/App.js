import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginPage from "./components/pages/loginPage/LoginPage"
import ProfilePage from "./components/pages/profilePage/ProfilePage"
import PrivateRoute from "./components/routing/PrivateRoute"
import AppHeader from "./components/globalLayoutComponents/AppHeader"
import TranslatePage from "./components/pages/translatePage/TranslatePage";

function App() {
  return (
    <div>
        <Router>
            {<AppHeader />}
            <Switch>
                <Route path='/' exact component={LoginPage} />
                <PrivateRoute path='/translate' component={TranslatePage} />
                <PrivateRoute path='/profile' component={ProfilePage} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
