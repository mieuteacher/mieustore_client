import "./home.scss";
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';

import Navbar from '@components/Navbars/Navbar'
import Footer from '@components/Footers/Footer'
import Before_navbar from "@components/Before_navbars/Before_navbar";

import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@actions/user';

function Home() {
  const store = useSelector(store => store)
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.authenToken())
  }, [])
  return (
    <div className="root_page">
      {/* Before Nav */}
      <Before_navbar userStore={store.userStore} t={t}/>
      {/* Navbar */}
      <Navbar userStore={store.userStore} t={t}/>
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
