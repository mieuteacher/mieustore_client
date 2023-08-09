import React, { useState, useContext} from 'react'
import './index.scss'

import AutoCompleteCustom from '@components/commons/AutoComplete';
import { RootContext } from '../../App';

export default function Navbar({t}) {
    const {cartStore} = useContext(RootContext);


    const [menu, setMenu] = useState([
    "stuffedAnimal", "toyModel", "clothes", "gameConsole"
    ]);


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
