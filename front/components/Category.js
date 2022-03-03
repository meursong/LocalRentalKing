import React, { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import useSWR from "swr";
import {Button} from "antd";

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);

function Category({ tagname }) {

  const { me } = useSelector((state) => state.user);
  const [followersLimit, setFollowersLimit] = useState(10);
  const [followingsLimit, setFollowingsLimit] = useState(10);
  const [shouldFetch, setShouldFetch] = useState(false);

  const onClickTag = useCallback(() => {
    },[]);

  const { data: followersData, error: followerError } = useSWR(`${backUrl}/user/followers?limit=${followersLimit}`, fetcher);
  const { data: followingsData, error: followingError } = useSWR(`${backUrl}/user/followings?limit=${followingsLimit}`, fetcher);

  const loadMoreFollowings = useCallback(() => {
    setFollowingsLimit((prev) => prev + 10);
  }, []);

  const loadMoreFollowers = useCallback(() => {
    setFollowersLimit((prev) => prev + 10);
  }, []);

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return '팔로잉/팔로워 로딩 중 에러가 발생했습니다.';
  }

  return (
    <>
      <button disable={shouldFetch} onClick={handleClick}>Fetch</button>
      {data ? <h1>{data.fullName}</h1> : null}
    </>
  );
}

export default Category;
