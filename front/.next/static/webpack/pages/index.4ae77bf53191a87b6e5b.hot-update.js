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
})(["width:60px;hieght:30px;padding-top:4px;font-size:13px;font-weight:600;border-right:solid #212a4b;align-items:center;padding-left:5px;min-width:60px;a{color:black;}a:hover{color:black;}"]);
_c7 = SelectDropD;
var Select2 = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "Layout__Select2",
  componentId: "sc-139bv3m-6"
})(["padding:1.5%;width:250px;hieght:30px;border:none;float:left;"]);
_c8 = Select2;
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
  }; // const onSearch = useCallback(() => {
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(menu[0]),
      category = _useState5[0],
      setCategory = _useState5[1];

  var onCategory = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    setCategory(value);
  }, []);
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
  }, __jsx(Select2, {
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
  }, menu.map(function (city) {
    return __jsx(Option, {
      value: city,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 25
      }
    }, city);
  }))), __jsx(_AppLayout_styles__WEBPACK_IMPORTED_MODULE_16__["SearchInput"], {
    placeholder: "지역, 상품명 입력",
    value: searchword,
    onChange: onSearchword,
    onSearch: onSearching,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
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
      lineNumber: 349,
      columnNumber: 19
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SearchOutlined"], {
    onClick: onSearching,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 21
    }
  })))), __jsx(ProfileDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 15
    }
  }, __jsx(UserDiv, {
    onClick: goProfile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 19
    }
  }), " \uB0B4\uD504\uB85C\uD544"), __jsx(UserDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MailOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 19
    }
  }), " \uC54C\uB9BC\uD1A1"), __jsx(UserDiv, {
    onClick: onWrite,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["FormOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
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
      lineNumber: 368,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    gutter: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 7,
    md: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 11,
    md: 11,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 13
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 6,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 13
    }
  }))), __jsx(PlaceDiv, {
    onClick: PlaceClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      paddingLeft: "4px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["AimOutlined"], {
    style: {
      paddingRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 13
    }
  }), "\uB3D9\uB124 \uC124\uC815"), __jsx(_SearchLocation__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
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
      lineNumber: 384,
      columnNumber: 13
    }
  }, local) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 13
    }
  }))));
}

