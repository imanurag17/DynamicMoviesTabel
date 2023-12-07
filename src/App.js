import './App.css';
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import Counters from './components/counters'
import Navbar from './components/navbar';
import Movies from './components/movies';
import Customers from './components/customers';
import Rental from './components/rental';
import NotFound from './components/notFound';
import NavBar from './components/navigationBar';
import MovieForm from './components/movieForm';
import LoginFrom from './components/loginForm';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counter[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counter[index] = { ...counter }
    counters[index].value--
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route path='/login' component={LoginFrom}/>
          <Route path='/movies/:id' component={MovieForm}/>
          <Route path='/movies' component={Movies} />
          <Route path='/customers' component={Customers} />
          <Route path='/rental' component={Rental} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' exact to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
