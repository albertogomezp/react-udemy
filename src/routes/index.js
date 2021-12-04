import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../views/Home"
import Login from "../views/Login"
import NotFound from "../views/NotFound"
import Search from "../views/Search"
export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Login" >
                    <Login />
                </Route>
                <Route path="/Search" >
                    <Search />
                </Route>
                <Route >
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )

}