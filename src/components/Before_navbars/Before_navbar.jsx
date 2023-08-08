import React, { Fragment, useState } from 'react'
import "./index.scss"
export default function Before_navbar({ t, userStore }) {
  const [feature, setFeature] = useState([
    "findAStore", "help", "signIn"
  ])
  return (
    <section className="before_nav">
      <div className="before_nav_content">
        <h1 className="brand_name">{t("brand")}</h1>
        <div className="feature">
          {
            feature.map((item, index) => {
              if (item == "signIn") {
                return userStore.data
                  ? 
                  <div  key={Date.now() * Math.random()} onClick={() => {
                    window.location.href = "/profile"
                  }} className='user_info'>
                    <span>{`Hi, ${userStore.data.first_name} ${userStore.data.last_name}`}</span>
                    <img src={`${process.env.REACT_APP_SERVER_HOST}${userStore.data.avatar}`} />
                  </div>
                  : 
                  <span key={Date.now() * Math.random()} onClick={() => {
                    window.location.href = "/login"
                  }} className="feature_item">{t(item)}{index == feature.length - 1 ? "" : <div className="feature_item_center">|</div>}</span>
                    
              } else {
                return (
                  <Fragment key={Date.now() * Math.random()}>
                    <span className="feature_item">{t(item)}</span>
                    {index == feature.length - 1 ? "" : <div className="feature_item_center">|</div>}
                  </Fragment>
                )
              }
            })
          }
        </div>
      </div>
    </section>
  )
}
