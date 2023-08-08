import "./register.scss"
import React, { useRef, useState } from 'react';
import api from '@api';
import utilValidte from '../../utils/validate';
import { message, Modal } from 'antd'; // thông báo andtd
import Loading from './Loading'
export default function Register() {
  const [loading, setLoading] = useState(false);

  const passwordRef = useRef();

  function validateForm(data) {
    if(data.user_name.value == "") {
      return {
        message: "User Name không được bỏ trống!",
        status: false
      }
    }

    if(data.email.value == "") {
      return {
        message: "Email không được bỏ trống!",
        status: false
      }
    }else {
      return utilValidte.isEmail(data.email.value) ? {
        status: true
      } : {
        message: "Email sai định dạng!",
        status: false
      }
    }
  }

  async function Reister(eventForm) {

    eventForm.preventDefault();

    if (!validateForm(eventForm.target).status) {
      alert(validateForm(eventForm.target).message);
      return
    }

    let newUser = {
      user_name: eventForm.target.user_name.value,
      email: eventForm.target.email.value,
      first_name: eventForm.target.first_name.value,
      last_name: eventForm.target.last_name.value,
      password: eventForm.target.password.value,
    }

    try {
      setLoading(true);
      let result = await api.users.register(newUser);
      setLoading(false);
      //console.log("result", result)
      if(result.status == 200) {
        Modal.success({
          content: `${result.data.message}, bạn sẽ được chuyển đến login!`,
          onOk: () => {
              window.location.href = "/login";
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
            <form onSubmit={(e) => Reister(e)} className="form_content">
                {/* User Name */}
                <div className="form_input">
                  <input name="user_name" onChange={(e) => {
                    if (e.target.value != "") {
                      e.target.parentNode.classList.add("active");
                    }else {
                      e.target.parentNode.classList.remove("active");
                    }
                  }} type="text" />
                  <span>User name: </span>
                </div>
                {/* Email */}
                <div className="form_input">
                  <input name="email" onChange={(e) => {
                    if (e.target.value != "") {
                      e.target.parentNode.classList.add("active");
                    }else {
                      e.target.parentNode.classList.remove("active");
                    }
                  }} type="email" />
                  <span>Email: </span>
                </div>
                {/* First Name */}
                <div className="form_input">
                  <input name="first_name" onChange={(e) => {
                    if (e.target.value != "") {
                      e.target.parentNode.classList.add("active");
                    }else {
                      e.target.parentNode.classList.remove("active");
                    }
                  }} type="text" />
                  <span>First Name: </span>
                </div>
                {/* Last Name */}
                <div className="form_input">
                  <input name="last_name" onChange={(e) => {
                    if (e.target.value != "") {
                      e.target.parentNode.classList.add("active");
                    }else {
                      e.target.parentNode.classList.remove("active");
                    }
                  }} type="text" />
                  <span>Last Name: </span>
                </div>
                {/* Password */}
                <div className="form_input">
                  <input name="password" ref={passwordRef} onChange={(e) => {
                    if (e.target.value != "") {
                      e.target.parentNode.classList.add("active");
                    }else {
                      e.target.parentNode.classList.remove("active");
                    }
                  }} type="password" />
                  <span>Password: </span>
                </div>
                {/* Re Enter Password */}
                <div className="form_input">
                  <input name="password_again" onChange={(e) => {
                    if (e.target.value != "") {
                      e.target.parentNode.classList.add("active");
                    }else {
                      e.target.parentNode.classList.remove("active");
                    }

                    if(e.target.value != passwordRef.current.value) {
                      if (e.target.value != "") {
                        e.target.style.borderColor = "red";
                      }else {
                        e.target.style.borderColor = "grey";
                      }
                    }else {
                      e.target.style.borderColor = "grey";
                    }
                  }} type="password" />
                  <span>Password Again: </span>
                </div>
                <div className="form_submit">
                  <button type="submit" className="form_submit_btn btn btn-secondary">Register</button>
                </div>
            </form>
          {/* Redirect */}
          <div className="redirect">
            <a href="/login">Bạn đã có tài khoản ? <span style={{textDecoration: "underline", color: "#16bbf7"}}>Login now!</span></a>
          </div>
        </div>
      </div>
      {
        loading ? <Loading></Loading> : <></>
      }
    </>
  )
}
