import { Route, Navigate } from "react-router-dom";
import LazyLoad from "@lazy/lazyLoading";
import authMiddleware from '../../middlewares/auth';

import { Fragment } from "react";

const ProtectedRoute = (path, element, middleware) => {

    if (!middleware.status) {
      return <Route path={path} element={<Fragment>{middleware.message}</Fragment>} /> 
    }
  
    return <Route path={path} element={element} />;
  };

export default (
    <>
        <Route path="register" element={LazyLoad(() => import("./Register"))()}></Route>
        <Route path="login" element={LazyLoad(() => import("./Login"))()}></Route>
        {
            ProtectedRoute("profile", LazyLoad(() => import("./Info"))(), authMiddleware.isLogin())
        }
        {/* <Route path="profile" element={LazyLoad(() => import("./Info"))()}></Route> */}
    </>
);
