import { Route } from "react-router-dom";
import LazyLoad from "@lazy/lazyLoading";
import ProductRoute from '@pages/products/Route'
import Home from './Home'
import Cart from '../carts/Cart'
export default (
    <Route path="/" element={<Home />}>
      {ProductRoute}
      <Route path="carts" element={<Cart></Cart>}></Route>
    </Route>
);
