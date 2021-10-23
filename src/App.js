import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import UserDetails from './UserDetails';
import TransferMoney from './TranserMoney';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Customer from './Customer';
import Transaction from './Transaction';

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
          <Switch>
          <Route exact path='/' component={ Section } />
          <Route exact path='/home' component={ Section } />
            <Route exact path='/customer' component={ Customer } />
            <Route exact path='/transfer' component={ TransferMoney } />
            <Route exact path='/transaction' component={ Transaction } />
            <Route exact path='/customer/:name' component={ UserDetails }/>
          </Switch>
      <Footer />
    </div>
    </Router>
  );
}


export default App;
