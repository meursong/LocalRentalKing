import React, {useEffect} from 'react';
import Head from 'next/head';
import {useSelector} from 'react-redux';
import Router from 'next/router';
import {END} from 'redux-saga';
import {Avatar, Card} from 'antd';
import Link from 'next/link';
import AppLayout from '../components/AppLayout/AppLayout';
import {LOAD_MY_INFO_REQUEST, LOAD_USERS_REQUEST} from '../reducers/user';
import wrapper from '../store/configureStore';
import axios from "axios";
import Layout from "../components/Layout";
import PostCard2 from "../components/PostCard2";
import {UPDATE_BOARD} from "../reducers/post";

function Profile() {
  const { me , usersInfo } = useSelector((state) => state.user);

  const style = {
    borderRadius: '2rem',
    marginBottom: '20px',
  };

  useEffect(() => {
    if (!(me && me.id)) {
      alert('로그인 후 이용 가능 합니다.');
      Router.replace('/loginpage'); // push와 다르게 replace는 이전 기록 자체를 지워버리기에 이자리에 더 적합하다.
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

      <Layout>

        <div><br/></div>

        <Card>
          <Card.Meta
            avatar={<Avatar>{me.nickname[0]}</Avatar>}
            title={me.nickname}
          />
        </Card>

        {/*<PostCard2/>*/}

        {/*{usersInfo.map((c) => (*/}
        {/*  <Link href={`/user/${c.id}`} prefetch={false}>*/}
        {/*    <Card style={style}>*/}
        {/*      <Card.Meta*/}
        {/*        avatar={(*/}
        {/*          <a><Avatar>{c.nickname[0]}</Avatar></a>*/}
        {/*        )}*/}
        {/*        title={c.nickname}*/}
        {/*      />*/}
        {/*      <br />*/}
        {/*    </Card>*/}
        {/*  </Link>*/}
        {/*))}*/}

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
    type: UPDATE_BOARD,
    data: 7,
  });
  // context.store.dispatch({
  //   type: LOAD_USERS_REQUEST,
  // });
  // context.store.dispatch({
  //   type: LOAD_POST_REQUEST,
  // });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Profile;
