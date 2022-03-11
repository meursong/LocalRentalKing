webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _MenuItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItems */ "./components/MenuItems.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo2.png */ "./components/logo2.png");
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_logo2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _SearchLocation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SearchLocation */ "./components/SearchLocation.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _AppLayout_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AppLayout/styles */ "./components/AppLayout/styles.js");


var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\components\\Layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















var Option = antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option;
var Topbar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__Topbar",
  componentId: "sc-139bv3m-0"
})(["padding:1%;width:100%;height:40px;font-size:0.6em;border-bottom:solid #eeeeee;display:flex;justify-content:center;;background:RGB(255,255,255);padding:0 35px;"]);
_c = Topbar;
var TopDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__TopDiv",
  componentId: "sc-139bv3m-1"
})(["padding:10px;display:flex;justify-content:flex-end;width:80%;backgounr:blue;font-size:1.6em;color:RGB(127,127,127);"]);
_c2 = TopDiv;
var NavBar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__NavBar",
  componentId: "sc-139bv3m-2"
})(["width:100%;height:146px;display:flex;border-bottom:solid #eeeeee;padding:0 35px;align-items:center;flex-wrap:wrap;"]);
_c3 = NavBar;
var NavBarDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__NavBarDiv",
  componentId: "sc-139bv3m-3"
})(["width:100%;height:30px;display:flex;align-content:center;align-items:center;padding-left:200px;"]);
_c4 = NavBarDiv;
var GlobalStyle = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(["div{cursor:pointer;}input:focus{outline:none;}ul{list-style:none;}"]);
_c5 = GlobalStyle;
var SelcectDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__SelcectDiv",
  componentId: "sc-139bv3m-4"
})(["color:#212a4b;width:450px;height:30px;border:solid #212a4b;min-width:450px;display:flex;"]);
_c6 = SelcectDiv;
var SelectDropD = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__SelectDropD",
  componentId: "sc-139bv3m-5"
})(["width:60px;hieght:30px;padding-top:4px;font-size:13px;font-weight:600;border-right:solid #212a4b;align-items:center;padding-left:5px;min-width:60px;a{color:black;}a:hover{color:black;}"]); // const Select = styled.input`
//   padding: 1.5%;
//   width: 250px;
//   hieght: 30px;
//   border: none;
//   float: left;
//   // padding-left:80px;
//
// `;

_c7 = SelectDropD;
var ProfileDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__ProfileDiv",
  componentId: "sc-139bv3m-6"
})(["width:400px;height:28px;display:flex;padding-left:50px;"]);
_c8 = ProfileDiv;
var UserDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__UserDiv",
  componentId: "sc-139bv3m-7"
})(["width:120px;height:26px;:nth-child(2){border-right:solid #e6e6e6;border-left:solid #e6e6e6;}padding-top:2px;padding-left:28px;"]);
_c9 = UserDiv;
var NavMenu = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Layout__NavMenu",
  componentId: "sc-139bv3m-8"
})(["flex-direction:column;width:100%;position:absolute;transition:all .5s ease;"]);
_c10 = NavMenu;
var NavActive = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Layout__NavActive",
  componentId: "sc-139bv3m-9"
})(["position:absolute;z-index:1;"]);
_c11 = NavActive;
var MenuLi = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Layout__MenuLi",
  componentId: "sc-139bv3m-10"
})(["text-align:center;padding-bottom:40px;font-weight:600;font-size:20px;transition:all 0.25s ease;:hover{transform:scale(1.3,1.3);}:first-child{padding-top:20px;}a{color:black;}a:hover{color:black;}"]);
_c12 = MenuLi;
var MenuDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__MenuDiv",
  componentId: "sc-139bv3m-11"
})(["width:200px;flex-wrap:wrap;padding-top:30px;min-width:200px;"]);
_c13 = MenuDiv;
var LogoDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__LogoDiv",
  componentId: "sc-139bv3m-12"
})(["width:260px;position:absolute;padding-top:25px;min-height:50px;"]);
_c14 = LogoDiv;
var MenuA = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__MenuA",
  componentId: "sc-139bv3m-13"
})(["width:30px;padding-top:90px;"]);
_c15 = MenuA;
var PlaceDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__PlaceDiv",
  componentId: "sc-139bv3m-14"
})(["position:fixed;width:200px;height:30px;top:200px;left:1350px;right:1485px;bottom:219px;text-align:center;font-weight:600;font-size:20px;:hover{transform:scale(1.3,1.3);}display:flex;flex-wrap:wrap;"]);
_c16 = PlaceDiv;

