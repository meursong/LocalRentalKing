import React, { useCallback, useEffect } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { loginRequestAction } from "../reducers/user";
import Router from "next/router";
import LoginForm from "../components/LoginForm";
import loginImg from "../components/로그인배너.jpg";
const ContainerDiv = styled.div`
  padding-top: 200px;
`;
function Loginpage() {
  return (
    <Row gutter={8}>
      <Col xs={24} md={10}>
        <img src={loginImg} style={{ height: 967 }} />
      </Col>
      <Col xs={24} md={10}>
        <ContainerDiv>
          <LoginForm />
        </ContainerDiv>
      </Col>
      <Col xs={24} md={4}></Col>
    </Row>
  );
}

export default Loginpage;
