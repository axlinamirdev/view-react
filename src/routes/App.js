import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Leads from "../presentacions/Leads/Home"
import Dashboard from "../presentacions/Dashboard/Home"
import HomeStore from "../presentacions/Store/Home"
import CreatedStore from "../presentacions/Store/Created"
import EditStore from "../presentacions/Store/Edited"
import HomeMap from "../presentacions/Map/HomeMap"
import HomeBanner from "../presentacions/Banner/Home"
import Login from "../presentacions/Login/Login"
import Blog from "../presentacions/Blog/Home"

import HomeIwanaCash from "../presentacions/Iwanacash/Home"
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'react-toastify/dist/ReactToastify.css'
//import "../assets/css/style.css"
import "../assets/css/iwana-cash/template.css"
import "../assets/css/iwana-cash/home.css"
  
function App() {
  
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/leads" component={Leads} />
            <Route exact path="/tienda" component={HomeStore} />
            <Route exact path="/tienda/crear" component={CreatedStore} />
            <Route exact path="/tienda/:slug" component={EditStore} />
            <Route exact path="/mapa" component={HomeMap} />
            <Route exact path="/banner/:typeBanner" component={HomeBanner} />
            <Route exact path="/blog" component={Blog} />

            <Route exact path="/iwana-cash" component={HomeIwanaCash} />
        </Switch>
      </Router>
    );
  }
  
  export default App;
  