function Layout(_ref) {
  _s();

  var _this = this;

  var children = _ref.children;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      local = _useSelector.local;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setMenu = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      profile = _useState2[0],
      SetProfile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      select = _useState3[0],
      SetSelect = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      place = _useState4[0],
      SetPlace = _useState4[1];

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_13__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      searchword = _useInput2[0],
      onSearchword = _useInput2[1],
      setSearchword = _useInput2[2];

  var PlaceClick = function PlaceClick() {
    SetPlace(true);
  };

  var toggleMenu = function toggleMenu() {
    setMenu(!isOpen);
  };

  var goProfile = function goProfile() {
    SetProfile(true);
    console.log(profile);
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/profile');
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(tags1[0]),
      category = _useState5[0],
      setCategory = _useState5[1];

  var onCategory = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    setCategory(value);
  }, []); // const onSearch = useCallback(() => {
  //   Router.push(`/hashtag/${searchInput}`);
  // }, [searchInput]);

  var onWrite = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/write');
  }, []);
  var onLogIn = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/loginpage');
  }, []);
  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_11__["logoutRequestAction"])());
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
  }, []);
  var onSearching = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_15__["UPDATE_SEARCH"],
      data: {
        select: select,
        searchword: searchword
      }
    });
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/search/".concat(select, "*").concat(searchword));
  }, []);
  var menu = ['글내용', '글제목', '닉네임'];
  return __jsx("div", {
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
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
      lineNumber: 276,
      columnNumber: 7
    }
  }, __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 9
    }
  }, __jsx(Topbar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 11
    }
  }, __jsx(TopDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }
  }, !me ? __jsx("div", {
    onClick: onLogIn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 18
    }
  }, "\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785") : __jsx("div", {
    onClick: onLogOut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 18
    }
  }, "\uB85C\uADF8\uC544\uC6C3"), __jsx("div", {
    style: {
      paddingLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 15
    }
  }, "\uB0B4\uC0C1\uC810"))), __jsx(NavBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 11
    }
  }, __jsx(NavBarDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }
  }, __jsx(MenuDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, __jsx(LogoDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"].Brand, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 19
    }
  }, __jsx("img", {
    alt: "",
    src: _logo2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    width: "245px;",
    height: "45px",
    className: "d-inline-block align-top",
    style: {
      paddingTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 21
    }
  }))), __jsx(MenuA, {
    style: {
      paddingBottom: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 17
    }
  }, !isOpen ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MenuOutlined"], {
    style: {
      fontSize: "20px"
    },
    onClick: toggleMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 21
    }
  }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CloseOutlined"], {
    style: {
      fontSize: "20px"
    },
    onClick: toggleMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 21
    }
  }), isOpen ? __jsx(NavActive, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 21
    }
  }, _MenuItems__WEBPACK_IMPORTED_MODULE_4__["MenuItems"].map(function (item, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, index === 0 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/objectrecieve",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 77
      }
    }, item.title))), index === 1 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/objectsend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 74
      }
    }, item.title))), index === 2 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/talentrecieve",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 77
      }
    }, item.title))), index === 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/talentsend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 74
      }
    }, item.title))), index === 4 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/cooperate",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 53
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 73
      }
    }, item.title))), index === 5 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/playground",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 74
      }
    }, item.title))));
  })) : __jsx(NavMenu, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 36
    }
  }))), __jsx("div", {
    style: {
      paddingLeft: "160px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 15
    }
  }, __jsx(SelcectDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 17
    }
  }, __jsx(SelectDropD, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    style: {
      width: 120
    },
    defaultValue: menu[0],
    onChange: onCategory,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 21
    }
  }, menu.map(function (tag) {
    return __jsx(Option, {
      value: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 25
      }
    }, tag);
  }))), __jsx(_AppLayout_styles__WEBPACK_IMPORTED_MODULE_16__["SearchInput"], {
    placeholder: "지역, 상품명 입력",
    value: searchword,
    onChange: onSearchword,
    onSearch: onSearching,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
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
      lineNumber: 351,
      columnNumber: 19
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SearchOutlined"], {
    onClick: onSearching,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 21
    }
  })))), __jsx(ProfileDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 15
    }
  }, __jsx(UserDiv, {
    onClick: goProfile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 19
    }
  }), " \uB0B4\uD504\uB85C\uD544"), __jsx(UserDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MailOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 19
    }
  }), " \uC54C\uB9BC\uD1A1"), __jsx(UserDiv, {
    onClick: onWrite,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["FormOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
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
      lineNumber: 370,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    gutter: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 7,
    md: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 11,
    md: 11,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 13
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 6,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 13
    }
  }))), __jsx(PlaceDiv, {
    onClick: PlaceClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      paddingLeft: "4px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["AimOutlined"], {
    style: {
      paddingRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 13
    }
  }), "\uB3D9\uB124 \uC124\uC815"), __jsx(_SearchLocation__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
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
      lineNumber: 386,
      columnNumber: 13
    }
  }, local) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 13
    }
  }))));
}

