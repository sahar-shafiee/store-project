// node libraries
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// components
import Dashboard from './pages/dashboard';
import NotFound from './pages/notFound';
import Products from './pages/products';
import Add from './containers/products/add';
import Details from './containers/products/details';
import AddComments from './containers/products/details/addComments';
/**
 * Router Container
 */
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/products" component={Products} />
        <Route path="/add-products" component={Add} />
        <Route path="/product-details" component={Details} />
        <Route path="/add-comments" component={AddComments} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
