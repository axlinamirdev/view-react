import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import HomeIwanaCash from "../presentacions/Iwanacash/Home"
import DetailStore from "../presentacions/Iwanacash/DetailStore"
import ExtensionChrome from "../presentacions/Iwanacash/ExtensionChrome"
import CatalogyStore from "../presentacions/Iwanacash/CatalogyStore"
import 'bootstrap/dist/css/bootstrap.min.css'

import "../assets/css/iwana-cash/template.css"
import "../assets/css/iwana-cash/home.css"
import "../assets/css/iwana-cash/store.css"
import "../assets/css/iwana-cash/extension.css"
import "../assets/css/iwana-cash/catalogy.css"
  
function App() {
  
    return (
      <Router>
        <Switch>

            <Route exact path="/" component={HomeIwanaCash} />
            <Route exact path="/detalle/tienda" component={DetailStore} />
            <Route exact path="/extension" component={ExtensionChrome} />
            <Route exact path="/catalogo" component={CatalogyStore} />
            
            
        </Switch>
      </Router>
    );
  }
  
  export default App;
  
