import React, { useEffect } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import "./info.scss"
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { useSelector } from 'react-redux';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userStore = useSelector(store => store.userStore)
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function historyUrl() {
    let urls = location.pathname.split('/');
    return <>
      {
        urls.map((item, index) => {
          if(item != "") {
            return <>
            <a className='link' key={Date.now() * Math.random()} onClick={() => {
              if (item == "profile") {
                navigate(`/${item}`)
              }else {
                navigate(`${item}`)
              }
                
            }}>{item.toUpperCase()}</a>
            {
              index == urls.length - 1 ? "" : <>/</>
            }
            </>
          }else {
            <></>
          }
        })
      }
    </>
  }
  useEffect(() => {
    console.log("location", location)
  }, [])
  return (
    <Layout className='profile_page'>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          //console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          //console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['0']}
          items={[
            {icon: UserOutlined, title: "Thông tin cá nhân", url: "information"}, 
            {icon: VideoCameraOutlined, title: "Mật khẩu"}, 
            {icon: UploadOutlined, title: "Email"}, 
            {icon: UserOutlined, title: "Receipts"},
            {icon: UserOutlined, title: "Carts"}
          ].map(
            (item, index) => ({
              key: String(index + 1),
              icon: React.createElement(item.icon),
              label: `${item.title}`,
              onClick: () => {
                navigate(`${item.url}`)
              }
            }),
          )}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 10,
            background: colorBgContainer,
          }}
          className='navbar'
        >
          <div>
            xin chào 
            <span style={{fontWeight: 900, margin: "0 5px"}}>{userStore.data?.first_name} {userStore.data?.last_name}</span>
            <span style={{fontWeight: 900, margin: "0 5px"}}>create at: {`${new Date(userStore.data?.create_at).getDay()}/${new Date(userStore.data?.create_at).getMonth()}//${new Date(userStore.data?.create_at).getFullYear()}`}</span>
            <span style={{fontWeight: 900, margin: "0 5px"}}>lastupdate at: {`${new Date(userStore.data?.create_at).getDay()}/${new Date(userStore.data?.create_at).getMonth()}//${new Date(userStore.data?.create_at).getFullYear()}`}</span>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
          className='content'
        >
          <div
            style={{
              padding: 24,
              minHeight: 660,
              background: colorBgContainer,
            }}
          >
            {
              historyUrl()
            }
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;


{/* <div>
Info
<button onClick={async (e) =>{
  console.log("đã vào đây")
  if (!userStore.data?.email_confirm) {
    alert("đã vào")
    let result = await api.users.resend();
    console.log("result",result)
  }
}}>Resend Email</button>
<br></br>
<form onSubmit={async (e) => {
  e.preventDefault();
  alert("đã gọi")
  let result = await api.users.changePassword({
    new_pass: e.target.new_pass.value,
    old_pass: e.target.old_pass.value
  })
  console.log("result", result)
}}>
  OldPass: <input name='old_pass' type="text" />
  NewPass: <input name='new_pass' type="text" />
  ReNewPass: <input name='renew_pass' type="text" />
  <button>Đổi</button>
</form>
</div> */}