import { Route } from "react-router-dom";
import LazyLoad from "@lazy/lazyLoading";
import authMiddleware from '../../middlewares/auth';

import ProfileRoute from  './profiles/Route';
import Profile from './Info'
const ProtectedProfile = (path, Element, middleware) => {
    if (!middleware.status) {
      return <Route path={path} element={LazyLoad(() => import("./Page404"), {message: middleware.message})()} /> 
    }

    return <Route path={path} element={<Element></Element>}>
            {ProfileRoute}
          </Route>
};


const ProtectedRouteRL = (path, element, middleware) => {
  if (middleware.status) {
    return <Route path={path} element={LazyLoad(() => import("./Page404"), {message: middleware.message, profile: true})()} /> 
  }

  return <Route path={path} element={element} />;
};

export default (
    <>
        {
            ProtectedRouteRL("register", LazyLoad(() => import("./Register"))(), authMiddleware.isLogin())
        }
        {
            ProtectedRouteRL("login", LazyLoad(() => import("./Login"))(), authMiddleware.isLogin())
        }
        {
            ProtectedProfile("profile", Profile, authMiddleware.isLogin())
        }
    </>
);