_s(Layout, "CSWpc313QD5i+N3cZBD9Kqu73qk=", false, function () {
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
$RefreshReg$(_c8, "Select2");
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiT3B0aW9uIiwiU2VsZWN0IiwiVG9wYmFyIiwic3R5bGVkIiwiZGl2IiwiVG9wRGl2IiwiTmF2QmFyIiwiTmF2QmFyRGl2IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlNlbGNlY3REaXYiLCJTZWxlY3REcm9wRCIsIlNlbGVjdDIiLCJpbnB1dCIsIlByb2ZpbGVEaXYiLCJVc2VyRGl2IiwiTmF2TWVudSIsInVsIiwiTmF2QWN0aXZlIiwiTWVudUxpIiwibGkiLCJNZW51RGl2IiwiTG9nb0RpdiIsIk1lbnVBIiwiUGxhY2VEaXYiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibG9jYWwiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE1lbnUiLCJwcm9maWxlIiwiU2V0UHJvZmlsZSIsInNlbGVjdCIsIlNldFNlbGVjdCIsInBsYWNlIiwiU2V0UGxhY2UiLCJ1c2VJbnB1dCIsInNlYXJjaHdvcmQiLCJvblNlYXJjaHdvcmQiLCJzZXRTZWFyY2h3b3JkIiwiUGxhY2VDbGljayIsInRvZ2dsZU1lbnUiLCJnb1Byb2ZpbGUiLCJjb25zb2xlIiwibG9nIiwiUm91dGVyIiwicHVzaCIsIm9uV3JpdGUiLCJ1c2VDYWxsYmFjayIsIm9uTG9nSW4iLCJvbkxvZ091dCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJvblNlYXJjaGluZyIsInR5cGUiLCJVUERBVEVfU0VBUkNIIiwiZGF0YSIsIm1lbnUiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5Iiwib25DYXRlZ29yeSIsInZhbHVlIiwid2lkdGgiLCJwb3NpdGlvbiIsInBhZGRpbmdMZWZ0IiwibG9nbyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZm9udFNpemUiLCJNZW51SXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0aXRsZSIsImNpdHkiLCJtYXJnaW5Ub3AiLCJ6SW5kZXgiLCJwYWRkaW5nUmlnaHQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0EsSUFBT0EsTUFBUCxHQUFpQkMsMkNBQWpCLENBQU9ELE1BQVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUUsTUFBTSxnQkFBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzS0FBWjtLQUFNRixNO0FBWU4sSUFBTUcsTUFBTSxnQkFBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwySEFBWjtNQUFNQyxNO0FBVU4sSUFBTUMsTUFBTSxnQkFBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwSEFBWjtNQUFNRSxNO0FBV04sSUFBTUMsU0FBUyxnQkFBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1R0FBZjtNQUFNRyxTO0FBVU4sSUFBTUMsV0FBVyxnQkFBR0MsMkVBQUgsd0VBQWpCO01BQU1ELFc7QUFhTixJQUFNRSxVQUFVLGdCQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdHQUFoQjtNQUFNTSxVO0FBU04sSUFBTUMsV0FBVyxnQkFBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnTUFBakI7TUFBTU8sVztBQW9CTixJQUFNQyxPQUFPLGdCQUFHVCx5REFBTSxDQUFDVSxLQUFWO0FBQUE7QUFBQTtBQUFBLG9FQUFiO01BQU1ELE87QUFTTixJQUFNRSxVQUFVLGdCQUFHWCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtEQUFoQjtNQUFNVSxVO0FBT04sSUFBTUMsT0FBTyxnQkFBR1oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzSUFBYjtPQUFNVyxPO0FBWU4sSUFBTUMsT0FBTyxnQkFBR2IseURBQU0sQ0FBQ2MsRUFBVjtBQUFBO0FBQUE7QUFBQSxtRkFBYjtPQUFNRCxPO0FBUU4sSUFBTUUsU0FBUyxnQkFBR2YseURBQU0sQ0FBQ2MsRUFBVjtBQUFBO0FBQUE7QUFBQSxvQ0FBZjtPQUFNQyxTO0FBS04sSUFBTUMsTUFBTSxnQkFBR2hCLHlEQUFNLENBQUNpQixFQUFWO0FBQUE7QUFBQTtBQUFBLDJNQUFaO09BQU1ELE07QUF3Qk4sSUFBTUUsT0FBTyxnQkFBR2xCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0VBQWI7T0FBTWlCLE87QUFNTixJQUFNQyxPQUFPLGdCQUFHbkIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1RUFBYjtPQUFNa0IsTztBQU9OLElBQU1DLEtBQUssZ0JBQUdwQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9DQUFYO09BQU1tQixLO0FBS04sSUFBTUMsUUFBUSxnQkFBR3JCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNk1BQWQ7T0FBTW9CLFE7O0FBc0JOLFNBQVNDLE1BQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDMUIsTUFBTUMsUUFBUSxHQUFHQyxnRUFBVyxFQUE1Qjs7QUFDQSxxQkFBb0JDLGdFQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQS9CO0FBQUEsTUFBT0MsRUFBUCxnQkFBT0EsRUFBUDtBQUFBLE1BQVdDLEtBQVgsZ0JBQVdBLEtBQVg7O0FBQ0Esa0JBQTBCQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEM7QUFBQSxNQUFPQyxNQUFQO0FBQUEsTUFBZUMsT0FBZjs7QUFDQSxtQkFBOEJGLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9HLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTRCSixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPSyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBMEJOLHNEQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9PLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLGtCQUFnREMsZ0VBQVEsQ0FBQyxFQUFELENBQXhEO0FBQUE7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBa0JDLFlBQWxCO0FBQUEsTUFBK0JDLGFBQS9COztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJMLFlBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJaLFdBQU8sQ0FBQyxDQUFDRCxNQUFGLENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1jLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJYLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQVksV0FBTyxDQUFDQyxHQUFSLENBQVlkLE9BQVo7QUFDQWUsdURBQU0sQ0FBQ0MsSUFBUCxDQUFZLFVBQVo7QUFDRCxHQUpELENBakIwQixDQXVCMUI7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNoQ0gsdURBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDRCxHQUYwQixFQUV4QixFQUZ3QixDQUEzQjtBQUlBLE1BQU1HLE9BQU8sR0FBR0QseURBQVcsQ0FBQyxZQUFNO0FBQ2hDSCx1REFBTSxDQUFDQyxJQUFQLENBQVksWUFBWjtBQUNELEdBRjBCLEVBRXhCLEVBRndCLENBQTNCO0FBSUEsTUFBTUksUUFBUSxHQUFHRix5REFBVyxDQUFDLFlBQU07QUFDakM1QixZQUFRLENBQUMrQiwyRUFBbUIsRUFBcEIsQ0FBUjtBQUNBTix1REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNELEdBSDJCLEVBR3pCLEVBSHlCLENBQTVCO0FBS0EsTUFBTU0sV0FBVyxHQUFHSix5REFBVyxDQUFDLFlBQU07QUFDcEM1QixZQUFRLENBQUM7QUFDUGlDLFVBQUksRUFBQ0MsNkRBREU7QUFFUEMsVUFBSSxFQUFDO0FBQUN2QixjQUFNLEVBQUNBLE1BQVI7QUFDTEssa0JBQVUsRUFBQ0E7QUFETjtBQUZFLEtBQUQsQ0FBUjtBQUtBUSx1REFBTSxDQUFDQyxJQUFQLG1CQUF1QmQsTUFBdkIsY0FBaUNLLFVBQWpDO0FBQ0QsR0FQOEIsRUFPNUIsRUFQNEIsQ0FBL0I7QUFTQSxNQUFNbUIsSUFBSSxHQUFHLENBQUMsS0FBRCxFQUFPLEtBQVAsRUFBYSxLQUFiLENBQWI7O0FBRUEsbUJBQWdDN0Isc0RBQVEsQ0FBQzZCLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLFVBQVUsR0FBR1gseURBQVcsQ0FBQyxVQUFDWSxLQUFELEVBQVc7QUFDeENGLGVBQVcsQ0FBQ0UsS0FBRCxDQUFYO0FBQ0QsR0FGNkIsRUFFM0IsRUFGMkIsQ0FBOUI7QUFJQSxTQUNFO0FBQUssU0FBSyxFQUFFO0FBQUNDLFdBQUssRUFBRTtBQUFSLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUNDLGNBQVEsRUFBRSxVQUFYO0FBQXVCRCxXQUFLLEVBQUU7QUFBOUIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQ3BDLEVBQUQsR0FDRTtBQUFLLFdBQU8sRUFBRXdCLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFERixHQUVFO0FBQUssV0FBTyxFQUFFQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSEwsRUFJRTtBQUFLLFNBQUssRUFBRTtBQUFDYSxpQkFBVyxFQUFFO0FBQWQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpGLENBREYsQ0FERixFQVdFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRCxDQUFRLEtBQVI7QUFBYyxRQUFJLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLEVBRE47QUFFRSxPQUFHLEVBQUVDLGlEQUZQO0FBR0UsU0FBSyxFQUFDLFFBSFI7QUFJRSxVQUFNLEVBQUMsTUFKVDtBQUtFLGFBQVMsRUFBQywwQkFMWjtBQU1FLFNBQUssRUFBRTtBQUFDQyxnQkFBVSxFQUFFO0FBQWIsS0FOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBYUUsTUFBQyxLQUFEO0FBQU8sU0FBSyxFQUFFO0FBQUNDLG1CQUFhLEVBQUU7QUFBaEIsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQ3RDLE1BQUQsR0FDQyxNQUFDLDhEQUFEO0FBQWMsU0FBSyxFQUFFO0FBQUN1QyxjQUFRLEVBQUU7QUFBWCxLQUFyQjtBQUF5QyxXQUFPLEVBQUUxQixVQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FHQyxNQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFO0FBQUMwQixjQUFRLEVBQUU7QUFBWCxLQUF0QjtBQUEwQyxXQUFPLEVBQUUxQixVQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFNR2IsTUFBTSxHQUNMLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d3QyxvREFBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzlCLFdBQ0UsbUVBQ0dBLEtBQUssS0FBSyxDQUFWLElBQ0QsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTRCLE1BQUMsTUFBRDtBQUFRLFNBQUcsRUFBRUEsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUQsSUFBSSxDQUFDRSxLQUFULENBQXBCLENBQTVCLENBRkYsRUFHR0QsS0FBSyxLQUFLLENBQVYsSUFDRCxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF5QixNQUFDLE1BQUQ7QUFBUSxTQUFHLEVBQUVBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlELElBQUksQ0FBQ0UsS0FBVCxDQUFwQixDQUF6QixDQUpGLEVBS0dELEtBQUssS0FBSyxDQUFWLElBQ0QsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTRCLE1BQUMsTUFBRDtBQUFRLFNBQUcsRUFBRUEsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUQsSUFBSSxDQUFDRSxLQUFULENBQXBCLENBQTVCLENBTkYsRUFPR0QsS0FBSyxLQUFLLENBQVYsSUFDRCxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF5QixNQUFDLE1BQUQ7QUFBUSxTQUFHLEVBQUVBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlELElBQUksQ0FBQ0UsS0FBVCxDQUFwQixDQUF6QixDQVJGLEVBU0dELEtBQUssS0FBSyxDQUFWLElBQ0QsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0IsTUFBQyxNQUFEO0FBQVEsU0FBRyxFQUFFQSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRCxJQUFJLENBQUNFLEtBQVQsQ0FBcEIsQ0FBeEIsQ0FWRixFQVdHRCxLQUFLLEtBQUssQ0FBVixJQUNELE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXlCLE1BQUMsTUFBRDtBQUFRLFNBQUcsRUFBRUEsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUQsSUFBSSxDQUFDRSxLQUFULENBQXBCLENBQXpCLENBWkYsQ0FERjtBQWdCRCxHQWpCQSxDQURILENBREssR0FvQlUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQm5CLENBYkYsQ0FERixFQTRDRTtBQUFLLFNBQUssRUFBRTtBQUFDVCxpQkFBVyxFQUFFO0FBQWQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUNFLFNBQUssRUFBRTtBQUFDRixXQUFLLEVBQUU7QUFBUixLQURUO0FBRUUsZ0JBQVksRUFBRUwsSUFBSSxDQUFDLENBQUQsQ0FGcEI7QUFHRSxZQUFRLEVBQUVHLFVBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHSCxJQUFJLENBQUNhLEdBQUwsQ0FBUyxVQUFDSSxJQUFEO0FBQUEsV0FDUixNQUFDLE1BQUQ7QUFBUSxXQUFLLEVBQUVBLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFzQkEsSUFBdEIsQ0FEUTtBQUFBLEdBQVQsQ0FMSCxDQURGLENBREYsRUFhRSxNQUFDLDhEQUFEO0FBQWEsZUFBVyxFQUFFLFlBQTFCO0FBQXdDLFNBQUssRUFBRXBDLFVBQS9DO0FBQTJELFlBQVEsRUFBRUMsWUFBckU7QUFBbUYsWUFBUSxFQUFFYyxXQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFjRTtBQUFLLFNBQUssRUFBRTtBQUFDYSxnQkFBVSxFQUFFLEtBQWI7QUFBb0JGLGlCQUFXLEVBQUU7QUFBakMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFnQixXQUFPLEVBQUVYLFdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWRGLENBREYsQ0E1Q0YsRUFnRUUsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxXQUFPLEVBQUVWLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERiw4QkFERixFQUlFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsd0JBSkYsRUFPRSxNQUFDLE9BQUQ7QUFBUyxXQUFPLEVBQUVLLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERix5QkFQRixDQWhFRixDQURGLENBWEYsQ0FGRixFQTRGRTtBQUFLLFNBQUssRUFBRTtBQUFDMkIsZUFBUyxFQUFFLENBQVo7QUFBZUMsWUFBTSxFQUFFLENBQXZCO0FBQTJCZCxXQUFLLEVBQUU7QUFBbEMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzFDLFFBREgsQ0FGRixFQUtFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixDQTVGRixFQXFHRSxNQUFDLFFBQUQ7QUFBVSxXQUFPLEVBQUVxQixVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBQ3VCLGlCQUFXLEVBQUU7QUFBZCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUNhLGtCQUFZLEVBQUU7QUFBZixLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsOEJBREYsRUFLRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1HbEQsS0FBSyxHQUNKO0FBQUssU0FBSyxFQUFFO0FBQUNtRCxXQUFLLEVBQUUsU0FBUjtBQUFtQlYsY0FBUSxFQUFFLE1BQTdCO0FBQXFDTixXQUFLLEVBQUUsT0FBNUM7QUFBcURlLGtCQUFZLEVBQUU7QUFBbkUsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dsRCxLQURILENBREksR0FJSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosQ0FyR0YsQ0FERixDQURGO0FBd0hEOztHQWhMUVIsTTtVQUNVRyx3RCxFQUNHQyx3RCxFQUs0QmMsd0Q7OztPQVB6Q2xCLE07QUFrTE1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRhZTc3YmY1MzE5MWE4N2I2ZTViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge1xyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBNYWlsT3V0bGluZWQsXHJcbiAgU2VhcmNoT3V0bGluZWQsXHJcbiAgRm9ybU91dGxpbmVkLFxyXG4gIE1lbnVPdXRsaW5lZCxcclxuICBDbG9zZU91dGxpbmVkLFxyXG4gIERvd25PdXRsaW5lZCxcclxuICBBaW1PdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7TWVudUl0ZW1zfSBmcm9tICcuL01lbnVJdGVtcyc7XHJcbmltcG9ydCB7TWVudSwgRHJvcGRvd24sIFJvdywgQ29sICxTZWxlY3QgfSBmcm9tICdhbnRkJztcclxuY29uc3Qge09wdGlvbn0gPSBTZWxlY3Q7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4vbG9nbzIucG5nJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtsb2dvdXRSZXF1ZXN0QWN0aW9uLCBVUERBVEVfTE9DQUx9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgU2VhcmNoTG9jYXRpb24gZnJvbSBcIi4vU2VhcmNoTG9jYXRpb25cIjtcclxuaW1wb3J0IHtVUERBVEVfU0VBUkNIfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQge1NlYXJjaElucHV0fSBmcm9tIFwiLi9BcHBMYXlvdXQvc3R5bGVzXCI7XHJcblxyXG5jb25zdCBUb3BiYXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDElO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmb250LXNpemU6IDAuNmVtO1xyXG4gIC8vIGJhY2tncm91bmQ6IHJlZDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAjZWVlZWVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7O1xyXG4gIGJhY2tncm91bmQ6IFJHQigyNTUsIDI1NSwgMjU1KTtcclxuICBwYWRkaW5nOiAwIDM1cHg7XHJcbmA7XHJcbmNvbnN0IFRvcERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBiYWNrZ291bnI6IGJsdWU7XHJcbiAgZm9udC1zaXplOiAxLjZlbTtcclxuICBjb2xvcjogUkdCKDEyNywgMTI3LCAxMjcpO1xyXG5gO1xyXG5cclxuY29uc3QgTmF2QmFyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBiYWNrZ3JvdW5kOnJlZDtcclxuICBoZWlnaHQ6IDE0NnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gYmFja2dyb3VuZDp5ZWxsb3c7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgI2VlZWVlZTtcclxuICBwYWRkaW5nOiAwIDM1cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcbmNvbnN0IE5hdkJhckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZDpibHVlO1xyXG4gIHBhZGRpbmctbGVmdDogMjAwcHg7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgZGl2IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuYDtcclxuY29uc3QgU2VsY2VjdERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICMyMTJhNGI7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXI6IHNvbGlkICMyMTJhNGI7XHJcbiAgbWluLXdpZHRoOiA0NTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIHBhZGRpbmctbGVmdDo1MHB4O1xyXG5gO1xyXG5jb25zdCBTZWxlY3REcm9wRCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGllZ2h0OiAzMHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6cmVkO1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjMjEyYTRiO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuYDtcclxuY29uc3QgU2VsZWN0MiA9IHN0eWxlZC5pbnB1dGBcclxuICBwYWRkaW5nOiAxLjUlO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoaWVnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8vIHBhZGRpbmctbGVmdDo4MHB4O1xyXG5cclxuYDtcclxuY29uc3QgUHJvZmlsZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICAvLyBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5gO1xyXG5jb25zdCBVc2VyRGl2ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIC8vIGJvcmRlci1yaWdodDogc29saWQgI2U2ZTZlNjtcclxuICA6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgI2U2ZTZlNjtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAjZTZlNmU2O1xyXG4gIH1cclxuXHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbmA7XHJcbmNvbnN0IE5hdk1lbnUgPSBzdHlsZWQudWxgXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gdG9wOiA4MHB4O1xyXG4gIC8vIGxlZnQ6LTEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG5gO1xyXG5jb25zdCBOYXZBY3RpdmUgPSBzdHlsZWQudWxgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG5gO1xyXG5jb25zdCBNZW51TGkgPSBzdHlsZWQubGlgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMsIDEuMyk7XHJcbiAgfVxyXG5cclxuICA6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbmA7XHJcbmNvbnN0IE1lbnVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAyMDBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuYDtcclxuY29uc3QgTG9nb0RpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6cmVkO1xyXG5gO1xyXG5jb25zdCBNZW51QSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDkwcHg7XHJcbiAgLy8gbWlud2lkdGg6MTIwcHg7XHJcbmA7XHJcbmNvbnN0IFBsYWNlRGl2ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6cmVkO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB0b3A6IDIwMHB4O1xyXG4gIGxlZnQ6IDEzNTBweDtcclxuICByaWdodDogMTQ4NXB4O1xyXG4gIGJvdHRvbTogMjE5cHg7XHJcbiAgLy8gYm9yZGVyOnNvbGlkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjMpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVufSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7bWUsIGxvY2FsfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Byb2ZpbGUsIFNldFByb2ZpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3QsIFNldFNlbGVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxhY2UsIFNldFBsYWNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNod29yZCxvblNlYXJjaHdvcmQsc2V0U2VhcmNod29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuXHJcbiAgY29uc3QgUGxhY2VDbGljayA9ICgpID0+IHtcclxuICAgIFNldFBsYWNlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldE1lbnUoIWlzT3Blbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnb1Byb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBTZXRQcm9maWxlKHRydWUpO1xyXG4gICAgY29uc29sZS5sb2cocHJvZmlsZSk7XHJcbiAgICBSb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gIC8vICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSW5wdXR9YCk7XHJcbiAgLy8gfSwgW3NlYXJjaElucHV0XSk7XHJcblxyXG4gIGNvbnN0IG9uV3JpdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL3dyaXRlJyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkxvZ0luID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbnBhZ2UnKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0UmVxdWVzdEFjdGlvbigpKTtcclxuICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblNlYXJjaGluZyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTpVUERBVEVfU0VBUkNILFxyXG4gICAgICBkYXRhOntzZWxlY3Q6c2VsZWN0LFxyXG4gICAgICBzZWFyY2h3b3JkOnNlYXJjaHdvcmQsfVxyXG4gICAgfSk7XHJcbiAgICBSb3V0ZXIucHVzaChgL3NlYXJjaC8ke3NlbGVjdH0qJHtzZWFyY2h3b3JkfWApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbWVudSA9IFsn6riA64K07JqpJywn6riA7KCc66qpJywn64uJ64Sk7J6EJ107XHJcblxyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUobWVudVswXSk7XHJcbiAgY29uc3Qgb25DYXRlZ29yeSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Q2F0ZWdvcnkodmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fT5cclxuICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjEwMCVcIn19PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZS8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxUb3BiYXI+XHJcbiAgICAgICAgICAgIDxUb3BEaXY+XHJcbiAgICAgICAgICAgICAgeyFtZSA/XHJcbiAgICAgICAgICAgICAgICAoPGRpdiBvbkNsaWNrPXtvbkxvZ0lufT7roZzqt7jsnbgv7ZqM7JuQ6rCA7J6FPC9kaXY+KSA6XHJcbiAgICAgICAgICAgICAgICAoPGRpdiBvbkNsaWNrPXtvbkxvZ091dH0+66Gc6re47JWE7JuDPC9kaXY+KX1cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICDrgrTsg4HsoJBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Ub3BEaXY+XHJcbiAgICAgICAgICA8L1RvcGJhcj5cclxuICAgICAgICAgIDxOYXZCYXI+XHJcbiAgICAgICAgICAgIDxOYXZCYXJEaXY+XHJcbiAgICAgICAgICAgICAgPE1lbnVEaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nb0Rpdj5cclxuICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0NXB4O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgIDwvTG9nb0Rpdj5cclxuICAgICAgICAgICAgICAgIDxNZW51QSBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIHshaXNPcGVuID9cclxuICAgICAgICAgICAgICAgICAgICA8TWVudU91dGxpbmVkIHN0eWxlPXt7Zm9udFNpemU6IFwiMjBweFwifX0gb25DbGljaz17dG9nZ2xlTWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCBzdHlsZT17e2ZvbnRTaXplOiBcIjIwcHhcIn19IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7aXNPcGVuID9cclxuICAgICAgICAgICAgICAgICAgICA8TmF2QWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgICAgICAge01lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vYmplY3RyZWNpZXZlXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vYmplY3RzZW5kXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90YWxlbnRyZWNpZXZlXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90YWxlbnRzZW5kXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gNCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb29wZXJhdGVcIj48TWVudUxpIGtleT17aW5kZXh9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSA1ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BsYXlncm91bmRcIj48TWVudUxpIGtleT17aW5kZXh9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkFjdGl2ZT4gOiA8TmF2TWVudS8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvTWVudUE+XHJcbiAgICAgICAgICAgICAgPC9NZW51RGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDogXCIxNjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8U2VsY2VjdERpdj5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdERyb3BEPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QyXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAxMjB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXttZW51WzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge21lbnUubWFwKChjaXR5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2NpdHl9PntjaXR5fTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QyPlxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdERyb3BEPlxyXG4gICAgICAgICAgICAgICAgICB7Lyo8U2VsZWN0IHBsYWNlaG9sZGVyPXtcIuyngOyXrSwg7IOB7ZKI66qFIOyeheugpVwifSB2YWx1ZT17c2VhcmNod29yZH0gb25DaGFuZ2U9e29uU2VhcmNod29yZH0vPiovfVxyXG4gICAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXQgcGxhY2Vob2xkZXI9e1wi7KeA7JetLCDsg4HtkojrqoUg7J6F66ClXCJ9IHZhbHVlPXtzZWFyY2h3b3JkfSBvbkNoYW5nZT17b25TZWFyY2h3b3JkfSBvblNlYXJjaD17b25TZWFyY2hpbmd9Lz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiM3B4XCIsIHBhZGRpbmdMZWZ0OiBcIjExNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoT3V0bGluZWQgb25DbGljaz17b25TZWFyY2hpbmd9Lz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGNlY3REaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFByb2ZpbGVEaXY+XHJcbiAgICAgICAgICAgICAgICA8VXNlckRpdiBvbkNsaWNrPXtnb1Byb2ZpbGV9PlxyXG4gICAgICAgICAgICAgICAgICA8VXNlck91dGxpbmVkLz4g64K07ZSE66Gc7ZWEXHJcbiAgICAgICAgICAgICAgICA8L1VzZXJEaXY+XHJcbiAgICAgICAgICAgICAgICA8VXNlckRpdj5cclxuICAgICAgICAgICAgICAgICAgPE1haWxPdXRsaW5lZC8+IOyVjOumvO2GoVxyXG4gICAgICAgICAgICAgICAgPC9Vc2VyRGl2PlxyXG4gICAgICAgICAgICAgICAgPFVzZXJEaXYgb25DbGljaz17b25Xcml0ZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtT3V0bGluZWQvPiDquIAg7JOw6riwXHJcbiAgICAgICAgICAgICAgICA8L1VzZXJEaXY+XHJcbiAgICAgICAgICAgICAgPC9Qcm9maWxlRGl2PlxyXG4gICAgICAgICAgICA8L05hdkJhckRpdj5cclxuICAgICAgICAgIDwvTmF2QmFyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IDAsIHpJbmRleDogNSAsIHdpZHRoOiAnOTAlJ319PlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9ezh9PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXs3fSBtZD17N30vPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMX0gbWQ9ezExfT5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17Nn0vPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBsYWNlRGl2IG9uQ2xpY2s9e1BsYWNlQ2xpY2t9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OiBcIjRweFwifX0+XHJcbiAgICAgICAgICAgIDxBaW1PdXRsaW5lZCBzdHlsZT17e3BhZGRpbmdSaWdodDogXCIxMHB4XCJ9fS8+XHJcbiAgICAgICAgICAgIOuPmeuEpCDshKTsoJVcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFNlYXJjaExvY2F0aW9uLz5cclxuICAgICAgICAgIHtsb2NhbCA/XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogXCIjMTUyNTRkXCIsIGZvbnRTaXplOiBcIjI1cHhcIiwgd2lkdGg6IFwiMTE0cHhcIiwgcGFkZGluZ1JpZ2h0OiBcIlwifX0+XHJcbiAgICAgICAgICAgICAge2xvY2FsfVxyXG4gICAgICAgICAgICA8L2Rpdj4gOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L1BsYWNlRGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9