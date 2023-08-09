import { createContext } from 'react'
import "./main.scss";
import { Routes, Route } from "react-router-dom";
import {useEffect } from 'react';

/* Route Config */
import AuthRoute from "@pages/auths/Route";
import HomeRoute from "@pages/home/Route";
import { useDispatch, useSelector} from 'react-redux';
import actions from './stores/actions';

/* Context Config */
export const RootContext = createContext();

import NotFound from '@components/NotFound';

import api from '@api'
function App() {
  const store = useSelector(store => store)
  const dispatch = useDispatch();

  /* Gửi token lên server và lưu thông tin vào user store */
  useEffect(() => {
    dispatch(actions.userActions.authenToken())
  }, [])


  useEffect(() => {
    if(!store.userStore.data) {
      return
    }
    console.log("đã vào")
    api.purchase.findCart(store.userStore.data?.id)
    .then(res => {
      if(res.status == 200) {
        dispatch(actions.cartActions.setCartData(res.data.data))
      }else {
        alert(res.data.message)
      }
    })
    .catch(err => {
      alert("sập!")
    })
  }, [store.userStore.data])


  return (
    <RootContext.Provider value={
      {
        userStore: store.userStore,
        cartStore: store.cartStore,
        dispatch,
        userActions: actions.userActions,
        cartActions: actions.cartActions
      }
    }>
      <Routes>
        {/* Auth Routing */}
        {AuthRoute}
        {/* Home */}
        {HomeRoute}
        <Route path="*"  element={<NotFound/>}></Route>
      </Routes>
    </RootContext.Provider>
  );
}

export default App;
