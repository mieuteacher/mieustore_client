import React, {Fragment, useState} from 'react'
import "./index.scss"
export default function Before_navbar({t, userStore}) {
    const [feature, setFeature] = useState([
        "findAStore", "help", "signIn"
    ])
  return (
    <section className="before_nav">
      <div className="before_nav_content">
        <h1 className="brand_name">{t("brand")}</h1>
        <div className="feature">
            {
              feature.map((item, index) => (
                <Fragment key={Date.now() * Math.random()}>
                  <span className="feature_item">{t(item)}</span>
                  {index == feature.length - 1 ? "" : <div className="feature_item_center">|</div>}
                </Fragment>
              ))
            }
        </div>
      </div>
    </section>
  )
}
