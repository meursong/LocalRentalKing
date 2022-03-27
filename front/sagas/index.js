import { all, fork } from "redux-saga/effects";
import axios from "axios";

import postSaga from "./post";
import userSaga from "./user";

//axios.defaults.baseURL = 'http://localhost:3065';
axios.defaults.baseURL = "http://101.101.219.189";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
