import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Dropdown, Input, Menu} from "antd";
import 'antd/dist/antd.css';
import Router from "next/router";
import useInput from "../hooks/useInput";
import {
  DownOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const {TextArea} = Input;


function SearchBar(){
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a onClick={() => {
        setSelect("닉네임")
      }}>닉네임</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a onClick={() => {
        setSelect("글제목")
      }}>글제목</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a onClick={() => {
        setSelect("글내용")
      }}>글내용</a>
    </Menu.Item>
  </Menu>

)

const [select, setSelect] = useState("글제목");
const onCategory = useCallback((value) => {
  setSelect(value);
}, []);

const [searchword, onSearchWord,setSearchWord] = useInput("asdfasdf");

useEffect(() => {
  console.log(select);
}, [select]);

useEffect(() => {
  console.log(searchword);
}, [searchword]);
  const dispatch = useDispatch();

  const onSearching = useCallback(() => {
    // dispatch({
    //   type:UPDATE_SEARCH,
    //   data:{select:select, searchword:searchword,}
    // });
    Router.push(`/search/${select}*${searchword}`);
  }, [select,searchword]);

  return (
    <div style={{width: "100%"}}>
      <div>
        <div>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" >
              {select} <DownOutlined/>
            </a>
          </Dropdown>
        </div>
        <Input.Search placeholder={"지역, 상품명 입력"} value={searchword} onChange={onSearchWord} onSearch={onSearching}/>
        <div style={{paddingTop: "3px", paddingLeft: "115px"}}>
          <SearchOutlined onClick={onSearching}/>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;
