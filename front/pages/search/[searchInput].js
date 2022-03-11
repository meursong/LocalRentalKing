import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import AppLayout from '../../components/AppLayout/AppLayout';
import Layout from "../../components/Layout";
import {LOAD_SEARCH_POSTS_REQUEST} from "../../reducers/post";
import Tags from "../../components/Tags";
import {Button} from "antd";
import PostCard1 from "../../components/PostCard1";
import PostCard2 from "../../components/PostCard2";

function SearchResult() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {searchInput} = router.query; // [tag].js 파일 명의 [] 부분이 들어간다
  const {mainPosts, hasMorePost, loadPostLoading , boardNum ,object_TagsData,
    talent_TagsData,cooperate_tagsData,play_tagsData} = useSelector((state) => state.post);
  const {userInfo, me,local} = useSelector((state) => state.user);

  const categoryAndsearch = searchInput.split('*');
  const select = categoryAndsearch[0];
  const searchword = categoryAndsearch[1];

  const [view, setView] = useState(true);

  const onSwitch = useCallback(() => {
    setView(!view);
  }, [view]);

  useEffect(() => {
    console.log(local);
    console.log(select);
    console.log(searchword);
    console.log(boardNum);
    dispatch({ // 검색어를 제목에서 포함하며, 지역이 일치하는 게시물들을 10개씩요청
      type: LOAD_SEARCH_POSTS_REQUEST,
      local: local,
      select: select,
      searchword: searchword,
      boardNum: boardNum,
      // boardNum 게시판의 select 요소를 기준으로 searchword 와 관련된 local 지역의 데이터를 가져온다.
    });
  }, [local,select,searchword,boardNum]);

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
  //       if (hasMorePost && !loadPostLoading) {
  //         dispatch({ // 검색어를 제목에서 포함하며, 지역이 일치하는 게시물들을 10개씩요청
  //           type: LOAD_SEARCH_POSTS_REQUEST,
  //           local: local,
  //           select : select,
  //           search: search,
  //         });
  //       }
  //     }
  //   };
  //   window.addEventListener('scroll', onScroll);
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, [mainPosts.length, hasMorePost, searchInput, loadPostLoading]);

  return (
    <div>
      {boardNum === 1 &&
      <Layout>
        {view ? (
          <>
          <Tags tagsData={object_TagsData} boardNum={1}/>
          <Button onClick={onSwitch}>전환스위치</Button>
          {mainPosts.map((post) => <PostCard1 key={post.id} post={post}/>)}
          </>
        ) : (
          <>
          <Tags tagsData={object_TagsData} boardNum={1}/>
          <Button onClick={onSwitch}>전환스위치</Button>
          {mainPosts.map((post) => <PostCard2 key={post.id} post={post}/>)}
          </>
        )}
      </Layout>}
      {boardNum === 2 &&
      <Layout>
        {view ? (
          <>
            <Tags tagsData={object_TagsData} boardNum={2}/>
            <Button onClick={onSwitch}>전환스위치</Button>
            {mainPosts.map((post) => <PostCard1 key={post.id} post={post}/>)}
          </>
        ) : (
          <>
            <Tags tagsData={object_TagsData} boardNum={2}/>
            <Button onClick={onSwitch}>전환스위치</Button>
            {mainPosts.map((post) => <PostCard2 key={post.id} post={post}/>)}
          </>
        )}
      </Layout>}
      {boardNum === 3 &&
      <Layout>
        {view ? (
          <>
            <Tags tagsData={talent_TagsData} boardNum={3}/>
            <Button onClick={onSwitch}>전환스위치</Button>
            {mainPosts.map((post) => <PostCard1 key={post.id} post={post}/>)}
          </>
        ) : (
          <>
            <Tags tagsData={talent_TagsData} boardNum={3}/>
            <Button onClick={onSwitch}>전환스위치</Button>
            {mainPosts.map((post) => <PostCard2 key={post.id} post={post}/>)}
          </>
        )}
      </Layout>}
      {boardNum === 4 &&
      <Layout>
        {view ? (
          <>
            <Tags tagsData={talent_TagsData} boardNum={4}/>
            <Button onClick={onSwitch}>전환스위치</Button>
            {mainPosts.map((post) => <PostCard1 key={post.id} post={post}/>)}
          </>
        ) : (
          <>
            <Tags tagsData={talent_TagsData} boardNum={4}/>
            <Button onClick={onSwitch}>전환스위치</Button>
            {mainPosts.map((post) => <PostCard2 key={post.id} post={post}/>)}
          </>
        )}
      </Layout>}
      {boardNum === 5 &&
      <Layout>
        {view ? (
          <>
            <Tags tagsData={cooperate_tagsData} boardNum={5}/>
            <Button onClick={onSwitch}>전환스위치</Button>
            {mainPosts.map((post) => <PostCard1 key={post.id} post={post}/>)}
          </>
        ) : (
          <>
            <Tags tagsData={cooperate_tagsData} boardNum={5}/>
            <Button onClick={onSwitch}>전환스위치</Button>
            {mainPosts.map((post) => <PostCard2 key={post.id} post={post}/>)}
          </>
        )}
      </Layout>}
    </div>
  );
}

export default SearchResult;
