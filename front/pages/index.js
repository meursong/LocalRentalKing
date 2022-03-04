import React, {useCallback, useEffect, useState} from 'react';
import wrapper from '../store/configureStore';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { END } from 'redux-saga';
import {Button, Col, Row} from 'antd';
import { Tag } from 'antd';


import AppLayout from '../components/AppLayout/AppLayout';
// import PostForm from '../components/PostForm';
// import PostCard from '../components/PostCard';
import LoginForm from '../components/LoginForm';

import {LOAD_MY_INFO_REQUEST, logoutRequestAction} from '../reducers/user';
import { LOAD_POST_REQUEST } from '../reducers/post';
import ObjectRecieve from "./objectrecieve";
import HotTags from "../components/HotTags";


function Home() {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePost, loadPostLoading, reTweetError, id , object_TagsData } = useSelector((state) => state.post);
  const [ref, inView] = useInView();
  const [login,setLogin] = useState(false);

  const onLogOut = useCallback(() => {
    setLogin(false);
  }, []);

  // useEffect( // 화면 사이즈에 따라 버그가 발생중 fix1
  //   () => {
  //     if (inView && hasMorePost && !loadPostLoading) {
  //       const lastId = mainPosts[mainPosts.length - 1]?.id; // 인피니트 스크롤 구현을 위해 프론트 서버의 현재 렌더링중인 게시글들중 가장 아래 게시물의 게시넘버를 lastId로
  //       dispatch({
  //         type: LOAD_POST_REQUEST,
  //         lastId, // 게시물 10개를 요청하고 인피니트 스크롤 구현을 위해 lastId를 전송하여 lastId 기준으로 10개를 잘라 받아온다.
  //       });
  //     }
  //   },
  //   [inView, hasMorePost, loadPostLoading, mainPosts, id],
  // );

  return (

    <div>{login ? (
      <AppLayout>
        <Button onClick={onLogOut}> 로그아웃</Button>
        {me && <ObjectRecieve />}
        <HotTags tagsData={object_TagsData}/>
        <div ref={hasMorePost && !loadPostLoading ? ref : undefined} />
      {/* 아직 게시물을 전부 열람하지 않았고 && 게시물을 요청하는 중이 아닐경우 인피니트 스크롤 동작 : 아닐경우 undefined */}
      </AppLayout>
    ) : (
      <Row gutter={8}>
        <Col xs={6} md={10}>
          <img src="main.png" style={{ height: 950 }}/>
        </Col>
        <Col xs={14} md={10}>
          <h1>우리동네 렌탈대장을 지금 이용해 보세요!</h1>
          <LoginForm style={{ marginTop: 300 }} setLogin={setLogin}/>
        </Col>
        <Col xs={2} md={4}>
        </Col>
      </Row>
    )}
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = ''; // 기존 방식에서는 브라우저에서 쿠키를 만들어주기 때문에 각각의 독립된 브라우저에서 쿠키를 브라우저 >> 프론트 >> 백 으로 보내는 삼중구조지만
  // 쿠키가 다른 사용자에게 넘어갈 일이 없었으나 , SSR은 브라우저에서 쿠키를 동봉받아 프론트서버에서 쿠키를 백서버에 전달하는 이중구조 방식으로 , 잘못하면 내 로그인 쿠키로 다른 사용자가 접속하게 될 수 있기때문에
  // 이를 방지하기 위하여 우선 헤더에 들어간 쿠키를 공백으로 지워주고 로직을 시작한다.
  if (context.req && cookie) { // 타 유저간 쿠키가 공유되는 문제를 방지하기 위함
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Home;
