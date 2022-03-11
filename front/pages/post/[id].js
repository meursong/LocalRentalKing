import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import AppLayout from '../../components/AppLayout/AppLayout';
import {LOAD_SPOST_REQUEST} from "../../reducers/post";
import {Avatar, Card, Form} from "antd";
import PostImages from "../../components/PostImages";
import Link from 'next/link';

function PostPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query; // [tag].js 파일 명의 [] 부분이 들어간다
  const { singlePost,mainPosts, hasMorePost, loadPostLoading , local } = useSelector((state) => state.post);
  const { userInfo, me } = useSelector((state) => state.user);

  const idAndBoardNum = id.split('*');
  const postId = idAndBoardNum[0];
  const postBoardNum = idAndBoardNum[1];

  const [form] = Form.useForm();

  useEffect(()=>{
    dispatch({
      type:LOAD_SPOST_REQUEST,
      postId:postId,
      postBoardNum:postBoardNum,
    });
  },[]);

  return (
    <AppLayout>
      <Form
        layout="horizontal"
        form={form}
        initialValues={{
          layout: 'horizontal',
        }}
      >
        {singlePost &&
        <Card
          cover={<PostImages images={singlePost.ProdPostImages}/>}
          title={singlePost.title}
        >
          {singlePost.content}
        </Card>
        }
      </Form>

    </AppLayout>
  );
}

export default PostPage;
