webpackHotUpdate_N_E("pages/post/[id]",{

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


var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\components\\Layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















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
})(["width:60px;hieght:30px;padding-top:4px;font-size:13px;font-weight:600;border-right:solid #212a4b;align-items:center;padding-left:5px;min-width:60px;a{color:black;}a:hover{color:black;}"]);
_c7 = SelectDropD;
var Select = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "Layout__Select",
  componentId: "sc-139bv3m-6"
})(["padding:1.5%;width:250px;hieght:30px;border:none;float:left;"]);
_c8 = Select;
var ProfileDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__ProfileDiv",
  componentId: "sc-139bv3m-7"
})(["width:400px;height:28px;display:flex;padding-left:50px;"]);
_c9 = ProfileDiv;
var UserDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__UserDiv",
  componentId: "sc-139bv3m-8"
})(["width:120px;height:26px;:nth-child(2){border-right:solid #e6e6e6;border-left:solid #e6e6e6;}padding-top:2px;padding-left:28px;"]);
_c10 = UserDiv;
var NavMenu = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Layout__NavMenu",
  componentId: "sc-139bv3m-9"
})(["flex-direction:column;width:100%;position:absolute;transition:all .5s ease;"]);
_c11 = NavMenu;
var NavActive = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Layout__NavActive",
  componentId: "sc-139bv3m-10"
})(["position:absolute;z-index:1;"]);
_c12 = NavActive;
var MenuLi = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Layout__MenuLi",
  componentId: "sc-139bv3m-11"
})(["text-align:center;padding-bottom:40px;font-weight:600;font-size:20px;transition:all 0.25s ease;:hover{transform:scale(1.3,1.3);}:first-child{padding-top:20px;}a{color:black;}a:hover{color:black;}"]);
_c13 = MenuLi;
var MenuDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__MenuDiv",
  componentId: "sc-139bv3m-12"
})(["width:200px;flex-wrap:wrap;padding-top:30px;min-width:200px;"]);
_c14 = MenuDiv;
var LogoDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__LogoDiv",
  componentId: "sc-139bv3m-13"
})(["width:260px;position:absolute;padding-top:25px;min-height:50px;"]);
_c15 = LogoDiv;
var MenuA = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__MenuA",
  componentId: "sc-139bv3m-14"
})(["width:30px;padding-top:90px;"]);
_c16 = MenuA;
var PlaceDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__PlaceDiv",
  componentId: "sc-139bv3m-15"
})(["position:fixed;width:200px;height:30px;top:200px;left:1350px;right:1485px;bottom:219px;text-align:center;font-weight:600;font-size:20px;:hover{transform:scale(1.3,1.3);}display:flex;flex-wrap:wrap;"]);
_c17 = PlaceDiv;

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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      place = _useState3[0],
      SetPlace = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("글제목"),
      select = _useState4[0],
      setSelect = _useState4[1];

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_13__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      searchword = _useInput2[0],
      onSearchWord = _useInput2[1],
      setSearchWord = _useInput2[2];

  var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    key: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }
  }, __jsx("a", {
    onClick: function onClick() {
      setSelect("글제목");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }, "\uAE00\uC81C\uBAA9")), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }
  }, __jsx("a", {
    onClick: function onClick() {
      setSelect("글내용");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }, "\uAE00\uB0B4\uC6A9")));

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
  }, [select, searchword]);
  return __jsx("div", {
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
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
      lineNumber: 277,
      columnNumber: 7
    }
  }, __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }, __jsx(Topbar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 11
    }
  }, __jsx(TopDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  }, !me ? __jsx("div", {
    onClick: onLogIn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 18
    }
  }, "\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785") : __jsx("div", {
    onClick: onLogOut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 18
    }
  }, "\uB85C\uADF8\uC544\uC6C3"), __jsx("div", {
    style: {
      paddingLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 15
    }
  }, "\uB0B4\uC0C1\uC810"))), __jsx(NavBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 11
    }
  }, __jsx(NavBarDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 13
    }
  }, __jsx(MenuDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 15
    }
  }, __jsx(LogoDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"].Brand, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
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
      lineNumber: 295,
      columnNumber: 21
    }
  }))), __jsx(MenuA, {
    style: {
      paddingBottom: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
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
      lineNumber: 307,
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
      lineNumber: 309,
      columnNumber: 21
    }
  }), isOpen ? __jsx(NavActive, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 21
    }
  }, _MenuItems__WEBPACK_IMPORTED_MODULE_4__["MenuItems"].map(function (item, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, index === 0 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/objectrecieve",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: "a",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 75
      }
    }, item.title))), index === 1 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/objectsend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: "b",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 72
      }
    }, item.title))), index === 2 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/talentrecieve",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: "c",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 75
      }
    }, item.title))), index === 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/talentsend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: "d",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 72
      }
    }, item.title))), index === 4 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/cooperate",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: "e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 53
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 71
      }
    }, item.title))), index === 5 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/playground",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: "f",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 72
      }
    }, item.title))));
  })) : __jsx(NavMenu, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 36
    }
  }))), __jsx("div", {
    style: {
      paddingLeft: "160px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 15
    }
  }, __jsx(SelcectDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 17
    }
  }, __jsx(SelectDropD, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
    overlay: menu,
    trigger: ['click'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "ant-dropdown-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 23
    }
  }, select, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["DownOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 34
    }
  })))), __jsx(Select, {
    placeholder: "지역, 상품명 입력",
    value: searchword,
    onChange: onSearchWord,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
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
      lineNumber: 345,
      columnNumber: 19
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SearchOutlined"], {
    onClick: onSearching,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 21
    }
  })))), __jsx(ProfileDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 15
    }
  }, __jsx(UserDiv, {
    onClick: goProfile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 19
    }
  }), " \uB0B4\uD504\uB85C\uD544"), __jsx(UserDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MailOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 19
    }
  }), " \uC54C\uB9BC\uD1A1"), __jsx(UserDiv, {
    onClick: onWrite,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["FormOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
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
      lineNumber: 364,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    gutter: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 7,
    md: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 11,
    md: 11,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 13
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 6,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 13
    }
  }))), __jsx(PlaceDiv, {
    onClick: PlaceClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      paddingLeft: "4px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["AimOutlined"], {
    style: {
      paddingRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 13
    }
  }), "\uB3D9\uB124 \uC124\uC815"), __jsx(_SearchLocation__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
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
      lineNumber: 380,
      columnNumber: 13
    }
  }, local) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 13
    }
  }))));
}

_s(Layout, "Zb0PnR4M0iYSVMxin7aoadGvrDI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_12__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_13__["default"]];
});

_c18 = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18;

$RefreshReg$(_c, "Topbar");
$RefreshReg$(_c2, "TopDiv");
$RefreshReg$(_c3, "NavBar");
$RefreshReg$(_c4, "NavBarDiv");
$RefreshReg$(_c5, "GlobalStyle");
$RefreshReg$(_c6, "SelcectDiv");
$RefreshReg$(_c7, "SelectDropD");
$RefreshReg$(_c8, "Select");
$RefreshReg$(_c9, "ProfileDiv");
$RefreshReg$(_c10, "UserDiv");
$RefreshReg$(_c11, "NavMenu");
$RefreshReg$(_c12, "NavActive");
$RefreshReg$(_c13, "MenuLi");
$RefreshReg$(_c14, "MenuDiv");
$RefreshReg$(_c15, "LogoDiv");
$RefreshReg$(_c16, "MenuA");
$RefreshReg$(_c17, "PlaceDiv");
$RefreshReg$(_c18, "Layout");

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

/***/ }),

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/AppLayout/AppLayout */ "./components/AppLayout/AppLayout.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_PostImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PostImages */ "./components/PostImages.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");


var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\pages\\post\\[id].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










