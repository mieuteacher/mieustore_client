import React, {useState} from 'react'
import './information.scss'
import { useSelector } from 'react-redux'
import { Button } from 'antd';
import Loading from '../Loading';
import { message, Modal } from 'antd'; // thông báo andtd
import api from '@api';
export default function Information() {
  const userStore = useSelector(store => store.userStore)
  const [loading, setLoading] = useState(false);

  async function update(eventForm) {

    eventForm.preventDefault();

    let user = {
      first_name: eventForm.target.first_name.value,
      last_name: eventForm.target.last_name.value
    }

    try {
      setLoading(true);
      let result = await api.users.update(userStore.data?.id, user);
      setLoading(false);
      if(result.status == 200) {
        Modal.success({
          content: `${result.data.message}, bạn sẽ phải đăng nhập lại!!`,
          onOk: () => {
              localStorage.removeItem("token");
              window.location.reload();
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
      console.log("err", err)
      setLoading(false);
      Modal.error({
        content: `Lỗi gọi api`,
        onOk: () => {
            /* Xử lý tiếp */
        },
      });
    }
  }

  async function updateAvatar(e) {

    if (e.target.files.length > 0) {
      e.target.parentNode.querySelector('.input_img_preview').src = URL.createObjectURL(e.target.files[0]);
    }

    try {
      let formData = new FormData();
      formData.append('avatar', e.target.files[0]);

      setLoading(true);
      let result = await api.users.updateAvatar(userStore.data?.id, formData);
      setLoading(false);
      if(result.status == 200) {
        Modal.success({
          content: `${result.data.message}, bạn sẽ phải đăng nhập lại!!`,
          onOk: () => {
              localStorage.removeItem("token");
              window.location.reload();
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
      console.log("err", err)
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
    <div className='information_page'>
      <div className='fields'>
        <p className='fields_lable'>User Name:</p> 
        <input disabled type="text" defaultValue={userStore.data?.user_name ?? "undefine"}/>
      </div>
      <form onSubmit={(e) => {
        update(e)
      }} className='information_form'>
        <div className='fields'>
          <p className='fields_lable'>First Name:</p> 
          <input name='first_name' type="text" defaultValue={userStore.data?.first_name ?? "undefine"}/>
        </div>
        <div className='fields'>
          <p className='fields_lable'>Last Name:</p> 
          <input name='last_name' type="text" defaultValue={userStore.data?.last_name ?? "undefine"}/>
        </div>
        <div className='fields_avatar'>
          <p className='fields_lable'>Avatar:</p> 
          <div className='input_file'>
            <img className='input_img_preview' src={`${userStore.data?.avatar}`}/>
            <input onChange={(e) => {
                updateAvatar(e);
            }} className='input_btn' type="file" />
            {/* <i className="input_edit_icon fa-solid fa-pen-to-square"></i> */}
          </div>
        </div>
        <Button className='form_btn' htmlType='submit' type="primary" ghost>
          Save
        </Button>
      </form>
    </div>
    {
      loading ? <Loading></Loading> : <></>
    }
    </>
  )
}
