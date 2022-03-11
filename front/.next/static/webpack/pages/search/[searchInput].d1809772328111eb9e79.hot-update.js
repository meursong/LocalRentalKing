webpackHotUpdate_N_E("pages/search/[searchInput]",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _MenuItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItems */ "./components/MenuItems.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo2.png */ "./components/logo2.png");
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_logo2_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _SearchLocation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SearchLocation */ "./components/SearchLocation.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\components\\Layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















var Topbar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__Topbar",
  componentId: "sc-139bv3m-0"
})(["padding:1%;width:100%;height:40px;font-size:0.6em;border-bottom:solid #eeeeee;display:flex;justify-content:center;;background:RGB(255,255,255);padding:0 35px;"]);
_c = Topbar;
var TopDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__TopDiv",
  componentId: "sc-139bv3m-1"
})(["padding:10px;display:flex;justify-content:flex-end;width:80%;backgounr:blue;font-size:1.6em;color:RGB(127,127,127);"]);
_c2 = TopDiv;
var NavBar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__NavBar",
  componentId: "sc-139bv3m-2"
})(["width:100%;height:146px;display:flex;border-bottom:solid #eeeeee;padding:0 35px;align-items:center;flex-wrap:wrap;"]);
_c3 = NavBar;
var NavBarDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__NavBarDiv",
  componentId: "sc-139bv3m-3"
})(["width:100%;height:30px;display:flex;align-content:center;align-items:center;padding-left:200px;"]);
_c4 = NavBarDiv;
var GlobalStyle = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(["div{cursor:pointer;}input:focus{outline:none;}ul{list-style:none;}"]);
_c5 = GlobalStyle;
var SelcectDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__SelcectDiv",
  componentId: "sc-139bv3m-4"
})(["color:#212a4b;width:450px;height:30px;border:solid #212a4b;min-width:450px;display:flex;"]);
_c6 = SelcectDiv;
var SelectDropD = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__SelectDropD",
  componentId: "sc-139bv3m-5"
})(["width:60px;hieght:30px;padding-top:4px;font-size:13px;font-weight:600;border-right:solid #212a4b;align-items:center;padding-left:5px;min-width:60px;a{color:black;}a:hover{color:black;}"]);
_c7 = SelectDropD;
var Select = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "Layout__Select",
  componentId: "sc-139bv3m-6"
})(["padding:1.5%;width:250px;hieght:30px;border:none;float:left;"]);
var ProfileDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__ProfileDiv",
  componentId: "sc-139bv3m-7"
})(["width:400px;height:28px;display:flex;padding-left:50px;"]);
_c8 = ProfileDiv;
var UserDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__UserDiv",
  componentId: "sc-139bv3m-8"
})(["width:120px;height:26px;:nth-child(2){border-right:solid #e6e6e6;border-left:solid #e6e6e6;}padding-top:2px;padding-left:28px;"]);
_c9 = UserDiv;
var NavMenu = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Layout__NavMenu",
  componentId: "sc-139bv3m-9"
})(["flex-direction:column;width:100%;position:absolute;transition:all .5s ease;"]);
_c10 = NavMenu;
var NavActive = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Layout__NavActive",
  componentId: "sc-139bv3m-10"
})(["position:absolute;z-index:1;"]);
_c11 = NavActive;
var MenuLi = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Layout__MenuLi",
  componentId: "sc-139bv3m-11"
})(["text-align:center;padding-bottom:40px;font-weight:600;font-size:20px;transition:all 0.25s ease;:hover{transform:scale(1.3,1.3);}:first-child{padding-top:20px;}a{color:black;}a:hover{color:black;}"]);
_c12 = MenuLi;
var MenuDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__MenuDiv",
  componentId: "sc-139bv3m-12"
})(["width:200px;flex-wrap:wrap;padding-top:30px;min-width:200px;"]);
_c13 = MenuDiv;
var LogoDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__LogoDiv",
  componentId: "sc-139bv3m-13"
})(["width:260px;position:absolute;padding-top:25px;min-height:50px;"]);
_c14 = LogoDiv;
var MenuA = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__MenuA",
  componentId: "sc-139bv3m-14"
})(["width:30px;padding-top:90px;"]);
_c15 = MenuA;
var PlaceDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__PlaceDiv",
  componentId: "sc-139bv3m-15"
})(["position:fixed;width:200px;height:30px;top:200px;left:1350px;right:1485px;bottom:219px;text-align:center;font-weight:600;font-size:20px;:hover{transform:scale(1.3,1.3);}display:flex;flex-wrap:wrap;"]);
_c16 = PlaceDiv;

