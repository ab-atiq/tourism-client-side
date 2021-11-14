import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import LogIn from './Components/LogIn/LogIn';
import Registration from './Components/Registration/Registration';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Places from './Components/Places/Places';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';
import AddPlace from './Components/AddPlace/AddPlace';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import BookPlace from './Components/BookPlace/BookPlace';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/places'>
              <Places></Places>
            </Route>
            <PrivateRoute path='/places/:single_place'>
              <PlaceDetails></PlaceDetails>
            </PrivateRoute>
            <PrivateRoute exact path='/bookPlace'>
              <BookPlace></BookPlace>
            </PrivateRoute>
            <PrivateRoute path='/bookPlace/:accommodationId'>
              <BookPlace></BookPlace>
            </PrivateRoute>
            <PrivateRoute path='/addplace'>
              <AddPlace></AddPlace>
            </PrivateRoute>
            <PrivateRoute path='/manageOrders'>
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path='/logIn'>
              <LogIn></LogIn>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