_s(Layout, "GGxF+Cj4ycCF94LYXurudlCy4qc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_12__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_13__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiT3B0aW9uIiwiU2VsZWN0IiwiVG9wYmFyIiwic3R5bGVkIiwiZGl2IiwiVG9wRGl2IiwiTmF2QmFyIiwiTmF2QmFyRGl2IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlNlbGNlY3REaXYiLCJTZWxlY3REcm9wRCIsIlByb2ZpbGVEaXYiLCJVc2VyRGl2IiwiTmF2TWVudSIsInVsIiwiTmF2QWN0aXZlIiwiTWVudUxpIiwibGkiLCJNZW51RGl2IiwiTG9nb0RpdiIsIk1lbnVBIiwiUGxhY2VEaXYiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibG9jYWwiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE1lbnUiLCJwcm9maWxlIiwiU2V0UHJvZmlsZSIsInNlbGVjdCIsIlNldFNlbGVjdCIsInBsYWNlIiwiU2V0UGxhY2UiLCJ1c2VJbnB1dCIsInNlYXJjaHdvcmQiLCJvblNlYXJjaHdvcmQiLCJzZXRTZWFyY2h3b3JkIiwiUGxhY2VDbGljayIsInRvZ2dsZU1lbnUiLCJnb1Byb2ZpbGUiLCJjb25zb2xlIiwibG9nIiwiUm91dGVyIiwicHVzaCIsInRhZ3MxIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsIm9uQ2F0ZWdvcnkiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwib25Xcml0ZSIsIm9uTG9nSW4iLCJvbkxvZ091dCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJvblNlYXJjaGluZyIsInR5cGUiLCJVUERBVEVfU0VBUkNIIiwiZGF0YSIsIm1lbnUiLCJ3aWR0aCIsInBvc2l0aW9uIiwicGFkZGluZ0xlZnQiLCJsb2dvIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJmb250U2l6ZSIsIk1lbnVJdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwidGFnIiwibWFyZ2luVG9wIiwiekluZGV4IiwicGFkZGluZ1JpZ2h0IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFPQSxNQUFQLEdBQWlCQywyQ0FBakIsQ0FBT0QsTUFBUDtBQUVBLElBQU1FLE1BQU0sZ0JBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0tBQVo7S0FBTUYsTTtBQVlOLElBQU1HLE1BQU0sZ0JBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkhBQVo7TUFBTUMsTTtBQVVOLElBQU1DLE1BQU0sZ0JBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEhBQVo7TUFBTUUsTTtBQVdOLElBQU1DLFNBQVMsZ0JBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUdBQWY7TUFBTUcsUztBQVVOLElBQU1DLFdBQVcsZ0JBQUdDLDJFQUFILHdFQUFqQjtNQUFNRCxXO0FBYU4sSUFBTUUsVUFBVSxnQkFBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnR0FBaEI7TUFBTU0sVTtBQVNOLElBQU1DLFdBQVcsZ0JBQUdSLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ01BQWpCLEMsQ0FvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztNQTVCTU8sVztBQTZCTixJQUFNQyxVQUFVLGdCQUFHVCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtEQUFoQjtNQUFNUSxVO0FBT04sSUFBTUMsT0FBTyxnQkFBR1YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzSUFBYjtNQUFNUyxPO0FBWU4sSUFBTUMsT0FBTyxnQkFBR1gseURBQU0sQ0FBQ1ksRUFBVjtBQUFBO0FBQUE7QUFBQSxtRkFBYjtPQUFNRCxPO0FBUU4sSUFBTUUsU0FBUyxnQkFBR2IseURBQU0sQ0FBQ1ksRUFBVjtBQUFBO0FBQUE7QUFBQSxvQ0FBZjtPQUFNQyxTO0FBS04sSUFBTUMsTUFBTSxnQkFBR2QseURBQU0sQ0FBQ2UsRUFBVjtBQUFBO0FBQUE7QUFBQSwyTUFBWjtPQUFNRCxNO0FBd0JOLElBQU1FLE9BQU8sZ0JBQUdoQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9FQUFiO09BQU1lLE87QUFNTixJQUFNQyxPQUFPLGdCQUFHakIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1RUFBYjtPQUFNZ0IsTztBQU9OLElBQU1DLEtBQUssZ0JBQUdsQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9DQUFYO09BQU1pQixLO0FBS04sSUFBTUMsUUFBUSxnQkFBR25CLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNk1BQWQ7T0FBTWtCLFE7O0FBc0JOLFNBQVNDLE1BQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDMUIsTUFBTUMsUUFBUSxHQUFHQyxnRUFBVyxFQUE1Qjs7QUFDQSxxQkFBb0JDLGdFQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQS9CO0FBQUEsTUFBT0MsRUFBUCxnQkFBT0EsRUFBUDtBQUFBLE1BQVdDLEtBQVgsZ0JBQVdBLEtBQVg7O0FBQ0Esa0JBQTBCQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEM7QUFBQSxNQUFPQyxNQUFQO0FBQUEsTUFBZUMsT0FBZjs7QUFDQSxtQkFBOEJGLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9HLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTRCSixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPSyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBMEJOLHNEQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9PLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLGtCQUFnREMsZ0VBQVEsQ0FBQyxFQUFELENBQXhEO0FBQUE7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBa0JDLFlBQWxCO0FBQUEsTUFBK0JDLGFBQS9COztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJMLFlBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJaLFdBQU8sQ0FBQyxDQUFDRCxNQUFGLENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1jLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJYLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQVksV0FBTyxDQUFDQyxHQUFSLENBQVlkLE9BQVo7QUFDQWUsdURBQU0sQ0FBQ0MsSUFBUCxDQUFZLFVBQVo7QUFDRCxHQUpEOztBQU1BLG1CQUFnQ25CLHNEQUFRLENBQUNvQixLQUFLLENBQUMsQ0FBRCxDQUFOLENBQXhDO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hDSCxlQUFXLENBQUNHLEtBQUQsQ0FBWDtBQUNELEdBRjZCLEVBRTNCLEVBRjJCLENBQTlCLENBeEIwQixDQTRCMUI7QUFDQTtBQUNBOztBQUVBLE1BQU1DLE9BQU8sR0FBR0YseURBQVcsQ0FBQyxZQUFNO0FBQ2hDTix1REFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNELEdBRjBCLEVBRXhCLEVBRndCLENBQTNCO0FBSUEsTUFBTVEsT0FBTyxHQUFHSCx5REFBVyxDQUFDLFlBQU07QUFDaENOLHVEQUFNLENBQUNDLElBQVAsQ0FBWSxZQUFaO0FBQ0QsR0FGMEIsRUFFeEIsRUFGd0IsQ0FBM0I7QUFJQSxNQUFNUyxRQUFRLEdBQUdKLHlEQUFXLENBQUMsWUFBTTtBQUNqQy9CLFlBQVEsQ0FBQ29DLDJFQUFtQixFQUFwQixDQUFSO0FBQ0FYLHVEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0QsR0FIMkIsRUFHekIsRUFIeUIsQ0FBNUI7QUFLQSxNQUFNVyxXQUFXLEdBQUdOLHlEQUFXLENBQUMsWUFBTTtBQUNwQy9CLFlBQVEsQ0FBQztBQUNQc0MsVUFBSSxFQUFDQyw2REFERTtBQUVQQyxVQUFJLEVBQUM7QUFBQzVCLGNBQU0sRUFBQ0EsTUFBUjtBQUNMSyxrQkFBVSxFQUFDQTtBQUROO0FBRkUsS0FBRCxDQUFSO0FBS0FRLHVEQUFNLENBQUNDLElBQVAsbUJBQXVCZCxNQUF2QixjQUFpQ0ssVUFBakM7QUFDRCxHQVA4QixFQU81QixFQVA0QixDQUEvQjtBQVNBLE1BQU13QixJQUFJLEdBQUcsQ0FBQyxLQUFELEVBQU8sS0FBUCxFQUFhLEtBQWIsQ0FBYjtBQUVBLFNBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFFO0FBQVIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBQ0MsY0FBUSxFQUFFLFVBQVg7QUFBdUJELFdBQUssRUFBRTtBQUE5QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDckMsRUFBRCxHQUNFO0FBQUssV0FBTyxFQUFFNkIsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQURGLEdBRUU7QUFBSyxXQUFPLEVBQUVDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FITCxFQUlFO0FBQUssU0FBSyxFQUFFO0FBQUNTLGlCQUFXLEVBQUU7QUFBZCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSkYsQ0FERixDQURGLEVBV0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFELENBQVEsS0FBUjtBQUFjLFFBQUksRUFBQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsRUFETjtBQUVFLE9BQUcsRUFBRUMsaURBRlA7QUFHRSxTQUFLLEVBQUMsUUFIUjtBQUlFLFVBQU0sRUFBQyxNQUpUO0FBS0UsYUFBUyxFQUFDLDBCQUxaO0FBTUUsU0FBSyxFQUFFO0FBQUNDLGdCQUFVLEVBQUU7QUFBYixLQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFhRSxNQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUU7QUFBQ0MsbUJBQWEsRUFBRTtBQUFoQixLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDdkMsTUFBRCxHQUNDLE1BQUMsOERBQUQ7QUFBYyxTQUFLLEVBQUU7QUFBQ3dDLGNBQVEsRUFBRTtBQUFYLEtBQXJCO0FBQXlDLFdBQU8sRUFBRTNCLFVBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxHQUdDLE1BQUMsK0RBQUQ7QUFBZSxTQUFLLEVBQUU7QUFBQzJCLGNBQVEsRUFBRTtBQUFYLEtBQXRCO0FBQTBDLFdBQU8sRUFBRTNCLFVBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQU1HYixNQUFNLEdBQ0wsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3lDLG9EQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDOUIsV0FDRSxtRUFDR0EsS0FBSyxLQUFLLENBQVYsSUFDRCxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNEIsTUFBQyxNQUFEO0FBQVEsU0FBRyxFQUFFQSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRCxJQUFJLENBQUNFLEtBQVQsQ0FBcEIsQ0FBNUIsQ0FGRixFQUdHRCxLQUFLLEtBQUssQ0FBVixJQUNELE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXlCLE1BQUMsTUFBRDtBQUFRLFNBQUcsRUFBRUEsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUQsSUFBSSxDQUFDRSxLQUFULENBQXBCLENBQXpCLENBSkYsRUFLR0QsS0FBSyxLQUFLLENBQVYsSUFDRCxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNEIsTUFBQyxNQUFEO0FBQVEsU0FBRyxFQUFFQSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRCxJQUFJLENBQUNFLEtBQVQsQ0FBcEIsQ0FBNUIsQ0FORixFQU9HRCxLQUFLLEtBQUssQ0FBVixJQUNELE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXlCLE1BQUMsTUFBRDtBQUFRLFNBQUcsRUFBRUEsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUQsSUFBSSxDQUFDRSxLQUFULENBQXBCLENBQXpCLENBUkYsRUFTR0QsS0FBSyxLQUFLLENBQVYsSUFDRCxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF3QixNQUFDLE1BQUQ7QUFBUSxTQUFHLEVBQUVBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlELElBQUksQ0FBQ0UsS0FBVCxDQUFwQixDQUF4QixDQVZGLEVBV0dELEtBQUssS0FBSyxDQUFWLElBQ0QsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBeUIsTUFBQyxNQUFEO0FBQVEsU0FBRyxFQUFFQSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRCxJQUFJLENBQUNFLEtBQVQsQ0FBcEIsQ0FBekIsQ0FaRixDQURGO0FBZ0JELEdBakJBLENBREgsQ0FESyxHQW9CVSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCbkIsQ0FiRixDQURGLEVBNENFO0FBQUssU0FBSyxFQUFFO0FBQUNULGlCQUFXLEVBQUU7QUFBZCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUNFLFNBQUssRUFBRTtBQUFDRixXQUFLLEVBQUU7QUFBUixLQURUO0FBRUUsZ0JBQVksRUFBRUQsSUFBSSxDQUFDLENBQUQsQ0FGcEI7QUFHRSxZQUFRLEVBQUVYLFVBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHVyxJQUFJLENBQUNTLEdBQUwsQ0FBUyxVQUFDSSxHQUFEO0FBQUEsV0FDUixNQUFDLE1BQUQ7QUFBUSxXQUFLLEVBQUVBLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFxQkEsR0FBckIsQ0FEUTtBQUFBLEdBQVQsQ0FMSCxDQURGLENBREYsRUFlRSxNQUFDLDhEQUFEO0FBQWEsZUFBVyxFQUFFLFlBQTFCO0FBQXdDLFNBQUssRUFBRXJDLFVBQS9DO0FBQTJELFlBQVEsRUFBRUMsWUFBckU7QUFBbUYsWUFBUSxFQUFFbUIsV0FBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLEVBZ0JFO0FBQUssU0FBSyxFQUFFO0FBQUNTLGdCQUFVLEVBQUUsS0FBYjtBQUFvQkYsaUJBQVcsRUFBRTtBQUFqQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQWdCLFdBQU8sRUFBRVAsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBaEJGLENBREYsQ0E1Q0YsRUFrRUUsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxXQUFPLEVBQUVmLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERiw4QkFERixFQUlFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsd0JBSkYsRUFPRSxNQUFDLE9BQUQ7QUFBUyxXQUFPLEVBQUVXLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERix5QkFQRixDQWxFRixDQURGLENBWEYsQ0FGRixFQThGRTtBQUFLLFNBQUssRUFBRTtBQUFDc0IsZUFBUyxFQUFFLENBQVo7QUFBZUMsWUFBTSxFQUFFLENBQXZCO0FBQTJCZCxXQUFLLEVBQUU7QUFBbEMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzNDLFFBREgsQ0FGRixFQUtFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixDQTlGRixFQXVHRSxNQUFDLFFBQUQ7QUFBVSxXQUFPLEVBQUVxQixVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBQ3dCLGlCQUFXLEVBQUU7QUFBZCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUNhLGtCQUFZLEVBQUU7QUFBZixLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsOEJBREYsRUFLRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1HbkQsS0FBSyxHQUNKO0FBQUssU0FBSyxFQUFFO0FBQUNvRCxXQUFLLEVBQUUsU0FBUjtBQUFtQlYsY0FBUSxFQUFFLE1BQTdCO0FBQXFDTixXQUFLLEVBQUUsT0FBNUM7QUFBcURlLGtCQUFZLEVBQUU7QUFBbkUsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0duRCxLQURILENBREksR0FJSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosQ0F2R0YsQ0FERixDQURGO0FBMEhEOztHQWxMUVIsTTtVQUNVRyx3RCxFQUNHQyx3RCxFQUs0QmMsd0Q7OztPQVB6Q2xCLE07QUFvTE1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk4ZDAyNjQ0NzM0ZDA5NjliZmI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge1xyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBNYWlsT3V0bGluZWQsXHJcbiAgU2VhcmNoT3V0bGluZWQsXHJcbiAgRm9ybU91dGxpbmVkLFxyXG4gIE1lbnVPdXRsaW5lZCxcclxuICBDbG9zZU91dGxpbmVkLFxyXG4gIERvd25PdXRsaW5lZCxcclxuICBBaW1PdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7TWVudUl0ZW1zfSBmcm9tICcuL01lbnVJdGVtcyc7XHJcbmltcG9ydCB7TWVudSwgRHJvcGRvd24sIFJvdywgQ29sICxTZWxlY3R9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuL2xvZ28yLnBuZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7bG9nb3V0UmVxdWVzdEFjdGlvbiwgVVBEQVRFX0xPQ0FMfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IFNlYXJjaExvY2F0aW9uIGZyb20gXCIuL1NlYXJjaExvY2F0aW9uXCI7XHJcbmltcG9ydCB7VVBEQVRFX1NFQVJDSH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHtTZWFyY2hJbnB1dH0gZnJvbSBcIi4vQXBwTGF5b3V0L3N0eWxlc1wiO1xyXG5jb25zdCB7T3B0aW9ufSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IFRvcGJhciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgLy8gYmFja2dyb3VuZDogcmVkO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkICNlZWVlZWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjs7XHJcbiAgYmFja2dyb3VuZDogUkdCKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHBhZGRpbmc6IDAgMzVweDtcclxuYDtcclxuY29uc3QgVG9wRGl2ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB3aWR0aDogODAlO1xyXG4gIGJhY2tnb3VucjogYmx1ZTtcclxuICBmb250LXNpemU6IDEuNmVtO1xyXG4gIGNvbG9yOiBSR0IoMTI3LCAxMjcsIDEyNyk7XHJcbmA7XHJcblxyXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGJhY2tncm91bmQ6cmVkO1xyXG4gIGhlaWdodDogMTQ2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBiYWNrZ3JvdW5kOnllbGxvdztcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAjZWVlZWVlO1xyXG4gIHBhZGRpbmc6IDAgMzVweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuYDtcclxuY29uc3QgTmF2QmFyRGl2ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kOmJsdWU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICBkaXYge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTZWxjZWN0RGl2ID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogIzIxMmE0YjtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogc29saWQgIzIxMmE0YjtcclxuICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OjUwcHg7XHJcbmA7XHJcbmNvbnN0IFNlbGVjdERyb3BEID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNjBweDtcclxuICBoaWVnaHQ6IDMwcHg7XHJcbiAgLy8gYmFja2dyb3VuZDpyZWQ7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkICMyMTJhNGI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5gO1xyXG4vLyBjb25zdCBTZWxlY3QgPSBzdHlsZWQuaW5wdXRgXHJcbi8vICAgcGFkZGluZzogMS41JTtcclxuLy8gICB3aWR0aDogMjUwcHg7XHJcbi8vICAgaGllZ2h0OiAzMHB4O1xyXG4vLyAgIGJvcmRlcjogbm9uZTtcclxuLy8gICBmbG9hdDogbGVmdDtcclxuLy8gICAvLyBwYWRkaW5nLWxlZnQ6ODBweDtcclxuLy9cclxuLy8gYDtcclxuY29uc3QgUHJvZmlsZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICAvLyBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5gO1xyXG5jb25zdCBVc2VyRGl2ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIC8vIGJvcmRlci1yaWdodDogc29saWQgI2U2ZTZlNjtcclxuICA6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgI2U2ZTZlNjtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAjZTZlNmU2O1xyXG4gIH1cclxuXHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbmA7XHJcbmNvbnN0IE5hdk1lbnUgPSBzdHlsZWQudWxgXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gdG9wOiA4MHB4O1xyXG4gIC8vIGxlZnQ6LTEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG5gO1xyXG5jb25zdCBOYXZBY3RpdmUgPSBzdHlsZWQudWxgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG5gO1xyXG5jb25zdCBNZW51TGkgPSBzdHlsZWQubGlgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMsIDEuMyk7XHJcbiAgfVxyXG5cclxuICA6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbmA7XHJcbmNvbnN0IE1lbnVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAyMDBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuYDtcclxuY29uc3QgTG9nb0RpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6cmVkO1xyXG5gO1xyXG5jb25zdCBNZW51QSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDkwcHg7XHJcbiAgLy8gbWlud2lkdGg6MTIwcHg7XHJcbmA7XHJcbmNvbnN0IFBsYWNlRGl2ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6cmVkO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB0b3A6IDIwMHB4O1xyXG4gIGxlZnQ6IDEzNTBweDtcclxuICByaWdodDogMTQ4NXB4O1xyXG4gIGJvdHRvbTogMjE5cHg7XHJcbiAgLy8gYm9yZGVyOnNvbGlkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjMpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVufSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7bWUsIGxvY2FsfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Byb2ZpbGUsIFNldFByb2ZpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3QsIFNldFNlbGVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxhY2UsIFNldFBsYWNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNod29yZCxvblNlYXJjaHdvcmQsc2V0U2VhcmNod29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuXHJcbiAgY29uc3QgUGxhY2VDbGljayA9ICgpID0+IHtcclxuICAgIFNldFBsYWNlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldE1lbnUoIWlzT3Blbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnb1Byb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBTZXRQcm9maWxlKHRydWUpO1xyXG4gICAgY29uc29sZS5sb2cocHJvZmlsZSk7XHJcbiAgICBSb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUodGFnczFbMF0pO1xyXG4gIGNvbnN0IG9uQ2F0ZWdvcnkgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgIHNldENhdGVnb3J5KHZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gIC8vICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSW5wdXR9YCk7XHJcbiAgLy8gfSwgW3NlYXJjaElucHV0XSk7XHJcblxyXG4gIGNvbnN0IG9uV3JpdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL3dyaXRlJyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkxvZ0luID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbnBhZ2UnKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0UmVxdWVzdEFjdGlvbigpKTtcclxuICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblNlYXJjaGluZyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTpVUERBVEVfU0VBUkNILFxyXG4gICAgICBkYXRhOntzZWxlY3Q6c2VsZWN0LFxyXG4gICAgICBzZWFyY2h3b3JkOnNlYXJjaHdvcmQsfVxyXG4gICAgfSk7XHJcbiAgICBSb3V0ZXIucHVzaChgL3NlYXJjaC8ke3NlbGVjdH0qJHtzZWFyY2h3b3JkfWApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbWVudSA9IFsn6riA64K07JqpJywn6riA7KCc66qpJywn64uJ64Sk7J6EJ107XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCIxMDAlXCJ9fT5cclxuICAgICAgICA8R2xvYmFsU3R5bGUvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8VG9wYmFyPlxyXG4gICAgICAgICAgICA8VG9wRGl2PlxyXG4gICAgICAgICAgICAgIHshbWUgP1xyXG4gICAgICAgICAgICAgICAgKDxkaXYgb25DbGljaz17b25Mb2dJbn0+66Gc6re47J24L+2ajOybkOqwgOyehTwvZGl2PikgOlxyXG4gICAgICAgICAgICAgICAgKDxkaXYgb25DbGljaz17b25Mb2dPdXR9PuuhnOq3uOyVhOybgzwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OiBcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAg64K07IOB7KCQXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVG9wRGl2PlxyXG4gICAgICAgICAgPC9Ub3BiYXI+XHJcbiAgICAgICAgICA8TmF2QmFyPlxyXG4gICAgICAgICAgICA8TmF2QmFyRGl2PlxyXG4gICAgICAgICAgICAgIDxNZW51RGl2PlxyXG4gICAgICAgICAgICAgICAgPExvZ29EaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNDVweDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICA8L0xvZ29EaXY+XHJcbiAgICAgICAgICAgICAgICA8TWVudUEgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICB7IWlzT3BlbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVPdXRsaW5lZCBzdHlsZT17e2ZvbnRTaXplOiBcIjIwcHhcIn19IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPENsb3NlT3V0bGluZWQgc3R5bGU9e3tmb250U2l6ZTogXCIyMHB4XCJ9fSBvbkNsaWNrPXt0b2dnbGVNZW51fS8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge2lzT3BlbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkFjdGl2ZT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtNZW51SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb2JqZWN0cmVjaWV2ZVwiPjxNZW51TGkga2V5PXtpbmRleH0+PGE+e2l0ZW0udGl0bGV9PC9hPjwvTWVudUxpPjwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb2JqZWN0c2VuZFwiPjxNZW51TGkga2V5PXtpbmRleH0+PGE+e2l0ZW0udGl0bGV9PC9hPjwvTWVudUxpPjwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IDIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGFsZW50cmVjaWV2ZVwiPjxNZW51TGkga2V5PXtpbmRleH0+PGE+e2l0ZW0udGl0bGV9PC9hPjwvTWVudUxpPjwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IDMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGFsZW50c2VuZFwiPjxNZW51TGkga2V5PXtpbmRleH0+PGE+e2l0ZW0udGl0bGV9PC9hPjwvTWVudUxpPjwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IDQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29vcGVyYXRlXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gNSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wbGF5Z3JvdW5kXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZBY3RpdmU+IDogPE5hdk1lbnUvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L01lbnVBPlxyXG4gICAgICAgICAgICAgIDwvTWVudURpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMTYwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPFNlbGNlY3REaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3REcm9wRD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAxMjB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXttZW51WzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge21lbnUubWFwKCh0YWcpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17dGFnfT57dGFnfTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3REcm9wRD5cclxuICAgICAgICAgICAgICAgICAgey8qPFNlbGVjdCBwbGFjZWhvbGRlcj17XCLsp4Dsl60sIOyDge2SiOuqhSDsnoXroKVcIn0gdmFsdWU9e3NlYXJjaHdvcmR9IG9uQ2hhbmdlPXtvblNlYXJjaHdvcmR9Lz4qL31cclxuICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0IHBsYWNlaG9sZGVyPXtcIuyngOyXrSwg7IOB7ZKI66qFIOyeheugpVwifSB2YWx1ZT17c2VhcmNod29yZH0gb25DaGFuZ2U9e29uU2VhcmNod29yZH0gb25TZWFyY2g9e29uU2VhcmNoaW5nfS8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjNweFwiLCBwYWRkaW5nTGVmdDogXCIxMTVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaE91dGxpbmVkIG9uQ2xpY2s9e29uU2VhcmNoaW5nfS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9TZWxjZWN0RGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxQcm9maWxlRGl2PlxyXG4gICAgICAgICAgICAgICAgPFVzZXJEaXYgb25DbGljaz17Z29Qcm9maWxlfT5cclxuICAgICAgICAgICAgICAgICAgPFVzZXJPdXRsaW5lZC8+IOuCtO2UhOuhnO2VhFxyXG4gICAgICAgICAgICAgICAgPC9Vc2VyRGl2PlxyXG4gICAgICAgICAgICAgICAgPFVzZXJEaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxNYWlsT3V0bGluZWQvPiDslYzrprzthqFcclxuICAgICAgICAgICAgICAgIDwvVXNlckRpdj5cclxuICAgICAgICAgICAgICAgIDxVc2VyRGl2IG9uQ2xpY2s9e29uV3JpdGV9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybU91dGxpbmVkLz4g6riAIOyTsOq4sFxyXG4gICAgICAgICAgICAgICAgPC9Vc2VyRGl2PlxyXG4gICAgICAgICAgICAgIDwvUHJvZmlsZURpdj5cclxuICAgICAgICAgICAgPC9OYXZCYXJEaXY+XHJcbiAgICAgICAgICA8L05hdkJhcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAwLCB6SW5kZXg6IDUgLCB3aWR0aDogJzkwJSd9fT5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cclxuICAgICAgICAgICAgPENvbCB4cz17N30gbWQ9ezd9Lz5cclxuICAgICAgICAgICAgPENvbCB4cz17MTF9IG1kPXsxMX0+XHJcbiAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz17Nn0gbWQ9ezZ9Lz5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQbGFjZURpdiBvbkNsaWNrPXtQbGFjZUNsaWNrfT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDogXCI0cHhcIn19PlxyXG4gICAgICAgICAgICA8QWltT3V0bGluZWQgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IFwiMTBweFwifX0vPlxyXG4gICAgICAgICAgICDrj5nrhKQg7ISk7KCVXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTZWFyY2hMb2NhdGlvbi8+XHJcbiAgICAgICAgICB7bG9jYWwgP1xyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6IFwiIzE1MjU0ZFwiLCBmb250U2l6ZTogXCIyNXB4XCIsIHdpZHRoOiBcIjExNHB4XCIsIHBhZGRpbmdSaWdodDogXCJcIn19PlxyXG4gICAgICAgICAgICAgIHtsb2NhbH1cclxuICAgICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9QbGFjZURpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==