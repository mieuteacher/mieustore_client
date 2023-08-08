import React from 'react'
import './loading.scss'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import Img from './cat_running.gif'
export default function Loading() {
    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: 50,
          }}
          spin
        />
      );
  return (
    <div className='loading_modal'>
        {/* <Spin indicator={antIcon} /> */}
        <img src={Img}/>
    </div>
  )
}
