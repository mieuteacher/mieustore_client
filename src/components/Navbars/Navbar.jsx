import React, {useEffect, useState} from 'react'
import './index.scss'

import AutoCompleteCustom from '@components/commons/AutoComplete';
import api from '@api'
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../stores/actions';
export default function Navbar({t, userStore}) {
    const cartStore = useSelector(store => store.cartStore)
    const dispatch = useDispatch();
    const [menu, setMenu] = useState([
    "stuffedAnimal", "toyModel", "clothes", "gameConsole"
    ]);

    useEffect(() => {
      if(!userStore.data) {
        return
      }
      api.purchase.findCart(userStore.data?.id)
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
    }, [userStore.data])
  return (
    <nav>
    <div className="nav_content">
      <div className="left_content">
        {/* Logo */}
        <i title={t('brand')} className="logo fa-solid fa-cat"></i>
      </div>
      <div className="middle_content">
          {
            menu.map((item, index) => (
              <div className="item" key={Date.now() * Math.random()}>{t(item)}</div>
            ))
          }
      </div>
      <div className="right_content">
        {/* Search */}
          <AutoCompleteCustom t={t}/>
        {/* Wishlist */}
        <i className="item item_center fa-regular fa-heart"></i>
        {/* Cart */}
        <i className="item fa-brands fa-opencart"></i> {cartStore.data?.cart_details.reduce((result, next) => {
          return result += next.quantity
        }, 0)}
      </div>
    </div>
  </nav>
  )
}
