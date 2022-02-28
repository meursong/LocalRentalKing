import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import React, { useCallback } from 'react';
import Router from 'next/router';

import {LeftSidebar, Navbar, RightSidebar, SearchInput, SidebarDiv, SidebarImg, SidebarLi, SidebarUl} from './styles';

import { logoutRequestAction } from '../../reducers/user';

import icon4 from '../../public/bookmark.png';


function AppLayout({ children }) {
  const [searchInput, onChangeSearchInput] = useInput('');
  const { me, logOutLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  // const const {isLoggedIn} = useSelector((state)=>state.user);
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <Navbar>
          <Menu mode="horizontal">
            <Menu.Item>
              <Link href="/">
                <a><h2>홈</h2></a>
              </Link>
            </Menu.Item>

            {/* <Menu.Item> */}
            {/*  <Link href="/signup"> */}
            {/*    <a>회원가입</a> */}
            {/*  </Link> */}
            {/* </Menu.Item> */}
          </Menu>
        </Navbar>
        <div>
          <LeftSidebar>
            <SidebarDiv>
              <SidebarUl>
                <Link href="/">
                  <SidebarLi>

                  </SidebarLi>
                </Link>
                <Link href="/">
                  <SidebarLi>
                    <a> 물건을 빌려줘</a>
                  </SidebarLi>
                </Link>
                <Link href="/related">
                  <SidebarLi>
                    <a> 물건을 빌려줄게</a>
                  </SidebarLi>
                </Link>
                <Link href="/list">
                  <SidebarLi>
                    <a> 힘을 빌려줘</a>
                  </SidebarLi>
                </Link>
                <Link href="/profile">
                  <SidebarLi>
                    <a> 힘을 빌려줄게</a>
                  </SidebarLi>
                </Link>
                <Link href="/">
                  <SidebarLi>
                    <a> 같이 하자</a>
                  </SidebarLi>
                </Link>
                <Link href="/">
                  <SidebarLi>
                    <a> 동네 놀이터</a>
                  </SidebarLi>
                </Link>
                <Link href="/">
                  <SidebarLi>
                    <a> 동네 친구 찾기</a>
                  </SidebarLi>
                </Link>
                <SidebarLi>
                  <p><br /></p>
                </SidebarLi>
                <div onClick={onLogOut}>
                  <SidebarLi>
                    <a> 로그아웃</a>
                  </SidebarLi>
                </div>
              </SidebarUl>
            </SidebarDiv>
          </LeftSidebar>
        </div>
        <div>
          <RightSidebar>
            <SearchInput
              enterButton
              value={searchInput}
              onChange={onChangeSearchInput}
              onSearch={onSearch}
            />
          </RightSidebar>
        </div>
      </div>
      <div style={{ marginTop: 100, zIndex: 5 }}>
        <Row gutter={8}>
          <Col xs={24} md={7} />
          <Col xs={24} md={11}>
            {children}
          </Col>
          <Col xs={24} md={6} />
        </Row>
      </div>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
