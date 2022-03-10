import React, { useState } from 'react'
import { Card } from 'antd';
import styled from 'styled-components';

const PoastDiv = styled.div`
    width:200px;
    height:30px;
    // background:red;
    display:flex;
    flex-wrap:wrap;
`;
const TextDiv = styled.div`
    width:200px;
    height:5px;
    // background:blue;
    text-align:start;
    font-size:1rem;
    // padding-bottom:15px;
`;
const PriceDiv = styled.div`
    height:4px;
    width:100px;
    // background:yellow;
    flex-wrap:wrap;
    padding-top:40px;
    color:#a7a7a7;
    font-weight:600;
`;
const TimeDiv = styled(PriceDiv)`
    text-align:end;
    font-weight:400;
`;
const AllPostDiv = styled.div`
    width:700px;
    display:flex;
    // background:red;
    flex-wrap:wrap;
`;

function PostCard2({post}) {

    return (
        <>
        <AllPostDiv>
          <div style={{padding:"30px"}}>
            <Card
              hoverable
              style={{ width: "244px"}}
              cover={<img alt="example" src={post.img ? post.img : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} style={{width:"243px",height:"198px"}}/>}
            >
              {post.boardNum === 1 || 2 || 3 || 4 && <PoastDiv><TextDiv>{post.title}</TextDiv><PriceDiv >{post.price}</PriceDiv><TimeDiv>{post.createdAt}</TimeDiv></PoastDiv>}
            </Card></div>;
        </AllPostDiv>
        </>
    )
}

export default PostCard2
