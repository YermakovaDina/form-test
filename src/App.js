import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Balance from './components/Balance/Balance';
import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
//import Summary from './components/Summary/Summary';
// import Hero from './components/Hero/Hero';
import { Suspense } from 'react';
import HomePage from './components/Homepage/Homepage';
import NotFoundView from './components/NotFoundView/NotFoundView';
import AppBar from './components/AppBar/AppBar';
import ExpenseIncome from './components/ExpenseIncome/ExpenseIncome/ExpenseIncome';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <AppBar />
        <Container>
          <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PublicRoute path="/authentication" restricted>
              <RegistrationForm />
            </PublicRoute>
            <PrivateRoute path="/expense">
              <ExpenseIncome />
            </PrivateRoute>
            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Container>
        <ToastContainer autoClose={3000} />
      </Suspense>
    </>
  );
}

export default App;