function PostPage() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.query.id; // [tag].js 파일 명의 [] 부분이 들어간다

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      singlePost = _useSelector.singlePost,
      mainPosts = _useSelector.mainPosts,
      hasMorePost = _useSelector.hasMorePost,
      loadPostLoading = _useSelector.loadPostLoading,
      local = _useSelector.local;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      userInfo = _useSelector2.userInfo,
      me = _useSelector2.me;

  var idAndBoardNum = id.split('*');
  var postId = idAndBoardNum[0];
  var postBoardNum = idAndBoardNum[1];

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_SPOST_REQUEST"],
      postId: postId,
      postBoardNum: postBoardNum
    });
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, singlePost && __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    layout: "horizontal",
    form: form,
    initialValues: {
      layout: 'horizontal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, singlePost.boardNum === 1 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, singlePost.ProdPostImages.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    cover: __jsx(_components_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      images: singlePost.ProdPostImages,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 24
      }
    }),
    title: singlePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 16
    }
  }, singlePost.content) : __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    title: singlePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, singlePost.content)), singlePost.boardNum === 2 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, singlePost.ProdPostImages.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    cover: __jsx(_components_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      images: singlePost.ProdPostImages,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 22
      }
    }),
    title: singlePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 14
    }
  }, singlePost.content) : __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    title: singlePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, singlePost.content)), singlePost.boardNum === 3 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, singlePost.PowerPostImages.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    cover: __jsx(_components_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      images: singlePost.PowerPostImages,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 22
      }
    }),
    title: singlePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 14
    }
  }, singlePost.content) : __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    title: singlePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, singlePost.content)), singlePost.boardNum === 4 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, singlePost.PowerPostImages.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    cover: __jsx(_components_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      images: singlePost.PowerPostImages,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 22
      }
    }),
    title: singlePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 14
    }
  }, singlePost.content) : __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    title: singlePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, singlePost.content)), singlePost.boardNum === 5 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, singlePost.TogetherPostImages.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    cover: __jsx(_components_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      images: singlePost.TogetherPostImages,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 22
      }
    }),
    title: singlePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 14
    }
  }, singlePost.content) : __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    title: singlePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, singlePost.content))));
}

_s(PostPage, "tiVFDE9kRTduMcgQjx1gtff3kLE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm];
});

_c = PostPage;
/* harmony default export */ __webpack_exports__["default"] = (PostPage);

var _c;

