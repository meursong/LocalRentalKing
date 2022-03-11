import React, {useState} from 'react'
import {Card} from 'antd';
import styled, {createGlobalStyle} from 'styled-components';
import logo from './logo2.png';

const PoastDiv = styled.div`
  width: 200px;
  height: 30px;
  // background:red;
  display: flex;
  flex-wrap: wrap;
`;
const TextDiv = styled.div`
  width: 200px;
  height: 5px;
  // background:blue;
  text-align: start;
  font-size: 1rem;
  // padding-bottom:15px;
`;
const PriceDiv = styled.div`
  height: 4px;
  width: 100px;
  // background:yellow;
  flex-wrap: wrap;
  padding-top: 40px;
  color: #a7a7a7;
  font-weight: 600;
`;
const TimeDiv = styled(PriceDiv)`
  text-align: end;
  font-weight: 400;
`;
const AllPostDiv = styled.div`
  width: 700px;
  display: flex;
  // background:red;
  flex-wrap: wrap;
  .ant-card-body{
    border-top:solid #eeeeee;
    height:75px;
    padding:0 20px;
  }
`;

function PostCard2({post}) {

  return (
    <>
      <AllPostDiv>
        <div style={{padding: "30px"}}>
          {post.boardNum === 1  &&
          <Card
            hoverable
            style={{width: "244px"}}
            cover={
              <img alt="example" style={{width:"243px",height:"198px"}} src={post.ProdPostImages[0] ? `http://localhost:3065/${post.ProdPostImages[0].src}` : logo}/>
            }>
            <PoastDiv>
              <TextDiv>{post.title}</TextDiv>
              <PriceDiv>{post.price}원</PriceDiv>
              <TimeDiv>{post.createdAt}</TimeDiv>
            </PoastDiv>
            </Card>
          }
          {post.boardNum === 2  &&
          <Card
            hoverable
            style={{width: "244px"}}
            cover={
              <img alt="example" style={{width:"243px",height:"198px"}} src={post.ProdPostImages[0] ? `http://localhost:3065/${post.ProdPostImages[0].src}` : logo}/>
            }>
            <PoastDiv>
              <TextDiv>{post.title}</TextDiv>
              <PriceDiv>{post.price}원</PriceDiv>
              <TimeDiv>{post.createdAt}</TimeDiv>
            </PoastDiv>
          </Card>
          }
          {post.boardNum === 3  &&
          <Card
            hoverable
            style={{width: "244px"}}
            cover={
              <img alt="example" style={{width:"243px",height:"198px"}} src={post.PowerPostImages[0] ? `http://localhost:3065/${post.PowerPostImages[0].src}` : logo}/>
            }>
            <PoastDiv>
              <TextDiv>{post.title}</TextDiv>
              <PriceDiv>{post.price}</PriceDiv>
              <TimeDiv>{post.createdAt}</TimeDiv>
            </PoastDiv>
          </Card>
          }
          {post.boardNum === 4  &&
          <Card
            hoverable
            style={{width: "244px"}}
            cover={
              <img alt="example" style={{width:"243px",height:"198px"}} src={post.PowerPostImages[0] ? `http://localhost:3065/${post.PowerPostImages[0].src}` : logo}/>
            }>
            <PoastDiv>
              <TextDiv>{post.title}</TextDiv>
              <PriceDiv>{post.price}</PriceDiv>
              <TimeDiv>{post.createdAt}</TimeDiv>
            </PoastDiv>
          </Card>
          }
          {post.boardNum === 5 &&
          <Card
            hoverable
            style={{width: "244px"}}
            cover={
              <img alt="example" style={{width:"243px",height:"198px"}} src={post.TogetherPostImages[0] ? `http://localhost:3065/${post.TogetherPostImages[0].src}` : logo}/>
            }>
            <PoastDiv>
              <TextDiv>{post.title}</TextDiv>
              <PriceDiv>{post.originalPrice}</PriceDiv>
              <TimeDiv>{post.createdAt}</TimeDiv>
            </PoastDiv>
          </Card>
          }
        </div>
      </AllPostDiv>
    </>
  )
}

export default PostCard2
