import React, {useCallback, useEffect, useState} from 'react';
import wrapper from '../store/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { END } from 'redux-saga';
import {Button, Col, Row} from 'antd';

import AppLayout from '../components/AppLayout/AppLayout';
import LoginForm from '../components/LoginForm';

import {LOAD_MY_INFO_REQUEST, logoutRequestAction} from '../reducers/user';
import {LOAD_POST_REQUEST, TEST, UPDATE_TAG} from '../reducers/post';
import Tags from "../components/Tags";
import PostCard1 from "../components/DH/PostCard1";

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
  ];

  const post2 = [
    {Id:11,category:"공구",boardNum:1,price:4000,title:"포스트 카드 1번",content:"ㄱ",images:[],userId:1,nickname:"김도원"},
    {Id:12,userId:1,nickname:"김도원",price:5000,title:"포스트 카드 2번",content:"ㄴ",images:[]},
    {Id:13,userId:1,nickname:"김도원",price:6000,title:"포스트 카드 3번",content:"ㄷ",images:[]},
    {Id:14,userId:1,nickname:"김도원",price:2000,title:"포스트 카드 4번",content:"ㄹ",images:[]},
    {Id:15,userId:1,nickname:"김도원",price:1000,title:"포스트 카드 5번",content:"ㅁ",images:[]},
    {Id:16,userId:1,nickname:"김도원",price:6000,title:"포스트 카드 6번",content:"ㅂ",images:[]},
    {Id:17,userId:1,nickname:"김도원",price:4000,title:"포스트 카드 7번",content:"ㅅ",images:[]},
    {Id:18,userId:1,nickname:"김도원",price:3000,title:"포스트 카드 8번",content:"ㅇ",images:[]},
    {Id:19,userId:1,nickname:"김도원",price:6000,title:"포스트 카드 9번",content:"ㅈ",images:[]},
    {Id:20,userId:1,nickname:"김도원",price:2000,title:"포스트 카드 10번",content:"ㅋ",images:""},
  ];

  const post3 = [
    {Id:21,category:"공구",boardNum:1,price:4000,title:"포스트 카드 1번",content:"ㄱ",images:[],userId:1,nickname:"김도원"},
    {Id:22,userId:1,nickname:"김도원",price:5000,title:"포스트 카드 2번",content:"ㄴ",images:[]},
    {Id:23,userId:1,nickname:"김도원",price:6000,title:"포스트 카드 3번",content:"ㄷ",images:[]},
    {Id:24,userId:1,nickname:"김도원",price:2000,title:"포스트 카드 4번",content:"ㄹ",images:[]},
    {Id:25,userId:1,nickname:"김도원",price:1000,title:"포스트 카드 5번",content:"ㅁ",images:[]},
    {Id:26,userId:1,nickname:"김도원",price:6000,title:"포스트 카드 6번",content:"ㅂ",images:[]},
    {Id:27,userId:1,nickname:"김도원",price:4000,title:"포스트 카드 7번",content:"ㅅ",images:[]},
    {Id:28,userId:1,nickname:"김도원",price:3000,title:"포스트 카드 8번",content:"ㅇ",images:[]},
    {Id:29,userId:1,nickname:"김도원",price:6000,title:"포스트 카드 9번",content:"ㅈ",images:[]},
    {Id:30,userId:1,nickname:"김도원",price:2000,title:"포스트 카드 10번",content:"ㅋ",images:""},
  ];// postId 자동생성 category,boardNum,price,title,content,Images, me.userId,me.nickname를 dispatch로 전송하여 db에 저장한다.

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostLoading) {
          post1 = post1.concat(post2);
          console.log(post1);
        } // 지역변수를 건드려봣자 어차피 렌더링이 되지 않는다. 실제 동작으로 테스트 해야할듯
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [post1.length, hasMorePost, loadPostLoading]);

  return (
    <div>{me ? (
      <AppLayout>
        {/*<Button onClick={}> 로그아웃</Button>*/}
        <Tags tagsData={object_TagsData} boardNum={1}/>
        {post1.map((post) => <PostCard1 key={post.Id} post={post}/>)}
        {/*{mainPosts.map((post) => <PostCard key={post.id} post={post} />)}*/}
        {/*<div ref={hasMorePost && !loadPostLoading ? ref : undefined} />*/}
      {/* 아직 게시물을 전부 열람하지 않았고 && 게시물을 요청하는 중이 아닐경우 인피니트 스크롤 동작 : 아닐경우 undefined */}
      </AppLayout>
    ) : (
      <Row gutter={8}>
        <Col xs={24} md={10}>
          <img src="main.png" style={{ height: 950 }}/>
        </Col>
        <Col xs={24} md={10}>
          <h1>우리동네 렌탈대장을 지금 이용해 보세요!</h1>
          <LoginForm style={{ marginTop: 300 }} />
        </Col>
        <Col xs={24} md={4}>
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
