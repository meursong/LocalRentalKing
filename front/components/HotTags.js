import React, { useCallback, useEffect, useState } from 'react';

import { Tag , Button } from 'antd';

function HotTags() {

  const { CheckableTag } = Tag;

  const tagsData = ['전체','공구', 'Books', 'Music', 'Sports'];

  const [selectedTags,setSelectedTags] =useState([]);

  const handleChange = useCallback((tag, checked) => {
    const nextSelectedTags = checked ? [ tag,...selectedTags,] : selectedTags.filter(t => t !== tag);
    setSelectedTags([...nextSelectedTags]);
    //여기서 걍 다이렉트로 nextSelectedTags[0]를 category변수로 디스패치로 전송하면 되는거 아니야?
    //아니면 여기서는 post 리듀서의 카테고리 변수에 변화를 주고 렌더링중인 메인 페이지에서 useEffect로 카테고리 변수를 감시시켜서
    //해당하는 카테고리의 게시물을 10개 부르는 알고리즘으로 이어버리던가
    console.log('You are interested in: ', nextSelectedTags);
    console.log('You are interested in: ', nextSelectedTags[0]);
    },[]);

  useEffect(()=>{
    setSelectedTags('전체');
  },[]);

  return (
    <>
      {tagsData.map(tag => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={checked => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  );
}

export default HotTags;
