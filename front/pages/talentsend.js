import React, {useEffect} from 'react';
import wrapper from '../store/configureStore';
import Head from 'next/head';
import {useDispatch, useSelector} from 'react-redux';
import {END} from 'redux-saga';
import {useInView} from "react-intersection-observer";

import AppLayout from '../components/AppLayout/AppLayout';

import {LOAD_MY_INFO_REQUEST} from '../reducers/user';
import {LOAD_POST_REQUEST, UPDATE_TAG} from '../reducers/post';
import Tags from "../components/Tags";
import PostCard1 from "../components/PostCard1";
import axios from "axios";
import Router from "next/router";
import Layout from "../components/Layout";

function TalentSend() {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { talent_TagsData,selectedTag,mainPosts, hasMorePost, loadPostLoading, id } = useSelector((state) => state.post);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 100) {
        if (hasMorePost && !loadPostLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id; // 인피니트 스크롤 구현을 위해 프론트 서버의 현재 렌더링중인 게시글들중 가장 아래 게시물의 게시넘버를 lastId로
          console.log(selectedTag);
          dispatch({
            type: LOAD_POST_REQUEST,
            data:selectedTag,
            boardNum:4,
            lastId:lastId,
          });
        } // 지역변수를 건드려봣자 어차피 렌더링이 되지 않는다. 실제 동작으로 테스트 해야할듯
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [ hasMorePost, loadPostLoading]);

  if (!me) {
    return '내 정보 로딩중...';
  }

  return (
    <>
      <Head>
        <title>힘을 빌려줄게 | 우리동네 렌탈대장</title>
      </Head>
      <Layout>
        <Tags tagsData={talent_TagsData} boardNum={4}/>
        {mainPosts.map((post) => <PostCard1 key={post.id} post={post} />)}
      </Layout>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = cookie;
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) { // 타 유저간 쿠키가 공유되는 문제를 방지하기 위함
    axios.defaults.headers.Cookie = cookie;
  }
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
    boardNum:4,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default TalentSend;
