import React, { useCallback, useEffect, useState } from "react";

import { Tag, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_CHANGE_TAG_REQUEST,
  LOAD_POST_REQUEST,
  UPDATE_TAG,
} from "../reducers/post";

function Tags({ tagsData, boardNum }) {
  const { CheckableTag } = Tag;

  const { location } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange = useCallback(
    (tag, checked) => {
      const nextSelectedTags = checked
        ? [tag]
        : selectedTags.filter((t) => t !== tag);
      setSelectedTags([...nextSelectedTags]);

      dispatch({
        type: LOAD_CHANGE_TAG_REQUEST,
        data: nextSelectedTags[0], // 현재 선택한 태그명
        boardNum: boardNum,
        location: location,
      });
      dispatch({
        type: UPDATE_TAG,
        data: nextSelectedTags[0], // 전역적으로 현재 선택한 태그를 공유한다.
      });

      console.log("You are interested in: ", nextSelectedTags);
      console.log("You are interested in: ", nextSelectedTags[0]);
    },
    [location]
  );

  useEffect(() => {
    setSelectedTags(["전체"]);
  }, []);

  return (
    <>
      {tagsData.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  );
}

export default Tags;
