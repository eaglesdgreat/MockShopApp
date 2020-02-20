import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect, Router} from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import Shop from './components/ShopPage.jsx';
import Cart from './components/CartPage.jsx'
import LoginPage from './components/LoginPage.jsx'
import alertActions from './components/_actions/alertActions'
import HomePage from './components/HomePage.jsx'
import RegisterPage from './components/RegisterPage.jsx'
import {history} from '/components/_helpers/history'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
        // clear alert on location change
        this.props.clearAlerts();
    });
}
  render() {
    const { alert } = this.props;
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/login" component={LoginPage}/> 
                  </Switch>

                  <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
             </div>
       </BrowserRouter>
      
    );
  }
}
function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

export default connect(mapState, actionCreators)(App);