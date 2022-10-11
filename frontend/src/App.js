import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SearchScreen from './screens/SearchScreen';
import Header from './components/Header';
import CartChoiceScreen from './screens/CartChoiceScreen';
import ProfileChoiceScreen from './screens/ProfileChoiceScreen';
import AdminChoiceScreen from './screens/AdminChoiceScreen';
import AboutusScreen from './screens/AboutusScreen';
import NewsScreen from './screens/NewsScreen';
import ContactScreen from './screens/ContactScreen';
import ProvacypolicyScreen from './screens/PrivacypolicyScreen';
import ProductsScreen from './screens/Products';
import PricelistScreen from './screens/PricelistScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <main>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/products" component={ProductsScreen}></Route>
          <Route path="/news" component={NewsScreen}></Route>
          <Route path="/contact" component={ContactScreen}></Route>
          <Route path="/aboutus" component={AboutusScreen}></Route>
          <Route path="/privacypolicy" component={ProvacypolicyScreen}></Route>
          <Route path="/pricelist" component={PricelistScreen}></Route>
          <Route path="/cartchoice" component={CartChoiceScreen}></Route>
          <Route path="/profilechoice" component={ProfileChoiceScreen}></Route>
          <Route path="/adminchoice" component={AdminChoiceScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/productedit" component={ProductEditScreen}></Route>
          <Route path="/productlist" component={ProductListScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route path="/search/name/:name?" component={SearchScreen} exact></Route>
          <Route path="/search/category/:category" component={SearchScreen} exact></Route>
          <Route path="/search/category/:category/name/:name" component={SearchScreen} exact></Route>
          <Route path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order" component={SearchScreen} exact></Route>
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          <Route path="/productlist" component={ProductListScreen}></Route>
          <AdminRoute path="/orderlist" component={OrderListScreen}></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute path="/user/:id/edit" component={UserEditScreen}></AdminRoute>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">..:@2022 homestudio-szyciehaft.pl:..
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;