import React, { useCallback, useState } from "react";
import { Button, Card } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import logo from "./logo2.png";
import Router from "next/router";
import moment from 'moment';

const PoastDiv = styled.div`
  width: 200px;
  // background:blue;
  display: flex;
  flex-wrap: wrap;
`;
const TextDiv = styled.div`
  width: 100%;
  height: 25px;
  // background:blue;
  text-align: start;
  font-size: 1rem;
  // padding-bottom:15px;
`;
const PriceDiv = styled.div`
  height: 4px;
  width: 50%;
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
const PostCardDiv2 = styled.div`
  .ant-card-body {
    height: 120px;
  }
`;

function PostCard2({ post }) {
  const onPage = useCallback(() => {
    Router.push(`/post/${post.id}*${post.boardNum}`, undefined, {
      shallow: true,
    });
  }, [post.id]);

  return (
    <>
      <PostCardDiv2>
<<<<<<< HEAD
        <div style={{ padding: "30px" }} onClick={onPage}>
          {post.boardNum === 1 && (
            <Card
              hoverable
              style={{ width: "244px" }}
              cover={
                <img
                  alt="example"
                  style={{ width: "100%", height: "198px" }}
                  src={
                    post.ProdPostImages[0]
                      ? `http://localhost:3065/${post.ProdPostImages[0].src}`
                      : logo
                  }
                />
              }
            >
              <PoastDiv>
                <TextDiv>{post.title}</TextDiv>
                <PriceDiv>{post.price}원</PriceDiv>
                <TimeDiv>{post.createdAt}</TimeDiv>
              </PoastDiv>
            </Card>
          )}
          {post.boardNum === 2 && (
            <Card
              hoverable
              style={{ width: "244px" }}
              cover={
                <img
                  alt="example"
                  style={{ width: "100%", height: "198px" }}
                  src={
                    post.ProdPostImages[0]
                      ? `http://localhost:3065/${post.ProdPostImages[0].src}`
                      : logo
                  }
                />
              }
            >
              <PoastDiv>
                <TextDiv>{post.title}</TextDiv>
                <PriceDiv>{post.price}원</PriceDiv>
                <TimeDiv>{post.createdAt}</TimeDiv>
              </PoastDiv>
            </Card>
          )}
          {post.boardNum === 3 && (
            <Card
              hoverable
              style={{ width: "244px" }}
              cover={
                <img
                  alt="example"
                  style={{ width: "100%", height: "198px" }}
                  src={
                    post.PowerPostImages[0]
                      ? `http://localhost:3065/${post.PowerPostImages[0].src}`
                      : logo
                  }
                />
              }
            >
              <PoastDiv>
                <TextDiv>{post.title}</TextDiv>
                <PriceDiv>{post.price}원</PriceDiv>
                <TimeDiv>{post.createdAt}</TimeDiv>
              </PoastDiv>
            </Card>
          )}
          {post.boardNum === 4 && (
            <Card
              hoverable
              style={{ width: "244px" }}
              cover={
                <img
                  alt="example"
                  style={{ width: "100%", height: "198px" }}
                  src={
                    post.PowerPostImages[0]
                      ? `http://localhost:3065/${post.PowerPostImages[0].src}`
                      : logo
                  }
                />
              }
            >
              <PoastDiv>
                <TextDiv>{post.title}</TextDiv>
                <PriceDiv>{post.price}원</PriceDiv>
                <TimeDiv>{post.createdAt}</TimeDiv>
              </PoastDiv>
            </Card>
          )}
          {post.boardNum === 5 && (
            <Card
              hoverable
              style={{ width: "244px" }}
              cover={
                <img
                  alt="example"
                  style={{ width: "100%", height: "198px" }}
                  src={
                    post.TogetherPostImages[0]
                      ? `http://localhost:3065/${post.TogetherPostImages[0].src}`
                      : logo
                  }
                />
              }
            >
              <PoastDiv>
                <TextDiv>{post.title}</TextDiv>
                <PriceDiv>{post.originalPrice}원</PriceDiv>
                <TimeDiv>{post.createdAt}</TimeDiv>
              </PoastDiv>
            </Card>
          )}
=======
        <div style={{padding: "30px"}} onClick={onPage}>
          {post.boardNum === 1  &&
          <Card
            hoverable
            style={{width: "244px"}}
            cover={
              <img alt="example" style={{width:"100%",height:"198px"}} src={post.ProdPostImages[0] ? `http://localhost:3065/${post.ProdPostImages[0].src}` : logo}/>
            }>
            <PoastDiv>
              <TextDiv>{post.title}</TextDiv>
              <PriceDiv>{post.price}원</PriceDiv>
              <TimeDiv>{moment(post.createdAt).format('YYYY.MM.DD')}</TimeDiv>
            </PoastDiv>
            </Card>
          }
          {post.boardNum === 2  &&
          <Card
            hoverable
            style={{width: "244px"}}
            cover={
              <img alt="example" style={{width:"100%",height:"198px"}} src={post.ProdPostImages[0] ? `http://localhost:3065/${post.ProdPostImages[0].src}` : logo}/>
            }>
            <PoastDiv>
              <TextDiv>{post.title}</TextDiv>
              <PriceDiv>{post.price}원</PriceDiv>
              <TimeDiv>{moment(post.createdAt).format('YYYY.MM.DD')}</TimeDiv>
            </PoastDiv>
          </Card>
          }
          {post.boardNum === 3  &&
          <Card
            hoverable
            style={{width: "244px"}}
            cover={
              <img alt="example" style={{width:"100%",height:"198px"}} src={post.PowerPostImages[0] ? `http://localhost:3065/${post.PowerPostImages[0].src}` : logo}/>
            }>
            <PoastDiv>
              <TextDiv>{post.title}</TextDiv>
              <PriceDiv>{post.price}원</PriceDiv>
              <TimeDiv>{moment(post.createdAt).format('YYYY.MM.DD')}</TimeDiv>
            </PoastDiv>
          </Card>
          }
          {post.boardNum === 4  &&
          <Card
            hoverable
            style={{width: "244px"}}
            cover={
              <img alt="example" style={{width:"100%",height:"198px"}} src={post.PowerPostImages[0] ? `http://localhost:3065/${post.PowerPostImages[0].src}` : logo}/>
            }>
            <PoastDiv>
              <TextDiv>{post.title}</TextDiv>
              <PriceDiv>{post.price}원</PriceDiv>
              <TimeDiv>{moment(post.createdAt).format('YYYY.MM.DD')}</TimeDiv>
            </PoastDiv>
          </Card>
          }
          {post.boardNum === 5 &&
          <Card
            hoverable
            style={{width: "244px"}}
            cover={
              <img alt="example" style={{width:"100%",height:"198px"}} src={post.TogetherPostImages[0] ? `http://localhost:3065/${post.TogetherPostImages[0].src}` : logo}/>
            }>
            <PoastDiv>
              <TextDiv>{post.title}</TextDiv>
              <PriceDiv>{post.originalPrice}원</PriceDiv>
              <TimeDiv>{moment(post.createdAt).format('YYYY.MM.DD')}</TimeDiv>
            </PoastDiv>
          </Card>
          }
>>>>>>> 784189f3ec8b510e0cde9460e6425d5fdadc39c7
        </div>
      </PostCardDiv2>
    </>
  );
}

export default PostCard2;