$RefreshReg$(_c, "PostPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, UPDATE_SEARCH, UPDATE_BOARD, LOAD_CHANGE_TAG_REQUEST, LOAD_CHANGE_TAG_SUCCESS, LOAD_CHANGE_TAG_FAILURE, SEND_DUMMYPOST_REQUEST, SEND_DUMMYPOST_SUCCESS, SEND_DUMMYPOST_FAILURE, LOAD_SEARCH_POSTS_REQUEST, LOAD_SEARCH_POSTS_SUCCESS, LOAD_SEARCH_POSTS_FAILURE, MODIFY_POST_REQUEST, MODIFY_POST_SUCCESS, MODIFY_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_RELATED_POST_REQUEST, LOAD_RELATED_POST_SUCCESS, LOAD_RELATED_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_LIKED_POSTS_REQUEST, LOAD_LIKED_POSTS_SUCCESS, LOAD_LIKED_POSTS_FAILURE, LOAD_SPOST_REQUEST, LOAD_SPOST_SUCCESS, LOAD_SPOST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_RENTAL_POST_REQUEST, LOAD_RENTAL_POST_SUCCESS, LOAD_RENTAL_POST_FAILURE, LOAD_WRITE_POST_REQUEST, LOAD_WRITE_POST_SUCCESS, LOAD_WRITE_POST_FAILURE, REMOVE_IMAGE, UPDATE_TAG, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SEARCH", function() { return UPDATE_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOARD", function() { return UPDATE_BOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHANGE_TAG_REQUEST", function() { return LOAD_CHANGE_TAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHANGE_TAG_SUCCESS", function() { return LOAD_CHANGE_TAG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHANGE_TAG_FAILURE", function() { return LOAD_CHANGE_TAG_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_DUMMYPOST_REQUEST", function() { return SEND_DUMMYPOST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_DUMMYPOST_SUCCESS", function() { return SEND_DUMMYPOST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_DUMMYPOST_FAILURE", function() { return SEND_DUMMYPOST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_POSTS_REQUEST", function() { return LOAD_SEARCH_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_POSTS_SUCCESS", function() { return LOAD_SEARCH_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_POSTS_FAILURE", function() { return LOAD_SEARCH_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_REQUEST", function() { return MODIFY_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_SUCCESS", function() { return MODIFY_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_FAILURE", function() { return MODIFY_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_REQUEST", function() { return LOAD_RELATED_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_SUCCESS", function() { return LOAD_RELATED_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_FAILURE", function() { return LOAD_RELATED_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_REQUEST", function() { return LOAD_LIKED_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_SUCCESS", function() { return LOAD_LIKED_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_FAILURE", function() { return LOAD_LIKED_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_REQUEST", function() { return LOAD_SPOST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_SUCCESS", function() { return LOAD_SPOST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_FAILURE", function() { return LOAD_SPOST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_REQUEST", function() { return LOAD_RENTAL_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_SUCCESS", function() { return LOAD_RENTAL_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_FAILURE", function() { return LOAD_RENTAL_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_REQUEST", function() { return LOAD_WRITE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_SUCCESS", function() { return LOAD_WRITE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_FAILURE", function() { return LOAD_WRITE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TAG", function() { return UPDATE_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  mainPosts: [],
  imagePaths: [],
  object_TagsData: ['전체', '공구', '의류', '전자기기', '서적', '게임/취미', '차량', '스포츠/래저', '뷰티/미용', '반려동물', '기타'],
  talent_TagsData: ['전체', '미술', '구충', '설치', '코칭', '촬영', '일손', '기타'],
  cooperate_tagsData: ['전체', '1+1', '배달', '공동구매', '기타'],
  play_tagsData: ['전체', '질문', '자유'],
  boardNum: null,
  inputSearch: null,
  select: null,
  selectedTag: null,
  category: null,
  searchResultId: null,
  singlePost: null,
  hasMorePost: true,
  searchPostLoading: false,
  searchPostDone: false,
  searchPostError: null,
  loadProfilePostLoading: false,
  loadProfilePostDone: false,
  loadProfilePostError: null,
  upLoadImagesLoading: false,
  upLoadImagesDone: false,
  upLoadImagesError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadSPostLoading: false,
  loadSPostDone: false,
  loadSPostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadUserPostsLoading: false,
  loadUserPostsDone: false,
  loadUserPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  modifyPostLoading: false,
  modifyPostDone: false,
  modifyPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
var UPDATE_SEARCH = 'UPDATE_SEARCH';
var UPDATE_BOARD = 'UPDATE_BOARD';
var LOAD_CHANGE_TAG_REQUEST = 'LOAD_CHANGE_TAG_REQUEST';
var LOAD_CHANGE_TAG_SUCCESS = 'LOAD_CHANGE_TAG_SUCCESS';
var LOAD_CHANGE_TAG_FAILURE = 'LOAD_CHANGE_TAG_FAILURE';
var SEND_DUMMYPOST_REQUEST = 'SEND_DUMMYPOST_REQUEST';
var SEND_DUMMYPOST_SUCCESS = 'SEND_DUMMYPOST_SUCCESS';
var SEND_DUMMYPOST_FAILURE = 'SEND_DUMMYPOST_FAILURE';
var LOAD_SEARCH_POSTS_REQUEST = 'LOAD_SEARCH_POSTS_REQUEST';
var LOAD_SEARCH_POSTS_SUCCESS = 'LOAD_SEARCH_POSTS_SUCCESS';
var LOAD_SEARCH_POSTS_FAILURE = 'LOAD_SEARCH_POSTS_FAILURE';
var MODIFY_POST_REQUEST = 'MODIFY_POST_REQUEST';
var MODIFY_POST_SUCCESS = 'MODIFY_POST_SUCCESS';
var MODIFY_POST_FAILURE = 'MODIFY_POST_FAILURE';
var UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
var UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
var UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
var LOAD_RELATED_POST_REQUEST = 'LOAD_RELATED_POST_REQUEST';
var LOAD_RELATED_POST_SUCCESS = 'LOAD_RELATED_POST_SUCCESS';
var LOAD_RELATED_POST_FAILURE = 'LOAD_RELATED_POST_FAILURE';
var LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
var LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
var LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
var LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
var LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
var LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
var LOAD_LIKED_POSTS_REQUEST = 'LOAD_LIKED_POSTS_REQUEST';
var LOAD_LIKED_POSTS_SUCCESS = 'LOAD_LIKED_POSTS_SUCCESS';
var LOAD_LIKED_POSTS_FAILURE = 'LOAD_LIKED_POSTS_FAILURE';
var LOAD_SPOST_REQUEST = 'LOAD_SPOST_REQUEST';
var LOAD_SPOST_SUCCESS = 'LOAD_SPOST_SUCCESS';
var LOAD_SPOST_FAILURE = 'LOAD_SPOST_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var LOAD_RENTAL_POST_REQUEST = 'LOAD_RENTAL_POST_REQUEST';
var LOAD_RENTAL_POST_SUCCESS = 'LOAD_RENTAL_POST_SUCCESS';
var LOAD_RENTAL_POST_FAILURE = 'LOAD_RENTAL_POST_FAILURE';
var LOAD_WRITE_POST_REQUEST = 'LOAD_WRITE_POST_REQUEST';
var LOAD_WRITE_POST_SUCCESS = 'LOAD_WRITE_POST_SUCCESS';
var LOAD_WRITE_POST_FAILURE = 'LOAD_WRITE_POST_FAILURE';
var REMOVE_IMAGE = 'REMOVE_IMAGE';
var UPDATE_TAG = 'UPDATE_TAG';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
}; // (이전상태,액션) => 다음상태

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case UPDATE_BOARD:
        draft.boardNum = action.data;
        break;

      case UPDATE_SEARCH:
        draft.inputSearch = action.data.searchword;
        draft.select = action.data.select;
        break;

      case LOAD_CHANGE_TAG_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_CHANGE_TAG_SUCCESS:
        draft.mainPosts = action.data; // 기존 배열 밀어버리고 새롭게 10개씩 넣는다.

        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        break;

      case LOAD_CHANGE_TAG_FAILURE:
        draft.loadPostError = action.error;
        draft.loadPostLoading = false;
        break;

      case LOAD_SEARCH_POSTS_REQUEST:
        draft.searchPostLoading = true;
        draft.searchPostDone = false;
        draft.searchPostError = null;
        break;

      case LOAD_SEARCH_POSTS_SUCCESS:
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.searchPostLoading = false;
        draft.searchPostDone = true;
        draft.hasMorePost = action.data.length === 10;
        break;

      case LOAD_SEARCH_POSTS_FAILURE:
        draft.searchPostError = action.error;
        draft.searchPostLoading = false;
        break;

      case LOAD_RENTAL_POST_REQUEST:
        draft.loadProfilePostLoading = true;
        draft.loadProfilePostDone = false;
        draft.loadProfilePostError = null;
        break;

      case LOAD_RENTAL_POST_SUCCESS:
        {
          if (action.data[0].board_boardnum === 1 || 2 || 3 || 4) {
            // 렌탈 게시물이 쌓이고 있는경우
            draft.mainPosts = draft.mainPosts.concat(action.data);
          } else {
            // 주제가 다른 게시물 덩어리를 가져올 경우
            draft.mainPosts = action.data;
          }

          draft.loadProfilePostLoading = false;
          draft.loadProfilePostDone = true;
          break;
        }

      case LOAD_RENTAL_POST_FAILURE:
        draft.loadProfilePostError = action.error;
        draft.loadProfilePostLoading = false;
        break;

      case LOAD_WRITE_POST_REQUEST:
        draft.loadProfilePostLoading = true;
        draft.loadProfilePostDone = false;
        draft.loadProfilePostError = null;
        break;

      case LOAD_WRITE_POST_SUCCESS:
        {
          if (action.data[0].boardNum === 5 || 6) {
            // 렌탈 게시물이 쌓이고 있는경우
            draft.mainPosts = draft.mainPosts.concat(action.data);
          } else {
            // 주제가 다른 게시물 덩어리를 가져올 경우
            draft.mainPosts = action.data;
          }

          draft.loadProfilePostLoading = false;
          draft.loadProfilePostDone = true;
          break;
        }

      case LOAD_WRITE_POST_FAILURE:
        draft.loadProfilePostError = action.error;
        draft.loadProfilePostLoading = false;
        break;

      case UPDATE_TAG:
        draft.selectedTag = action.data;
        draft.hasMorePost = true;
        break;

      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.upLoadImagesLoading = true;
        draft.upLoadImagesDone = false;
        draft.upLoadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths = action.data;
          draft.upLoadImagesLoading = false;
          draft.upLoadImagesDone = true;
          break;
        }

      case UPLOAD_IMAGES_FAILURE:
        draft.upLoadImagesError = action.error;
        draft.upLoadImagesLoading = false;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostError = action.error;
        draft.likePostLoading = false;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          var _post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post.Likers = _post.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostError = action.error;
        draft.unlikePostLoading = false;
        break;

      case LOAD_SPOST_REQUEST:
        draft.loadSPostLoading = true;
        draft.loadSPostDone = false;
        draft.loadSPostError = null;
        break;

      case LOAD_SPOST_SUCCESS:
        draft.singlePost = action.data;
        draft.loadSPostLoading = false;
        draft.loadSPostDone = true;
        break;

      case LOAD_SPOST_FAILURE:
        draft.loadSPostError = action.error;
        draft.loadSPostLoading = false;
        break;

      case LOAD_LIKED_POSTS_REQUEST:
      case LOAD_RELATED_POST_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_LIKED_POSTS_SUCCESS:
      case LOAD_RELATED_POST_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_POST_SUCCESS:
        if (draft.mainPosts.length > 0) {
          // SSR로 처음에 들고오는 경우가 아닐때
          if (draft.mainPosts[0].category !== action.data[0].category //카테고리 , 지역이 일치하지 않을때
          && draft.mainPosts[0].location !== action.data[0].location) {
            draft.mainPosts = action.data; // 기존 배열 밀어버리고 새롭게 10개씩 넣는다.
            // draft.mainPosts = draft.mainPosts.concat(action.data);
          } else {
            draft.mainPosts = draft.mainPosts.concat(action.data); // 같은속성의 게시물을 쌓고있는 경우
          }
        } else {
          draft.mainPosts = draft.mainPosts.concat(action.data); // SSR로 처음에 들고올때
        }

        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.hasMorePost = action.data.length === 10;
        break;

      case LOAD_LIKED_POSTS_FAILURE:
      case LOAD_RELATED_POST_FAILURE:
      case LOAD_USER_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
      case LOAD_POST_FAILURE:
        draft.loadPostError = action.error;
        draft.loadPostLoading = false;
        break;

      case SEND_DUMMYPOST_REQUEST:
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case SEND_DUMMYPOST_SUCCESS:
      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        break;

      case SEND_DUMMYPOST_FAILURE:
      case ADD_POST_FAILURE:
        draft.addPostError = action.error;
        draft.addPostLoading = false;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data.PostId;
        });
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostError = action.error;
        draft.removePostLoading = false;
        break;

      case MODIFY_POST_REQUEST:
        draft.modifyPostLoading = true;
        draft.modifyPostDone = false;
        draft.modifyPostError = null;
        break;

      case MODIFY_POST_SUCCESS:
        draft.mainPosts.find(function (v) {
          return v.id === action.data.PostId;
        }).content = action.data.content;
        draft.modifyPostLoading = false;
        draft.modifyPostDone = true;
        break;

      case MODIFY_POST_FAILURE:
        draft.modifyPostError = action.error;
        draft.modifyPostLoading = false;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post2.Comments.unshift(action.data);

          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, UPDATE_LOCAL, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LOCAL", function() { return UPDATE_LOCAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_REQUEST", function() { return LOAD_USERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_SUCCESS", function() { return LOAD_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_FAILURE", function() { return LOAD_USERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  loadUserLoading: false,
  // 다른 이용자 정보 로딩
  loadUserDone: false,
  loadUserError: null,
  loadUsersLoading: false,
  // 전체 이용자 리스트 로딩
  loadUsersDone: false,
  loadUsersError: null,
  loadMyInfoLoading: false,
  // 내정보 로딩 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  userInfo: null,
  me: null,
  local: "없음",
  usersInfo: {},
  signUpData: {},
  loginData: {}
};
var UPDATE_LOCAL = 'UPDATE_LOCAL';
var LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
var LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
var LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
var LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
var LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
var LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
var LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
}; // (이전상태,액션) => 다음상태

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case UPDATE_LOCAL:
        draft.local = action.data;
        break;

      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.userInfo = action.data;
        draft.loadUserDone = true;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case LOAD_USERS_REQUEST:
        draft.loadUsersLoading = true;
        draft.loadUsersError = null;
        draft.loadUsersDone = false;
        break;

      case LOAD_USERS_SUCCESS:
        draft.loadUsersLoading = false;
        draft.usersInfo = action.data;
        draft.loadUsersDone = true;
        break;

      case LOAD_USERS_FAILURE:
        draft.loadUsersLoading = false;
        draft.loadUsersError = action.error;
        break;

      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoError = null;
        draft.loadMyInfoDone = false;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.me = action.data;
        draft.loadMyInfoDone = true;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.me = action.data;
        draft.logInDone = true;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        console.log(action.data);

        if (action.data.boardNum === 1 || 2) {
          console.log("1/2"); //console.log(draft.me);

          draft.me.ProdPosts.push({
            id: action.data.id
          });
        } else if (action.data.boardNum === 3 || 4) {
          console.log("3/4");
          draft.me.PowerPosts.push({
            id: action.data.id
          });
        } else if (action.data.boardNum === 5) {
          console.log("5");
          draft.me.TogetherPosts.push({
            id: action.data.id
          });
        }

        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvLmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy91c2VyLmpzIl0sIm5hbWVzIjpbIlRvcGJhciIsInN0eWxlZCIsImRpdiIsIlRvcERpdiIsIk5hdkJhciIsIk5hdkJhckRpdiIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJTZWxjZWN0RGl2IiwiU2VsZWN0RHJvcEQiLCJTZWxlY3QiLCJpbnB1dCIsIlByb2ZpbGVEaXYiLCJVc2VyRGl2IiwiTmF2TWVudSIsInVsIiwiTmF2QWN0aXZlIiwiTWVudUxpIiwibGkiLCJNZW51RGl2IiwiTG9nb0RpdiIsIk1lbnVBIiwiUGxhY2VEaXYiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibG9jYWwiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE1lbnUiLCJwcm9maWxlIiwiU2V0UHJvZmlsZSIsInBsYWNlIiwiU2V0UGxhY2UiLCJzZWxlY3QiLCJzZXRTZWxlY3QiLCJ1c2VJbnB1dCIsInNlYXJjaHdvcmQiLCJvblNlYXJjaFdvcmQiLCJzZXRTZWFyY2hXb3JkIiwibWVudSIsIlBsYWNlQ2xpY2siLCJ0b2dnbGVNZW51IiwiZ29Qcm9maWxlIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJvbldyaXRlIiwidXNlQ2FsbGJhY2siLCJvbkxvZ0luIiwib25Mb2dPdXQiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwib25TZWFyY2hpbmciLCJ0eXBlIiwiVVBEQVRFX1NFQVJDSCIsImRhdGEiLCJ3aWR0aCIsInBvc2l0aW9uIiwicGFkZGluZ0xlZnQiLCJsb2dvIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJmb250U2l6ZSIsIk1lbnVJdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwibWFyZ2luVG9wIiwiekluZGV4IiwicGFkZGluZ1JpZ2h0IiwiY29sb3IiLCJQb3N0UGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJwb3N0Iiwic2luZ2xlUG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RMb2FkaW5nIiwidXNlckluZm8iLCJpZEFuZEJvYXJkTnVtIiwic3BsaXQiLCJwb3N0SWQiLCJwb3N0Qm9hcmROdW0iLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJ1c2VFZmZlY3QiLCJMT0FEX1NQT1NUX1JFUVVFU1QiLCJsYXlvdXQiLCJib2FyZE51bSIsIlByb2RQb3N0SW1hZ2VzIiwibGVuZ3RoIiwiY29udGVudCIsIlBvd2VyUG9zdEltYWdlcyIsIlRvZ2V0aGVyUG9zdEltYWdlcyIsImluaXRpYWxTdGF0ZSIsImltYWdlUGF0aHMiLCJvYmplY3RfVGFnc0RhdGEiLCJ0YWxlbnRfVGFnc0RhdGEiLCJjb29wZXJhdGVfdGFnc0RhdGEiLCJwbGF5X3RhZ3NEYXRhIiwiaW5wdXRTZWFyY2giLCJzZWxlY3RlZFRhZyIsImNhdGVnb3J5Iiwic2VhcmNoUmVzdWx0SWQiLCJzZWFyY2hQb3N0TG9hZGluZyIsInNlYXJjaFBvc3REb25lIiwic2VhcmNoUG9zdEVycm9yIiwibG9hZFByb2ZpbGVQb3N0TG9hZGluZyIsImxvYWRQcm9maWxlUG9zdERvbmUiLCJsb2FkUHJvZmlsZVBvc3RFcnJvciIsInVwTG9hZEltYWdlc0xvYWRpbmciLCJ1cExvYWRJbWFnZXNEb25lIiwidXBMb2FkSW1hZ2VzRXJyb3IiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImxvYWRTUG9zdExvYWRpbmciLCJsb2FkU1Bvc3REb25lIiwibG9hZFNQb3N0RXJyb3IiLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwibG9hZFVzZXJQb3N0c0xvYWRpbmciLCJsb2FkVXNlclBvc3RzRG9uZSIsImxvYWRVc2VyUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwibW9kaWZ5UG9zdExvYWRpbmciLCJtb2RpZnlQb3N0RG9uZSIsIm1vZGlmeVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJVUERBVEVfQk9BUkQiLCJMT0FEX0NIQU5HRV9UQUdfUkVRVUVTVCIsIkxPQURfQ0hBTkdFX1RBR19TVUNDRVNTIiwiTE9BRF9DSEFOR0VfVEFHX0ZBSUxVUkUiLCJTRU5EX0RVTU1ZUE9TVF9SRVFVRVNUIiwiU0VORF9EVU1NWVBPU1RfU1VDQ0VTUyIsIlNFTkRfRFVNTVlQT1NUX0ZBSUxVUkUiLCJMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNUIiwiTE9BRF9TRUFSQ0hfUE9TVFNfU1VDQ0VTUyIsIkxPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkUiLCJNT0RJRllfUE9TVF9SRVFVRVNUIiwiTU9ESUZZX1BPU1RfU1VDQ0VTUyIsIk1PRElGWV9QT1NUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUIiwiTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1NQT1NUX1NVQ0NFU1MiLCJMT0FEX1NQT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1QiLCJMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1JFTlRBTF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1dSSVRFX1BPU1RfUkVRVUVTVCIsIkxPQURfV1JJVEVfUE9TVF9TVUNDRVNTIiwiTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJVUERBVEVfVEFHIiwiYWRkUG9zdCIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJjb25jYXQiLCJib2FyZF9ib2FyZG51bSIsImZpbHRlciIsInYiLCJpIiwiZmluZCIsIlBvc3RJZCIsIkxpa2VycyIsIlVzZXJJZCIsImxvY2F0aW9uIiwidW5zaGlmdCIsIkNvbW1lbnRzIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvYWRVc2Vyc0xvYWRpbmciLCJsb2FkVXNlcnNEb25lIiwibG9hZFVzZXJzRXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsInVzZXJzSW5mbyIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJVUERBVEVfTE9DQUwiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX1VTRVJTX1JFUVVFU1QiLCJMT0FEX1VTRVJTX1NVQ0NFU1MiLCJMT0FEX1VTRVJTX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibmlja25hbWUiLCJQcm9kUG9zdHMiLCJQb3dlclBvc3RzIiwiVG9nZXRoZXJQb3N0cyIsIlBvc3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxnQkFBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzS0FBWjtLQUFNRixNO0FBWU4sSUFBTUcsTUFBTSxnQkFBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwySEFBWjtNQUFNQyxNO0FBVU4sSUFBTUMsTUFBTSxnQkFBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwSEFBWjtNQUFNRSxNO0FBV04sSUFBTUMsU0FBUyxnQkFBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1R0FBZjtNQUFNRyxTO0FBVU4sSUFBTUMsV0FBVyxnQkFBR0MsMkVBQUgsd0VBQWpCO01BQU1ELFc7QUFhTixJQUFNRSxVQUFVLGdCQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdHQUFoQjtNQUFNTSxVO0FBU04sSUFBTUMsV0FBVyxnQkFBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnTUFBakI7TUFBTU8sVztBQW9CTixJQUFNQyxNQUFNLGdCQUFHVCx5REFBTSxDQUFDVSxLQUFWO0FBQUE7QUFBQTtBQUFBLG9FQUFaO01BQU1ELE07QUFTTixJQUFNRSxVQUFVLGdCQUFHWCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtEQUFoQjtNQUFNVSxVO0FBT04sSUFBTUMsT0FBTyxnQkFBR1oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzSUFBYjtPQUFNVyxPO0FBWU4sSUFBTUMsT0FBTyxnQkFBR2IseURBQU0s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c0MsUUFBWixLQUF1QixDQUF2QixJQUEwQixDQUE3QixFQUErQjtBQUNsQ2xELGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0FpSyxlQUFLLENBQUNyTCxFQUFOLENBQVNzUCxVQUFULENBQW9CaE8sSUFBcEIsQ0FBeUI7QUFBQzZCLGNBQUUsRUFBRWdJLE1BQU0sQ0FBQ3BKLElBQVAsQ0FBWW9CO0FBQWpCLFdBQXpCO0FBQ0QsU0FISSxNQUlBLElBQUdnSSxNQUFNLENBQUNwSixJQUFQLENBQVlzQyxRQUFaLEtBQXVCLENBQTFCLEVBQTRCO0FBQy9CbEQsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQWlLLGVBQUssQ0FBQ3JMLEVBQU4sQ0FBU3VQLGFBQVQsQ0FBdUJqTyxJQUF2QixDQUE0QjtBQUFDNkIsY0FBRSxFQUFFZ0ksTUFBTSxDQUFDcEosSUFBUCxDQUFZb0I7QUFBakIsV0FBNUI7QUFDRDs7QUFDRDs7QUFDRixXQUFLK0wsaUJBQUw7QUFDRTdELGFBQUssQ0FBQ3JMLEVBQU4sQ0FBU3dQLEtBQVQsR0FBaUJuRSxLQUFLLENBQUNyTCxFQUFOLENBQVN3UCxLQUFULENBQWUvRCxNQUFmLENBQXNCLFVBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDdkksRUFBRixLQUFTZ0ksTUFBTSxDQUFDcEosSUFBdkI7QUFBQSxTQUF0QixDQUFqQjtBQUNBOztBQUNGO0FBQ0U7QUF6SEo7QUEySEQsR0E1SHdELENBQXpDO0FBQUEsQ0FBaEI7O0FBOEhlbUosc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLjhlYjUyYzRlY2U1Njc1NzhkM2NiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7XHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIE1haWxPdXRsaW5lZCxcclxuICBTZWFyY2hPdXRsaW5lZCxcclxuICBGb3JtT3V0bGluZWQsXHJcbiAgTWVudU91dGxpbmVkLFxyXG4gIENsb3NlT3V0bGluZWQsXHJcbiAgRG93bk91dGxpbmVkLFxyXG4gIEFpbU91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHtNZW51SXRlbXN9IGZyb20gJy4vTWVudUl0ZW1zJztcclxuaW1wb3J0IHtNZW51LCBEcm9wZG93biwgUm93LCBDb2wgLElucHV0fSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9sb2dvMi5wbmcnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge2xvZ291dFJlcXVlc3RBY3Rpb24sIFVQREFURV9MT0NBTH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCBTZWFyY2hMb2NhdGlvbiBmcm9tIFwiLi9TZWFyY2hMb2NhdGlvblwiO1xyXG5pbXBvcnQge1VQREFURV9TRUFSQ0h9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcblxyXG5jb25zdCBUb3BiYXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDElO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmb250LXNpemU6IDAuNmVtO1xyXG4gIC8vIGJhY2tncm91bmQ6IHJlZDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAjZWVlZWVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7O1xyXG4gIGJhY2tncm91bmQ6IFJHQigyNTUsIDI1NSwgMjU1KTtcclxuICBwYWRkaW5nOiAwIDM1cHg7XHJcbmA7XHJcbmNvbnN0IFRvcERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBiYWNrZ291bnI6IGJsdWU7XHJcbiAgZm9udC1zaXplOiAxLjZlbTtcclxuICBjb2xvcjogUkdCKDEyNywgMTI3LCAxMjcpO1xyXG5gO1xyXG5cclxuY29uc3QgTmF2QmFyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBiYWNrZ3JvdW5kOnJlZDtcclxuICBoZWlnaHQ6IDE0NnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gYmFja2dyb3VuZDp5ZWxsb3c7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgI2VlZWVlZTtcclxuICBwYWRkaW5nOiAwIDM1cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcbmNvbnN0IE5hdkJhckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZDpibHVlO1xyXG4gIHBhZGRpbmctbGVmdDogMjAwcHg7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgZGl2IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuYDtcclxuY29uc3QgU2VsY2VjdERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICMyMTJhNGI7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXI6IHNvbGlkICMyMTJhNGI7XHJcbiAgbWluLXdpZHRoOiA0NTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIHBhZGRpbmctbGVmdDo1MHB4O1xyXG5gO1xyXG5jb25zdCBTZWxlY3REcm9wRCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGllZ2h0OiAzMHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6cmVkO1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjMjEyYTRiO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuYDtcclxuY29uc3QgU2VsZWN0ID0gc3R5bGVkLmlucHV0YFxyXG4gIHBhZGRpbmc6IDEuNSU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhpZWdodDogMzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OjgwcHg7XHJcblxyXG5gO1xyXG5jb25zdCBQcm9maWxlRGl2ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbmA7XHJcbmNvbnN0IFVzZXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgLy8gYm9yZGVyLXJpZ2h0OiBzb2xpZCAjZTZlNmU2O1xyXG4gIDpudGgtY2hpbGQoMikge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjZTZlNmU2O1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkICNlNmU2ZTY7XHJcbiAgfVxyXG5cclxuICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjhweDtcclxuYDtcclxuY29uc3QgTmF2TWVudSA9IHN0eWxlZC51bGBcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB0b3A6IDgwcHg7XHJcbiAgLy8gbGVmdDotMTAwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbmA7XHJcbmNvbnN0IE5hdkFjdGl2ZSA9IHN0eWxlZC51bGBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbmA7XHJcbmNvbnN0IE1lbnVMaSA9IHN0eWxlZC5saWBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTtcclxuICB9XHJcblxyXG4gIDpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuYDtcclxuY29uc3QgTWVudURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG5gO1xyXG5jb25zdCBMb2dvRGl2ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMjYwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgLy8gYmFja2dyb3VuZDpyZWQ7XHJcbmA7XHJcbmNvbnN0IE1lbnVBID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMzBweDtcclxuICBwYWRkaW5nLXRvcDogOTBweDtcclxuICAvLyBtaW53aWR0aDoxMjBweDtcclxuYDtcclxuY29uc3QgUGxhY2VEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgLy8gYmFja2dyb3VuZDpyZWQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHRvcDogMjAwcHg7XHJcbiAgbGVmdDogMTM1MHB4O1xyXG4gIHJpZ2h0OiAxNDg1cHg7XHJcbiAgYm90dG9tOiAyMTlweDtcclxuICAvLyBib3JkZXI6c29saWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMsIDEuMyk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIExheW91dCh7Y2hpbGRyZW59KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHttZSwgbG9jYWx9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcHJvZmlsZSwgU2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3BsYWNlLCBTZXRQbGFjZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdCwgc2V0U2VsZWN0XSA9IHVzZVN0YXRlKFwi6riA7KCc66qpXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2h3b3JkLCBvblNlYXJjaFdvcmQsc2V0U2VhcmNoV29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuXHJcbiAgY29uc3QgbWVudSA9IChcclxuICAgIDxNZW51PlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cIjBcIj5cclxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTZWxlY3QoXCLquIDsoJzrqqlcIilcclxuICAgICAgICB9fT7quIDsoJzrqqk8L2E+XHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5cclxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTZWxlY3QoXCLquIDrgrTsmqlcIilcclxuICAgICAgICB9fT7quIDrgrTsmqk8L2E+XHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgPC9NZW51PlxyXG4gIClcclxuXHJcbiAgY29uc3QgUGxhY2VDbGljayA9ICgpID0+IHtcclxuICAgIFNldFBsYWNlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldE1lbnUoIWlzT3Blbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnb1Byb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBTZXRQcm9maWxlKHRydWUpO1xyXG4gICAgY29uc29sZS5sb2cocHJvZmlsZSk7XHJcbiAgICBSb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uV3JpdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL3dyaXRlJyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkxvZ0luID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbnBhZ2UnKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0UmVxdWVzdEFjdGlvbigpKTtcclxuICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblNlYXJjaGluZyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTpVUERBVEVfU0VBUkNILFxyXG4gICAgICBkYXRhOntzZWxlY3Q6c2VsZWN0LCBzZWFyY2h3b3JkOnNlYXJjaHdvcmQsfVxyXG4gICAgfSk7XHJcbiAgICBSb3V0ZXIucHVzaChgL3NlYXJjaC8ke3NlbGVjdH0qJHtzZWFyY2h3b3JkfWApO1xyXG4gIH0sIFtzZWxlY3Qsc2VhcmNod29yZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiMTAwJVwifX0+XHJcbiAgICAgICAgPEdsb2JhbFN0eWxlLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFRvcGJhcj5cclxuICAgICAgICAgICAgPFRvcERpdj5cclxuICAgICAgICAgICAgICB7IW1lID9cclxuICAgICAgICAgICAgICAgICg8ZGl2IG9uQ2xpY2s9e29uTG9nSW59PuuhnOq3uOyduC/tmozsm5DqsIDsnoU8L2Rpdj4pIDpcclxuICAgICAgICAgICAgICAgICg8ZGl2IG9uQ2xpY2s9e29uTG9nT3V0fT7roZzqt7jslYTsm4M8L2Rpdj4pfVxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDogXCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIOuCtOyDgeygkFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1RvcERpdj5cclxuICAgICAgICAgIDwvVG9wYmFyPlxyXG4gICAgICAgICAgPE5hdkJhcj5cclxuICAgICAgICAgICAgPE5hdkJhckRpdj5cclxuICAgICAgICAgICAgICA8TWVudURpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvRGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjQ1cHg7XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgPC9Mb2dvRGl2PlxyXG4gICAgICAgICAgICAgICAgPE1lbnVBIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgeyFpc09wZW4gP1xyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51T3V0bGluZWQgc3R5bGU9e3tmb250U2l6ZTogXCIyMHB4XCJ9fSBvbkNsaWNrPXt0b2dnbGVNZW51fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkIHN0eWxlPXt7Zm9udFNpemU6IFwiMjBweFwifX0gb25DbGljaz17dG9nZ2xlTWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHtpc09wZW4gP1xyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZBY3RpdmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7TWVudUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL29iamVjdHJlY2lldmVcIj48TWVudUxpIGtleT17XCJhXCJ9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL29iamVjdHNlbmRcIj48TWVudUxpIGtleT17XCJiXCJ9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RhbGVudHJlY2lldmVcIj48TWVudUxpIGtleT17XCJjXCJ9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RhbGVudHNlbmRcIj48TWVudUxpIGtleT17XCJkXCJ9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSA0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Nvb3BlcmF0ZVwiPjxNZW51TGkga2V5PXtcImVcIn0+PGE+e2l0ZW0udGl0bGV9PC9hPjwvTWVudUxpPjwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IDUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGxheWdyb3VuZFwiPjxNZW51TGkga2V5PXtcImZcIn0+PGE+e2l0ZW0udGl0bGV9PC9hPjwvTWVudUxpPjwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2QWN0aXZlPiA6IDxOYXZNZW51Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51QT5cclxuICAgICAgICAgICAgICA8L01lbnVEaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OiBcIjE2MHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxTZWxjZWN0RGl2PlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0RHJvcEQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9IHRyaWdnZXI9e1snY2xpY2snXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbnQtZHJvcGRvd24tbGlua1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdH0gPERvd25PdXRsaW5lZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3REcm9wRD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj17XCLsp4Dsl60sIOyDge2SiOuqhSDsnoXroKVcIn0gdmFsdWU9e3NlYXJjaHdvcmR9IG9uQ2hhbmdlPXtvblNlYXJjaFdvcmR9Lz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiM3B4XCIsIHBhZGRpbmdMZWZ0OiBcIjExNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoT3V0bGluZWQgb25DbGljaz17b25TZWFyY2hpbmd9Lz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGNlY3REaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFByb2ZpbGVEaXY+XHJcbiAgICAgICAgICAgICAgICA8VXNlckRpdiBvbkNsaWNrPXtnb1Byb2ZpbGV9PlxyXG4gICAgICAgICAgICAgICAgICA8VXNlck91dGxpbmVkLz4g64K07ZSE66Gc7ZWEXHJcbiAgICAgICAgICAgICAgICA8L1VzZXJEaXY+XHJcbiAgICAgICAgICAgICAgICA8VXNlckRpdj5cclxuICAgICAgICAgICAgICAgICAgPE1haWxPdXRsaW5lZC8+IOyVjOumvO2GoVxyXG4gICAgICAgICAgICAgICAgPC9Vc2VyRGl2PlxyXG4gICAgICAgICAgICAgICAgPFVzZXJEaXYgb25DbGljaz17b25Xcml0ZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtT3V0bGluZWQvPiDquIAg7JOw6riwXHJcbiAgICAgICAgICAgICAgICA8L1VzZXJEaXY+XHJcbiAgICAgICAgICAgICAgPC9Qcm9maWxlRGl2PlxyXG4gICAgICAgICAgICA8L05hdkJhckRpdj5cclxuICAgICAgICAgIDwvTmF2QmFyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IDAsIHpJbmRleDogNSAsIHdpZHRoOiAnOTAlJ319PlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9ezh9PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXs3fSBtZD17N30vPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMX0gbWQ9ezExfT5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17Nn0vPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBsYWNlRGl2IG9uQ2xpY2s9e1BsYWNlQ2xpY2t9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OiBcIjRweFwifX0+XHJcbiAgICAgICAgICAgIDxBaW1PdXRsaW5lZCBzdHlsZT17e3BhZGRpbmdSaWdodDogXCIxMHB4XCJ9fS8+XHJcbiAgICAgICAgICAgIOuPmeuEpCDshKTsoJVcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFNlYXJjaExvY2F0aW9uLz5cclxuICAgICAgICAgIHtsb2NhbCA/XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogXCIjMTUyNTRkXCIsIGZvbnRTaXplOiBcIjI1cHhcIiwgd2lkdGg6IFwiMTE0cHhcIiwgcGFkZGluZ1JpZ2h0OiBcIlwifX0+XHJcbiAgICAgICAgICAgICAge2xvY2FsfVxyXG4gICAgICAgICAgICA8L2Rpdj4gOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L1BsYWNlRGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcExheW91dC9BcHBMYXlvdXQnO1xyXG5pbXBvcnQge0xPQURfU1BPU1RfUkVRVUVTVH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHtBdmF0YXIsIENhcmQsIEZvcm19IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmZ1bmN0aW9uIFBvc3RQYWdlKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7IC8vIFt0YWddLmpzIO2MjOydvCDrqoXsnZggW10g67aA67aE7J20IOuTpOyWtOqwhOuLpFxyXG4gIGNvbnN0IHsgc2luZ2xlUG9zdCxtYWluUG9zdHMsIGhhc01vcmVQb3N0LCBsb2FkUG9zdExvYWRpbmcgLCBsb2NhbCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IHVzZXJJbmZvLCBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgaWRBbmRCb2FyZE51bSA9IGlkLnNwbGl0KCcqJyk7XHJcbiAgY29uc3QgcG9zdElkID0gaWRBbmRCb2FyZE51bVswXTtcclxuICBjb25zdCBwb3N0Qm9hcmROdW0gPSBpZEFuZEJvYXJkTnVtWzFdO1xyXG5cclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6TE9BRF9TUE9TVF9SRVFVRVNULFxyXG4gICAgICBwb3N0SWQ6cG9zdElkLFxyXG4gICAgICBwb3N0Qm9hcmROdW06cG9zdEJvYXJkTnVtLFxyXG4gICAgfSk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPExheW91dD5cclxuICAgICAge3NpbmdsZVBvc3QgJiZcclxuICAgICAgPEZvcm1cclxuICAgICAgICBsYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGxheW91dDogJ2hvcml6b250YWwnLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIHtzaW5nbGVQb3N0LmJvYXJkTnVtID09PSAxICAmJlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3NpbmdsZVBvc3QuUHJvZFBvc3RJbWFnZXMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgKDxDYXJkXHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17PFBvc3RJbWFnZXMgaW1hZ2VzPXtzaW5nbGVQb3N0LlByb2RQb3N0SW1hZ2VzfS8+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3NpbmdsZVBvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3NpbmdsZVBvc3QuY29udGVudH1cclxuICAgICAgICAgICAgICA8L0NhcmQ+KSA6XHJcbiAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3NpbmdsZVBvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtzaW5nbGVQb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAge3NpbmdsZVBvc3QuYm9hcmROdW0gPT09IDIgICYmXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtzaW5nbGVQb3N0LlByb2RQb3N0SW1hZ2VzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAoPENhcmRcclxuICAgICAgICAgICAgICBjb3Zlcj17PFBvc3RJbWFnZXMgaW1hZ2VzPXtzaW5nbGVQb3N0LlByb2RQb3N0SW1hZ2VzfS8+fVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtzaW5nbGVQb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3NpbmdsZVBvc3QuY29udGVudH1cclxuICAgICAgICAgICAgPC9DYXJkPikgOlxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtzaW5nbGVQb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzaW5nbGVQb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtzaW5nbGVQb3N0LmJvYXJkTnVtID09PSAzICAmJlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7c2luZ2xlUG9zdC5Qb3dlclBvc3RJbWFnZXMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICg8Q2FyZFxyXG4gICAgICAgICAgICAgIGNvdmVyPXs8UG9zdEltYWdlcyBpbWFnZXM9e3NpbmdsZVBvc3QuUG93ZXJQb3N0SW1hZ2VzfS8+fVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtzaW5nbGVQb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3NpbmdsZVBvc3QuY29udGVudH1cclxuICAgICAgICAgICAgPC9DYXJkPikgOlxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtzaW5nbGVQb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzaW5nbGVQb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtzaW5nbGVQb3N0LmJvYXJkTnVtID09PSA0ICAmJlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7c2luZ2xlUG9zdC5Qb3dlclBvc3RJbWFnZXMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICg8Q2FyZFxyXG4gICAgICAgICAgICAgIGNvdmVyPXs8UG9zdEltYWdlcyBpbWFnZXM9e3NpbmdsZVBvc3QuUG93ZXJQb3N0SW1hZ2VzfS8+fVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtzaW5nbGVQb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3NpbmdsZVBvc3QuY29udGVudH1cclxuICAgICAgICAgICAgPC9DYXJkPikgOlxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtzaW5nbGVQb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzaW5nbGVQb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtzaW5nbGVQb3N0LmJvYXJkTnVtID09PSA1ICAmJlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7c2luZ2xlUG9zdC5Ub2dldGhlclBvc3RJbWFnZXMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICg8Q2FyZFxyXG4gICAgICAgICAgICAgIGNvdmVyPXs8UG9zdEltYWdlcyBpbWFnZXM9e3NpbmdsZVBvc3QuVG9nZXRoZXJQb3N0SW1hZ2VzfS8+fVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtzaW5nbGVQb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3NpbmdsZVBvc3QuY29udGVudH1cclxuICAgICAgICAgICAgPC9DYXJkPikgOlxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtzaW5nbGVQb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzaW5nbGVQb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIH1cclxuICAgIDwvTGF5b3V0PlxyXG5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZTtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIG9iamVjdF9UYWdzRGF0YTogWyfsoITssrQnLCAn6rO16rWsJyxcclxuICAgICfsnZjrpZgnLFxyXG4gICAgJ+yghOyekOq4sOq4sCcsXHJcbiAgICAn7ISc7KCBJyxcclxuICAgICfqsozsnoQv7Leo66+4JyxcclxuICAgICfssKjrn4knLFxyXG4gICAgJ+yKpO2PrOy4oC/rnpjsoIAnLFxyXG4gICAgJ+u3sO2LsC/rr7jsmqknLFxyXG4gICAgJ+uwmOugpOuPmeusvCcsXHJcbiAgICAn6riw7YOAJyxdLFxyXG4gIHRhbGVudF9UYWdzRGF0YTogWyfsoITssrQnLCAn66+47IigJywgJ+q1rOy2qScsICfshKTsuZgnLCAn7L2U7LmtJywgJ+y0rOyYgScsICfsnbzshpAnLCAn6riw7YOAJ10sXHJcbiAgY29vcGVyYXRlX3RhZ3NEYXRhOiBbJ+yghOyytCcsICcxKzEnLCAn67Cw64usJywgJ+qzteuPmeq1rOunpCcsICfquLDtg4AnXSxcclxuICBwbGF5X3RhZ3NEYXRhOiBbJ+yghOyytCcsICfsp4jrrLgnLCAn7J6Q7JygJ10sXHJcbiAgYm9hcmROdW06bnVsbCxcclxuICBpbnB1dFNlYXJjaDpudWxsLFxyXG4gIHNlbGVjdDpudWxsLFxyXG4gIHNlbGVjdGVkVGFnOiBudWxsLFxyXG4gIGNhdGVnb3J5OiBudWxsLFxyXG4gIHNlYXJjaFJlc3VsdElkOiBudWxsLFxyXG4gIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3Q6IHRydWUsXHJcbiAgc2VhcmNoUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHNlYXJjaFBvc3REb25lOiBmYWxzZSxcclxuICBzZWFyY2hQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFByb2ZpbGVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFByb2ZpbGVQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFByb2ZpbGVQb3N0RXJyb3I6IG51bGwsXHJcbiAgdXBMb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFNQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRVc2VyUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlclBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgbW9kaWZ5UG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIG1vZGlmeVBvc3REb25lOiBmYWxzZSxcclxuICBtb2RpZnlQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX1NFQVJDSCA9ICdVUERBVEVfU0VBUkNIJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9CT0FSRCA9ICdVUERBVEVfQk9BUkQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQ0hBTkdFX1RBR19SRVFVRVNUID0gJ0xPQURfQ0hBTkdFX1RBR19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ0hBTkdFX1RBR19TVUNDRVNTID0gJ0xPQURfQ0hBTkdFX1RBR19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ0hBTkdFX1RBR19GQUlMVVJFID0gJ0xPQURfQ0hBTkdFX1RBR19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRU5EX0RVTU1ZUE9TVF9SRVFVRVNUID0gJ1NFTkRfRFVNTVlQT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0VORF9EVU1NWVBPU1RfU1VDQ0VTUyA9ICdTRU5EX0RVTU1ZUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFTkRfRFVNTVlQT1NUX0ZBSUxVUkUgPSAnU0VORF9EVU1NWVBPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9TRUFSQ0hfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NFQVJDSF9QT1NUU19GQUlMVVJFID0gJ0xPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRElGWV9QT1NUX1JFUVVFU1QgPSAnTU9ESUZZX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUE9TVF9TVUNDRVNTID0gJ01PRElGWV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTU9ESUZZX1BPU1RfRkFJTFVSRSA9ICdNT0RJRllfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfTElLRURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTElLRURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfU1BPU1RfUkVRVUVTVCA9ICdMT0FEX1NQT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9TUE9TVF9TVUNDRVNTID0gJ0xPQURfU1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NQT1NUX0ZBSUxVUkUgPSAnTE9BRF9TUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9SRU5UQUxfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVOVEFMX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRU5UQUxfUE9TVF9GQUlMVVJFID0gJ0xPQURfUkVOVEFMX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9XUklURV9QT1NUX1JFUVVFU1QgPSAnTE9BRF9XUklURV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9XUklURV9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9XUklURV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9UQUcgPSAnVVBEQVRFX1RBRyc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBVUERBVEVfQk9BUkQ6XHJcbiAgICAgIGRyYWZ0LmJvYXJkTnVtID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUERBVEVfU0VBUkNIOlxyXG4gICAgICBkcmFmdC5pbnB1dFNlYXJjaCA9IGFjdGlvbi5kYXRhLnNlYXJjaHdvcmQ7XHJcbiAgICAgIGRyYWZ0LnNlbGVjdCA9IGFjdGlvbi5kYXRhLnNlbGVjdDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfQ0hBTkdFX1RBR19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0NIQU5HRV9UQUdfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7IC8vIOq4sOyhtCDrsLDsl7Qg67CA7Ja067KE66as6rOgIOyDiOuhreqyjCAxMOqwnOyUqSDrhKPripTri6QuXHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9DSEFOR0VfVEFHX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2VhcmNoUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TRUFSQ0hfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TRUFSQ0hfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2VhcmNoUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9SRU5UQUxfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgaWYgKGFjdGlvbi5kYXRhWzBdLmJvYXJkX2JvYXJkbnVtID09PSAxIHx8IDIgfHwgMyB8fCA0KSB7IC8vIOugjO2DiCDqsozsi5zrrLzsnbQg7IyT7J206rOgIOyeiOuKlOqyveyasFxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICB9IGVsc2UgeyAvLyDso7zsoJzqsIAg64uk66W4IOqyjOyLnOusvCDrjanslrTrpqzrpbwg6rCA7KC47JisIOqyveyasFxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0FEX1JFTlRBTF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1dSSVRFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9XUklURV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgaWYgKGFjdGlvbi5kYXRhWzBdLmJvYXJkTnVtID09PSA1IHx8IDYpIHsgLy8g66CM7YOIIOqyjOyLnOusvOydtCDsjJPsnbTqs6Ag7J6I64qU6rK97JqwXHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7IC8vIOyjvOygnOqwgCDri6Trpbgg6rKM7Iuc66y8IOuNqeyWtOumrOulvCDqsIDsoLjsmKwg6rK97JqwXHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExPQURfV1JJVEVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBEQVRFX1RBRzpcclxuICAgICAgZHJhZnQuc2VsZWN0ZWRUYWcgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFNQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NQT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTElLRURfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgaWYgKGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPiAwKSB7IC8vIFNTUuuhnCDsspjsnYzsl5Ag65Ok6rOg7Jik64qUIOqyveyasOqwgCDslYTri5DrlYxcclxuICAgICAgICBpZiAoZHJhZnQubWFpblBvc3RzWzBdLmNhdGVnb3J5ICE9PSBhY3Rpb24uZGF0YVswXS5jYXRlZ29yeSAvL+y5tO2FjOqzoOumrCAsIOyngOyXreydtCDsnbzsuZjtlZjsp4Ag7JWK7J2E65WMXHJcbiAgICAgICAgICAmJiBkcmFmdC5tYWluUG9zdHNbMF0ubG9jYXRpb24gIT09IGFjdGlvbi5kYXRhWzBdLmxvY2F0aW9uKSB7XHJcbiAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YTsgLy8g6riw7KG0IOuwsOyXtCDrsIDslrTrsoTrpqzqs6Ag7IOI66Gt6rKMIDEw6rCc7JSpIOuEo+uKlOuLpC5cclxuICAgICAgICAgIC8vIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTsgLy8g6rCZ7J2A7IaN7ISx7J2YIOqyjOyLnOusvOydhCDsjJPqs6DsnojripQg6rK97JqwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpOyAvLyBTU1LroZwg7LKY7J2M7JeQIOuTpOqzoOyYrOuVjFxyXG4gICAgICB9XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0VORF9EVU1NWVBPU1RfUkVRVUVTVDpcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0VORF9EVU1NWVBPU1RfU1VDQ0VTUzpcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNFTkRfRFVNTVlQT1NUX0ZBSUxVUkU6XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIE1PRElGWV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIE1PRElGWV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpLmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50O1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBNT0RJRllfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g64uk66W4IOydtOyaqeyekCDsoJXrs7Qg66Gc65SpXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gIGxvYWRVc2Vyc0xvYWRpbmc6IGZhbHNlLCAvLyDsoITssrQg7J207Jqp7J6QIOumrOyKpO2KuCDroZzrlKlcclxuICBsb2FkVXNlcnNEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlcnNFcnJvcjogbnVsbCxcclxuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOuCtOygleuztCDroZzrlKkg7Iuc64+E7KSRXHJcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICB1c2VySW5mbzogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICBsb2NhbDogXCLsl4bsnYxcIixcclxuICB1c2Vyc0luZm86IHt9LFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX0xPQ0FMID0gJ1VQREFURV9MT0NBTCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJTX1JFUVVFU1QgPSAnTE9BRF9VU0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUlNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSU19GQUlMVVJFID0gJ0xPQURfVVNFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCzslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVVBEQVRFX0xPQ0FMOlxyXG4gICAgICBkcmFmdC5sb2NhbCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFVzZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZFVzZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVzZXJzSW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUlNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFVzZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgaWYoYWN0aW9uLmRhdGEuYm9hcmROdW09PT0xfHwyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIxLzJcIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkcmFmdC5tZSk7XHJcbiAgICAgICAgZHJhZnQubWUuUHJvZFBvc3RzLnB1c2goe2lkOmFjdGlvbi5kYXRhLmlkfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihhY3Rpb24uZGF0YS5ib2FyZE51bT09PTN8fDQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMy80XCIpO1xyXG4gICAgICAgIGRyYWZ0Lm1lLlBvd2VyUG9zdHMucHVzaCh7aWQ6IGFjdGlvbi5kYXRhLmlkfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihhY3Rpb24uZGF0YS5ib2FyZE51bT09PTUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiNVwiKTtcclxuICAgICAgICBkcmFmdC5tZS5Ub2dldGhlclBvc3RzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5pZH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==