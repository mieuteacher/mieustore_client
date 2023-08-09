import "./main.scss";
import { Routes, Route } from "react-router-dom";
import {useEffect } from 'react';

/* Route Config */
import AuthRoute from "@pages/auths/Route";
import HomeRoute from "@pages/home/Route";
import { useDispatch } from 'react-redux';
import { userActions } from '@actions/user';

import NotFound from '@components/NotFound'
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.authenToken())
  }, [])
  return (
      <Routes>
        {/* Auth Routing */}
        {AuthRoute}
        {/* Home */}
        {HomeRoute}
        <Route path="*"  element={<NotFound/>}></Route>
      </Routes>
  );
}

export default App;
