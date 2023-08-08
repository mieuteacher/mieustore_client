import { Route } from "react-router-dom";
import LazyLoad from "@lazy/lazyLoading";

export default 
<>
    <Route path="information" element={LazyLoad(() => import("./Information"))()}></Route>
</>