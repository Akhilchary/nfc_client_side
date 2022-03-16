import React from "react";
import{
  HashRouter as Router,
  Route,
  Switch
}from "react-router-dom";

import Home from "./Pages/Home/home";
import AboutUs from "./Pages/About Us/aboutus";
import ProductsCust from "./Pages/Product-Customers/productsCust";

import Services from "./Pages/Services/services";
import ContactUs from "./Pages/Contact Us/contactus";
import Careers from "./Pages/Careers/careers";
// import AddContent from "./Pages/Add-content/addContent";
import Login from "./Pages/login/Login";

function App() {
  return (
    <Router>

      <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
          
      <Route path='/aboutus'>
       <AboutUs />
     </Route>

     <Route path='/Customers-products'>
       <ProductsCust />
     </Route>

     <Route path='/Services'>
       <Services />
     </Route>

     <Route path='/ContactUs'>
       <ContactUs />
     </Route>

     <Route path='/Careers'>
       <Careers />
     </Route>

     {/* <Route path='/add-content'>
       <AddContent />
     </Route>
      */}
     <Route path='/login' >
       <Login />
     </Route>
     
      </Switch>
    </Router>
  );
}

export default App;