function Layout(_ref) {
  _s();

  var _this = this;

  var children = _ref.children;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      local = _useSelector.local;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setMenu = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      profile = _useState2[0],
      SetProfile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      place = _useState3[0],
      SetPlace = _useState3[1];

  var PlaceClick = function PlaceClick() {
    SetPlace(true);
  };

  var toggleMenu = function toggleMenu() {
    setMenu(!isOpen);
  };

  var goProfile = function goProfile() {
    SetProfile(true);
    console.log(profile);
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/profile');
  }; // const onSearch = useCallback(() => {
  //   Router.push(`/hashtag/${searchInput}`);
  // }, [searchInput]);


  var onWrite = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/write');
  }, []);
  var onLogIn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/loginpage');
  }, []);
  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_10__["logoutRequestAction"])());
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
  }, []);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("글제목"),
      select = _useState4[0],
      setSelect = _useState4[1];

  var onCategory = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    setSelect(value);
  }, []); //
  // const [searchword, onSearchWord,setSearchWord] = useInput("asdfasdf");

  var searchword = "asdasdsadasdasdas";

  var setSearchWord = function setSearchWord(value) {
    _this.searchword = value;
  };

  var onSearchWord = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setSearchWord(e.target.value);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(select);
  }, [select]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(searchword);
  }, [searchword]);

  var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 7
    }
  }, __jsx("a", {
    onClick: function onClick() {
      setSelect("닉네임");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 9
    }
  }, "\uB2C9\uB124\uC784")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }
  }, __jsx("a", {
    onClick: function onClick() {
      setSelect("글제목");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 9
    }
  }, "\uAE00\uC81C\uBAA9")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 7
    }
  }, __jsx("a", {
    onClick: function onClick() {
      setSelect("글내용");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 9
    }
  }, "\uAE00\uB0B4\uC6A9")));

  var onSearching = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_14__["UPDATE_SEARCH"],
      data: {
        select: select,
        searchword: searchword
      }
    });
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/search/".concat(select, "*").concat(searchword));
  }, []); //이벤트 리스너 받는 오리지널 방식으로 텍스트
  //

  return __jsx("div", {
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      position: "relative",
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 7
    }
  }, __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 9
    }
  }, __jsx(Topbar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 11
    }
  }, __jsx(TopDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 13
    }
  }, !me ? __jsx("div", {
    onClick: onLogIn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 18
    }
  }, "\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785") : __jsx("div", {
    onClick: onLogOut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 18
    }
  }, "\uB85C\uADF8\uC544\uC6C3"), __jsx("div", {
    style: {
      paddingLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 15
    }
  }, "\uB0B4\uC0C1\uC810"))), __jsx(NavBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 11
    }
  }, __jsx(NavBarDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 13
    }
  }, __jsx(MenuDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 15
    }
  }, __jsx(LogoDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"].Brand, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 19
    }
  }, __jsx("img", {
    alt: "",
    src: _logo2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    width: "245px;",
    height: "45px",
    className: "d-inline-block align-top",
    style: {
      paddingTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 21
    }
  }))), __jsx(MenuA, {
    style: {
      paddingBottom: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 17
    }
  }, !isOpen ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MenuOutlined"], {
    style: {
      fontSize: "20px"
    },
    onClick: toggleMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 21
    }
  }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CloseOutlined"], {
    style: {
      fontSize: "20px"
    },
    onClick: toggleMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 21
    }
  }), isOpen ? __jsx(NavActive, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 21
    }
  }, _MenuItems__WEBPACK_IMPORTED_MODULE_3__["MenuItems"].map(function (item, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, index === 0 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/objectrecieve",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 77
      }
    }, item.title))), index === 1 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/objectsend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 74
      }
    }, item.title))), index === 2 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/talentrecieve",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 77
      }
    }, item.title))), index === 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/talentsend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 74
      }
    }, item.title))), index === 4 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/cooperate",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 53
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 73
      }
    }, item.title))), index === 5 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/playground",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 74
      }
    }, item.title))));
  })) : __jsx(NavMenu, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 36
    }
  }))), __jsx("div", {
    style: {
      paddingLeft: "160px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 15
    }
  }, __jsx(SelcectDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 17
    }
  }, __jsx(SelectDropD, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    overlay: menu,
    trigger: ['click'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "ant-dropdown-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 23
    }
  }, select, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DownOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 34
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
    placeholder: "지역, 상품명 입력",
    value: searchword,
    onChange: onSearchWord,
    onSearch: onSearching,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 19
    }
  }), __jsx("div", {
    style: {
      paddingTop: "3px",
      paddingLeft: "115px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 19
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SearchOutlined"], {
    onClick: onSearching,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 21
    }
  })))), __jsx(ProfileDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 15
    }
  }, __jsx(UserDiv, {
    onClick: goProfile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 19
    }
  }), " \uB0B4\uD504\uB85C\uD544"), __jsx(UserDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MailOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 19
    }
  }), " \uC54C\uB9BC\uD1A1"), __jsx(UserDiv, {
    onClick: onWrite,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 19
    }
  }), " \uAE00 \uC4F0\uAE30"))))), __jsx("div", {
    style: {
      marginTop: 0,
      zIndex: 5,
      width: '90%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 7,
    md: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 11,
    md: 11,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 13
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 6,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 13
    }
  }))), __jsx(PlaceDiv, {
    onClick: PlaceClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      paddingLeft: "4px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["AimOutlined"], {
    style: {
      paddingRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 13
    }
  }), "\uB3D9\uB124 \uC124\uC815"), __jsx(_SearchLocation__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 11
    }
  }), local ? __jsx("div", {
    style: {
      color: "#15254d",
      fontSize: "25px",
      width: "114px",
      paddingRight: ""
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 13
    }
  }, local) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 13
    }
  }))));
}

