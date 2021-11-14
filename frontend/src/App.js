import NavBar from "./components/NavBar/NavBar";
import {Link, Route, Switch, BrowserRouter, NavLink} from "react-router-dom";
import Man from "./pages/man/man";
import Woman from "./pages/woman/woman";
import Footer from "./components/Footer/footer";
import Catalog from "./pages/Catalog/catalog";
import Main from "./pages/main/main";
import React from "react";
import Contact from "./pages/Contacts/contact";
import Uslugi from "./pages/Uslugi/uslugi";
import Lifestyle from "./pages/Lifestyle/lifestyle";
import About from "./pages/About/about";
import Admin from "./admin/admin";
function App() {
  return (
      <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/man" component={Man}/>
                <Route path="/woman" component={Woman}/>
                <Route path="/catalog" component={Catalog}/>
                <Route path="/contacts" component={Contact}/>
                <Route path="/about" component={About}/>
                <Route path="/uslugi" component={Uslugi}/>
                <Route path="/lifestyle" component={Lifestyle}/>
                <Route path="/admin" component={Admin}/>
            </Switch>
          <Footer/>
          </BrowserRouter>

  );
}

export default App;
