import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

function Search() {
  return (
    <>
      <Head>
        <title>동네친구 찾기 | 우리동네 렌탈대장</title>
      </Head>
      <AppLayout>
        <h1>친구의 정보를 입력하세요</h1>
        {/*  친구 아이디/별명 입력란 */}
        {/*  아이디/별명 선택박스 */}
      </AppLayout>
    </>
  );
}

export default Search;
