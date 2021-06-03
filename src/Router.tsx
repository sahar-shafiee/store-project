// node libraries
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// components
import Dashboard from './pages/dashboard';
import NotFound from './pages/notFound';
import Products from './pages/products';
import Add from './containers/products/add';
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
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
