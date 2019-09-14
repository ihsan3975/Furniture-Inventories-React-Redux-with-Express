import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Header from "./Header";
// import HeaderHome from "./HeaderHome";
import Logout from "./Logout";
import HomePage from "./HomePage";
import ListProduct from "./ListProduct";
import ListProductHome from "./ListProductHome";
import AddProduct from "./AddProduct";
import Login from "./Login";
import EditProduct from "./EditProduct";
import Register from "./Register";
import ListCategory from './CategoriesList'
import NotFoundPage from './NotFoundPage'
import EditCategory from './EditCategory'
import AddCategory from './AddCategory'
// import notFoundPage from './NotFoundPage'
import Query from "./Query";

import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";
  return (
    <BrowserRouter>
      {/* <HeaderHome /> */}
      <Route exact path={'/'} render={() => {
        return window.location.replace('/home')
      }}/>
    
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/home" component={ListProductHome} />

      <Route exact path="/category" component={Header} />
      <Route exact path="/category" exact component={ListCategory} />
      
      <Route exact path="/products" component={Header} />
      <Route exact path="/products" exact component={ListProduct} />

      <Route exact path="/add" component={Header} />
      <Route exact path="/add" component={AddProduct} />

      <Route exact path="/login" component={HomePage} />
      <Route exact path="/login" component={Login} />

      <Route exact path="/logout" component={Header} />
      <Route exact path="/logout" component={Logout} />

      <Route exact path="/register" component={HomePage} />
      <Route exact path="/register" component={Register} />

      <Route exact path="/edit/:id" component={Header} />
      <Route exact path="/edit/:id" component={EditProduct} />
      
      <Route exact path="/editcategory/:id" component={Header} />
      <Route exact path="/editcategory/:id" component={EditCategory} />
      
      <Route exact path="/addcategory" component={Header} />
      <Route exact path="/addcategory" component={AddCategory} />


      {/* <Route component = {NotFoundPage} /> */}
    </BrowserRouter>
  );
}

export default App;
