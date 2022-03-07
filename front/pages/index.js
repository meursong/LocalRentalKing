import React, {useCallback, useEffect, useState} from 'react';
import wrapper from '../store/configureStore';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { END } from 'redux-saga';
import {Button, Col, Row} from 'antd';
import { Tag } from 'antd';


import AppLayout from '../components/AppLayout/AppLayout';
import LoginForm from '../components/LoginForm';

import {LOAD_MY_INFO_REQUEST, logoutRequestAction} from '../reducers/user';
import {LOAD_POST_REQUEST, TEST, UPDATE_TAG} from '../reducers/post';
import Tags from "../components/Tags";
import PostCard from "../components/PostCard";
import PostCard1 from "../components/DH/PostCard1";
import PostForm from "../components/DH/PostForm";
import SearchLocation from "../components/SearchLocation";

function Home() {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePost, loadPostLoading, reTweetError, id , object_TagsData , selectedTag } = useSelector((state) => state.post);
  const [ref, inView] = useInView();

  const string = "abc*def*123";
  const split = string.split("*");

  console.log(split);

  const post1 = [
    {Id:1,category:"공구",boardNum:1,price:4000,title:"포스트 카드 1번",content:"ㄱ",images:[],userId:1,nickname:"김도원"},
    {Id:2,userId:1,nickname:"김도원",price:5000,title:"포스트 카드 2번",content:"ㄴ",images:[]},
    {Id:3,userId:1,nickname:"김도원",price:6000,title:"포스트 카드 3번",content:"ㄷ",images:[]},
    {Id:4,userId:1,nickname:"김도원",price:2000,title:"포스트 카드 4번",content:"ㄹ",images:[]},
    {Id:5,userId:1,nickname:"김도원",price:1000,title:"포스트 카드 5번",content:"ㅁ",images:[]},
    {Id:6,userId:1,nickname:"김도원",price:6000,title:"포스트 카드 6번",content:"ㅂ",images:[]},
    {Id:7,userId:1,nickname:"김도원",price:4000,title:"포스트 카드 7번",content:"ㅅ",images:[]},
    {Id:8,userId:1,nickname:"김도원",price:3000,title:"포스트 카드 8번",content:"ㅇ",images:[]},
    {Id:9,userId:1,nickname:"김도원",price:6000,title:"포스트 카드 9번",content:"ㅈ",images:[]},
    {Id:10,userId:1,nickname:"김도원",price:2000,title:"포스트 카드 10번",content:"ㅋ",images:""},
  ]; // postId 자동생성 category,boardNum,price,title,content,Images, me.userId,me.nickname를 dispatch로 전송하여 db에 저장한다.

  // useEffect( // 화면 사이즈에 따라 버그가 발생중 fix1
  //   () => {
  //     if (inView && hasMorePost && !loadPostLoading) {
  //       const lastId = mainPosts[mainPosts.length - 1]?.id; // 인피니트 스크롤 구현을 위해 프론트 서버의 현재 렌더링중인 게시글들중 가장 아래 게시물의 게시넘버를 lastId로
  //       dispatch({
  //         type: LOAD_POST_REQUEST,
  //         data:selectedTag,
  //         boardNum:1,
  //         lastId, // 게시물 10개를 요청하고 인피니트 스크롤 구현을 위해 lastId를 전송하여 lastId 기준으로 10개를 잘라 받아온다.
  //       });
  //       console.log("선택 된 태그:"+selectedTag);
  //     }
  //   },[inView, hasMorePost, loadPostLoading, mainPosts, id]);

  return (
    <div>{me ? (
      <AppLayout>
        {/*<Button onClick={}> 로그아웃</Button>*/}
        <Tags tagsData={object_TagsData} boardNum={1}/>
        {post1.map((post) => <PostCard1 key={post.nickname} post={post}/>)}
        {/*{mainPosts.map((post) => <PostCard key={post.id} post={post} />)}*/}
        <SearchLocation/>
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
          <LoginForm style={{ marginTop: 300 }} />
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
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: UPDATE_TAG,
    data:"전체",
  });
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data:"전체",
    boardNum:1,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Home;