_s(Layout, "H2ApA1KPsSrid3oQQhq7YAov3oc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"]];
});

_c17 = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;

$RefreshReg$(_c, "Topbar");
$RefreshReg$(_c2, "TopDiv");
$RefreshReg$(_c3, "NavBar");
$RefreshReg$(_c4, "NavBarDiv");
$RefreshReg$(_c5, "GlobalStyle");
$RefreshReg$(_c6, "SelcectDiv");
$RefreshReg$(_c7, "SelectDropD");
$RefreshReg$(_c8, "ProfileDiv");
$RefreshReg$(_c9, "UserDiv");
$RefreshReg$(_c10, "NavMenu");
$RefreshReg$(_c11, "NavActive");
$RefreshReg$(_c12, "MenuLi");
$RefreshReg$(_c13, "MenuDiv");
$RefreshReg$(_c14, "LogoDiv");
$RefreshReg$(_c15, "MenuA");
$RefreshReg$(_c16, "PlaceDiv");
$RefreshReg$(_c17, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiVG9wYmFyIiwic3R5bGVkIiwiZGl2IiwiVG9wRGl2IiwiTmF2QmFyIiwiTmF2QmFyRGl2IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlNlbGNlY3REaXYiLCJTZWxlY3REcm9wRCIsIlNlbGVjdCIsImlucHV0IiwiUHJvZmlsZURpdiIsIlVzZXJEaXYiLCJOYXZNZW51IiwidWwiLCJOYXZBY3RpdmUiLCJNZW51TGkiLCJsaSIsIk1lbnVEaXYiLCJMb2dvRGl2IiwiTWVudUEiLCJQbGFjZURpdiIsIkxheW91dCIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJsb2NhbCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0TWVudSIsInByb2ZpbGUiLCJTZXRQcm9maWxlIiwicGxhY2UiLCJTZXRQbGFjZSIsIlBsYWNlQ2xpY2siLCJ0b2dnbGVNZW51IiwiZ29Qcm9maWxlIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJvbldyaXRlIiwidXNlQ2FsbGJhY2siLCJvbkxvZ0luIiwib25Mb2dPdXQiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwic2VsZWN0Iiwic2V0U2VsZWN0Iiwib25DYXRlZ29yeSIsInZhbHVlIiwic2VhcmNod29yZCIsInNldFNlYXJjaFdvcmQiLCJvblNlYXJjaFdvcmQiLCJlIiwidGFyZ2V0IiwidXNlRWZmZWN0IiwibWVudSIsIm9uU2VhcmNoaW5nIiwidHlwZSIsIlVQREFURV9TRUFSQ0giLCJkYXRhIiwid2lkdGgiLCJwb3NpdGlvbiIsInBhZGRpbmdMZWZ0IiwibG9nbyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZm9udFNpemUiLCJNZW51SXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0aXRsZSIsIm1hcmdpblRvcCIs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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFhLFNBQUssRUFBRTtBQUFDWSxrQkFBWSxFQUFFO0FBQWYsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLDhCQURGLEVBS0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNR2pELEtBQUssR0FDSjtBQUFLLFNBQUssRUFBRTtBQUFDa0QsV0FBSyxFQUFFLFNBQVI7QUFBbUJULGNBQVEsRUFBRSxNQUE3QjtBQUFxQ04sV0FBSyxFQUFFLE9BQTVDO0FBQXFEYyxrQkFBWSxFQUFFO0FBQW5FLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHakQsS0FESCxDQURJLEdBSUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBakdGLENBREYsQ0FERjtBQW9IRDs7R0FqTlFSLE07VUFDVUcsd0QsRUFDR0Msd0Q7OztPQUZiSixNO0FBbU5NQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2gvW3NlYXJjaElucHV0XS5kMTgwOTc3MjMyODExMWViOWU3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge1xyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBNYWlsT3V0bGluZWQsXHJcbiAgU2VhcmNoT3V0bGluZWQsXHJcbiAgRm9ybU91dGxpbmVkLFxyXG4gIE1lbnVPdXRsaW5lZCxcclxuICBDbG9zZU91dGxpbmVkLFxyXG4gIERvd25PdXRsaW5lZCxcclxuICBBaW1PdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7TWVudUl0ZW1zfSBmcm9tICcuL01lbnVJdGVtcyc7XHJcbmltcG9ydCB7TWVudSwgRHJvcGRvd24sIFJvdywgQ29sICxJbnB1dH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4vbG9nbzIucG5nJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtsb2dvdXRSZXF1ZXN0QWN0aW9uLCBVUERBVEVfTE9DQUx9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgU2VhcmNoTG9jYXRpb24gZnJvbSBcIi4vU2VhcmNoTG9jYXRpb25cIjtcclxuaW1wb3J0IHtVUERBVEVfU0VBUkNIfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5cclxuY29uc3QgVG9wYmFyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAwLjZlbTtcclxuICAvLyBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgI2VlZWVlZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOztcclxuICBiYWNrZ3JvdW5kOiBSR0IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgcGFkZGluZzogMCAzNXB4O1xyXG5gO1xyXG5jb25zdCBUb3BEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYmFja2dvdW5yOiBibHVlO1xyXG4gIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgY29sb3I6IFJHQigxMjcsIDEyNywgMTI3KTtcclxuYDtcclxuXHJcbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gYmFja2dyb3VuZDpyZWQ7XHJcbiAgaGVpZ2h0OiAxNDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGJhY2tncm91bmQ6eWVsbG93O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkICNlZWVlZWU7XHJcbiAgcGFkZGluZzogMCAzNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5gO1xyXG5jb25zdCBOYXZCYXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIGJhY2tncm91bmQ6Ymx1ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIGRpdiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNlbGNlY3REaXYgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAjMjEyYTRiO1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAjMjEyYTRiO1xyXG4gIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6NTBweDtcclxuYDtcclxuY29uc3QgU2VsZWN0RHJvcEQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhpZWdodDogMzBweDtcclxuICAvLyBiYWNrZ3JvdW5kOnJlZDtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgIzIxMmE0YjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNlbGVjdCA9IHN0eWxlZC5pbnB1dGBcclxuICBwYWRkaW5nOiAxLjUlO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoaWVnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8vIHBhZGRpbmctbGVmdDo4MHB4O1xyXG5cclxuYDtcclxuY29uc3QgUHJvZmlsZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICAvLyBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5gO1xyXG5jb25zdCBVc2VyRGl2ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIC8vIGJvcmRlci1yaWdodDogc29saWQgI2U2ZTZlNjtcclxuICA6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgI2U2ZTZlNjtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAjZTZlNmU2O1xyXG4gIH1cclxuXHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbmA7XHJcbmNvbnN0IE5hdk1lbnUgPSBzdHlsZWQudWxgXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gdG9wOiA4MHB4O1xyXG4gIC8vIGxlZnQ6LTEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG5gO1xyXG5jb25zdCBOYXZBY3RpdmUgPSBzdHlsZWQudWxgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG5gO1xyXG5jb25zdCBNZW51TGkgPSBzdHlsZWQubGlgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMsIDEuMyk7XHJcbiAgfVxyXG5cclxuICA6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbmA7XHJcbmNvbnN0IE1lbnVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAyMDBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuYDtcclxuY29uc3QgTG9nb0RpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6cmVkO1xyXG5gO1xyXG5jb25zdCBNZW51QSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDkwcHg7XHJcbiAgLy8gbWlud2lkdGg6MTIwcHg7XHJcbmA7XHJcbmNvbnN0IFBsYWNlRGl2ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6cmVkO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB0b3A6IDIwMHB4O1xyXG4gIGxlZnQ6IDEzNTBweDtcclxuICByaWdodDogMTQ4NXB4O1xyXG4gIGJvdHRvbTogMjE5cHg7XHJcbiAgLy8gYm9yZGVyOnNvbGlkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjMpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVufSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7bWUsIGxvY2FsfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Byb2ZpbGUsIFNldFByb2ZpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwbGFjZSwgU2V0UGxhY2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBQbGFjZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgU2V0UGxhY2UodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0TWVudSghaXNPcGVuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdvUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIFNldFByb2ZpbGUodHJ1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9maWxlKTtcclxuICAgIFJvdXRlci5wdXNoKCcvcHJvZmlsZScpO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgLy8gICBSb3V0ZXIucHVzaChgL2hhc2h0YWcvJHtzZWFyY2hJbnB1dH1gKTtcclxuICAvLyB9LCBbc2VhcmNoSW5wdXRdKTtcclxuXHJcbiAgY29uc3Qgb25Xcml0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIFJvdXRlci5wdXNoKCcvd3JpdGUnKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uTG9nSW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2lucGFnZScpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgUm91dGVyLnB1c2goJy8nKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSB1c2VTdGF0ZShcIuq4gOygnOuqqVwiKTtcclxuICBjb25zdCBvbkNhdGVnb3J5ID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3QodmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICAvL1xyXG4gIC8vIGNvbnN0IFtzZWFyY2h3b3JkLCBvblNlYXJjaFdvcmQsc2V0U2VhcmNoV29yZF0gPSB1c2VJbnB1dChcImFzZGZhc2RmXCIpO1xyXG5cclxuICBsZXQgc2VhcmNod29yZCA9IFwiYXNkYXNkc2FkYXNkYXNkYXNcIjtcclxuICBsZXQgc2V0U2VhcmNoV29yZCA9ICh2YWx1ZSk9PntcclxuICAgIHRoaXMuc2VhcmNod29yZCA9IHZhbHVlO1xyXG4gIH1cclxuICBjb25zdCBvblNlYXJjaFdvcmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoV29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc2VsZWN0KTtcclxuICB9LCBbc2VsZWN0XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzZWFyY2h3b3JkKTtcclxuICB9LCBbc2VhcmNod29yZF0pO1xyXG5cclxuXHJcbiAgY29uc3QgbWVudSA9IChcclxuICAgIDxNZW51PlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cIjBcIj5cclxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTZWxlY3QoXCLri4nrhKTsnoRcIilcclxuICAgICAgICB9fT7ri4nrhKTsnoQ8L2E+XHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5cclxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTZWxlY3QoXCLquIDsoJzrqqlcIilcclxuICAgICAgICB9fT7quIDsoJzrqqk8L2E+XHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5cclxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTZWxlY3QoXCLquIDrgrTsmqlcIilcclxuICAgICAgICB9fT7quIDrgrTsmqk8L2E+XHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgPC9NZW51PlxyXG4gIClcclxuICBjb25zdCBvblNlYXJjaGluZyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTpVUERBVEVfU0VBUkNILFxyXG4gICAgICBkYXRhOntzZWxlY3Q6c2VsZWN0LCBzZWFyY2h3b3JkOnNlYXJjaHdvcmQsfVxyXG4gICAgfSk7XHJcbiAgICBSb3V0ZXIucHVzaChgL3NlYXJjaC8ke3NlbGVjdH0qJHtzZWFyY2h3b3JkfWApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy/snbTrsqTtirgg66as7Iqk64SIIOuwm+uKlCDsmKTrpqzsp4DrhJAg67Cp7Iud7Jy866GcIO2FjeyKpO2KuFxyXG5cclxuICAvL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiMTAwJVwifX0+XHJcbiAgICAgICAgPEdsb2JhbFN0eWxlLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFRvcGJhcj5cclxuICAgICAgICAgICAgPFRvcERpdj5cclxuICAgICAgICAgICAgICB7IW1lID9cclxuICAgICAgICAgICAgICAgICg8ZGl2IG9uQ2xpY2s9e29uTG9nSW59PuuhnOq3uOyduC/tmozsm5DqsIDsnoU8L2Rpdj4pIDpcclxuICAgICAgICAgICAgICAgICg8ZGl2IG9uQ2xpY2s9e29uTG9nT3V0fT7roZzqt7jslYTsm4M8L2Rpdj4pfVxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDogXCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIOuCtOyDgeygkFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1RvcERpdj5cclxuICAgICAgICAgIDwvVG9wYmFyPlxyXG4gICAgICAgICAgPE5hdkJhcj5cclxuICAgICAgICAgICAgPE5hdkJhckRpdj5cclxuICAgICAgICAgICAgICA8TWVudURpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvRGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjQ1cHg7XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgPC9Mb2dvRGl2PlxyXG4gICAgICAgICAgICAgICAgPE1lbnVBIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgeyFpc09wZW4gP1xyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51T3V0bGluZWQgc3R5bGU9e3tmb250U2l6ZTogXCIyMHB4XCJ9fSBvbkNsaWNrPXt0b2dnbGVNZW51fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkIHN0eWxlPXt7Zm9udFNpemU6IFwiMjBweFwifX0gb25DbGljaz17dG9nZ2xlTWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHtpc09wZW4gP1xyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZBY3RpdmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7TWVudUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL29iamVjdHJlY2lldmVcIj48TWVudUxpIGtleT17aW5kZXh9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL29iamVjdHNlbmRcIj48TWVudUxpIGtleT17aW5kZXh9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RhbGVudHJlY2lldmVcIj48TWVudUxpIGtleT17aW5kZXh9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RhbGVudHNlbmRcIj48TWVudUxpIGtleT17aW5kZXh9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSA0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Nvb3BlcmF0ZVwiPjxNZW51TGkga2V5PXtpbmRleH0+PGE+e2l0ZW0udGl0bGV9PC9hPjwvTWVudUxpPjwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IDUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGxheWdyb3VuZFwiPjxNZW51TGkga2V5PXtpbmRleH0+PGE+e2l0ZW0udGl0bGV9PC9hPjwvTWVudUxpPjwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2QWN0aXZlPiA6IDxOYXZNZW51Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51QT5cclxuICAgICAgICAgICAgICA8L01lbnVEaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OiBcIjE2MHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxTZWxjZWN0RGl2PlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0RHJvcEQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9IHRyaWdnZXI9e1snY2xpY2snXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbnQtZHJvcGRvd24tbGlua1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdH0gPERvd25PdXRsaW5lZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3REcm9wRD5cclxuICAgICAgICAgICAgICAgICAgey8qPFNlbGVjdCBwbGFjZWhvbGRlcj17XCLsp4Dsl60sIOyDge2SiOuqhSDsnoXroKVcIn0gdmFsdWU9e3NlYXJjaHdvcmR9IG9uQ2hhbmdlPXtvblNlYXJjaFdvcmR9Lz4qL31cclxuICAgICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBwbGFjZWhvbGRlcj17XCLsp4Dsl60sIOyDge2SiOuqhSDsnoXroKVcIn0gdmFsdWU9e3NlYXJjaHdvcmR9IG9uQ2hhbmdlPXtvblNlYXJjaFdvcmR9IG9uU2VhcmNoPXtvblNlYXJjaGluZ30vPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIzcHhcIiwgcGFkZGluZ0xlZnQ6IFwiMTE1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hPdXRsaW5lZCBvbkNsaWNrPXtvblNlYXJjaGluZ30vPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU2VsY2VjdERpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8UHJvZmlsZURpdj5cclxuICAgICAgICAgICAgICAgIDxVc2VyRGl2IG9uQ2xpY2s9e2dvUHJvZmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQvPiDrgrTtlITroZztlYRcclxuICAgICAgICAgICAgICAgIDwvVXNlckRpdj5cclxuICAgICAgICAgICAgICAgIDxVc2VyRGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TWFpbE91dGxpbmVkLz4g7JWM66a87YahXHJcbiAgICAgICAgICAgICAgICA8L1VzZXJEaXY+XHJcbiAgICAgICAgICAgICAgICA8VXNlckRpdiBvbkNsaWNrPXtvbldyaXRlfT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1PdXRsaW5lZC8+IOq4gCDsk7DquLBcclxuICAgICAgICAgICAgICAgIDwvVXNlckRpdj5cclxuICAgICAgICAgICAgICA8L1Byb2ZpbGVEaXY+XHJcbiAgICAgICAgICAgIDwvTmF2QmFyRGl2PlxyXG4gICAgICAgICAgPC9OYXZCYXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogMCwgekluZGV4OiA1ICwgd2lkdGg6ICc5MCUnfX0+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17OH0+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezd9IG1kPXs3fS8+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezExfSBtZD17MTF9PlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezZ9IG1kPXs2fS8+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UGxhY2VEaXYgb25DbGljaz17UGxhY2VDbGlja30+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiNHB4XCJ9fT5cclxuICAgICAgICAgICAgPEFpbU91dGxpbmVkIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiBcIjEwcHhcIn19Lz5cclxuICAgICAgICAgICAg64+Z64SkIOyEpOyglVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2VhcmNoTG9jYXRpb24vPlxyXG4gICAgICAgICAge2xvY2FsID9cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiBcIiMxNTI1NGRcIiwgZm9udFNpemU6IFwiMjVweFwiLCB3aWR0aDogXCIxMTRweFwiLCBwYWRkaW5nUmlnaHQ6IFwiXCJ9fT5cclxuICAgICAgICAgICAgICB7bG9jYWx9XHJcbiAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvUGxhY2VEaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=