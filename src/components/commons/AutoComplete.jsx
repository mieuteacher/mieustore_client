import React from 'react'
import './index.scss'
/* Antd */
import { Input } from 'antd';
const { Search } = Input;

export default function AutoCompleteCustom({t}) {
  const onSearch = (value) => console.log(value);
  return (
    <Search
      placeholder={t("search")}
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
  )
}
