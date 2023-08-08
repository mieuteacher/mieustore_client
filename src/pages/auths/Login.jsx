import React, { useEffect, useState } from 'react'
import api from '@api';
import "./register.scss"
import utilValidte from '../../utils/validate';
import { message, Modal } from 'antd'; // thông báo andtd
import Loading from './Loading';

export default function Login() {
  const [loading, setLoading] = useState(false);

  function validateForm(data) {
    if(data.user_name.value == "") {
      return {
        message: "User Name không được bỏ trống!",
        status: false
      }
    }

    return {
      status: true
    }
  }

  async function Login(eventForm) {

    eventForm.preventDefault();

    if (!validateForm(eventForm.target).status) {
      alert(validateForm(eventForm.target).message);
      return
    }

    let user = {
      user_name: eventForm.target.user_name.value,
      password: eventForm.target.password.value,
      type: !utilValidte.isEmail(eventForm.target.email)
    }

    try {
      setLoading(true);
      let result = await api.users.login(user);
      setLoading(false);
      //console.log("result", result)
      if(result.status == 200) {
        localStorage.setItem("token", result.data.token)
        Modal.success({
          content: `${result.data.message}, bạn sẽ được chuyển đến profile!`,
          onOk: () => {
              window.location.href = "/profile";
          },
        });
      }else {
        Modal.error({
          content: `${result.data.message}, vui lòng thử lại!`,
          onOk: () => {
              /* Xử lý tiếp */
          },
        });
      }
    }catch(err) {
      setLoading(false);
      Modal.error({
        content: `Lỗi gọi api`,
        onOk: () => {
            /* Xử lý tiếp */
        },
      });
    }
  }
  return (
    <>
      <div className="register_page">
        <div className="register_form">
          {/* Logo */}
          <div className="logo">
            <i className="fa-solid fa-cat"></i>
            <span>Miêu Store Member</span>
          </div>
          {/* Form */}
          <form onSubmit={(e) => Login(e)} className="form_content">
            {/* User Name Or Email */}
            <div className="form_input">
              <input name='user_name' onChange={(e) => {
                if (e.target.value != "") {
                  e.target.parentNode.classList.add("active");
                } else {
                  e.target.parentNode.classList.remove("active");
                }
              }} type="text" />
              <span>User name or Email: </span>
            </div>
            {/* Password */}
            <div className="form_input">
              <input name='password' onChange={(e) => {
                if (e.target.value != "") {
                  e.target.parentNode.classList.add("active");
                } else {
                  e.target.parentNode.classList.remove("active");
                }
              }} type="password" />
              <span>Password: </span>
            </div>
            <div className="form_submit">
              <button type="submit" className="form_submit_btn btn btn-secondary">Login</button>
            </div>
          </form>
          {/* Redirect */}
          <div className="redirect">
            <a href="/register">Bạn chưa có tài khoản ? <span style={{ textDecoration: "underline", color: "#16bbf7" }}>Register now!</span></a>
          </div>
        </div>
      </div>
      {
        loading ? <Loading></Loading> : <></>
      }
    </>
  )
}
