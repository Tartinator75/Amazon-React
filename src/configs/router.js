import react from 'react';
import {Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'
import Home from '../screen/Home'
import ProductId from '../screen/ProductId'
import Cart from '../screen/Cart'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/product/:id" component={ProductId}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    )
}
export default Routes;