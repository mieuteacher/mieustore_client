import "./home.scss";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from 'react';

import Navbar from '@components/Navbars/Navbar'
import Footer from '@components/Footers/Footer'
import Before_navbar from "@components/Before_navbars/Before_navbar";

import { useTranslation } from "react-i18next";



import { RootContext } from '../../App'


function Home() {
  const {userStore, dispatch, userActions} = useContext(RootContext);
  const { t } = useTranslation();
  
  useEffect(() => {
    dispatch(userActions.sayHello())
  }, [])
  return (
    <div className="root_page">
      {/* Before Nav */}
      <Before_navbar userStore={userStore} t={t}/>
      {/* Navbar */}
      <Navbar userStore={userStore} t={t}/>
      {/* Body */}
      <section className="body_container">
        <div className="body_container_center">
          <Outlet/>
        </div>
      </section>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Home;
