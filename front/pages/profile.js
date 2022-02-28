import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import axios from 'axios';
import { END } from 'redux-saga';
import useSWR from 'swr';
import { Avatar, Card } from 'antd';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import NickNameEditForm from '../components/NickNameEditForm';
import FollowList from '../components/FollowList';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import { LOAD_POST_REQUEST } from '../reducers/post';

function Profile() {
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
      alert("로그인 후 이용해주세요");
    }
  }, [me && me.id]);

  if (!me) {
    return '내 정보 로딩중...';
  }

  return (
    <>
      <Head>
        <title>내 프로필 | 우리동네 렌탈대장</title>
      </Head>
      <AppLayout>
      </AppLayout>
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
    type: LOAD_POST_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Profile;
