(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/***/ (function() {

// export { default as Logo } from "./capas-de-cachorro-fofo-1 1.png";
// export { default as MotoIcon } from "./moto.svg";
// export { default as Clock } from "./clock.svg";
// export { default as CartIcon } from "./cartIcon.svg";
// export { default as SearchIcon } from "./SearchIcon.svg";
// export { default as CartIconPink } from "./cartIconPink.svg";
// export { default as ImageDefault } from "./imageDefault.png";
// export { default as SoftcomIcon } from "./Softcom.svg";
// export { default as BackBtn } from "./backbtn.png";
// export { default as CartIconWhite } from "./cartIconWhite.svg";

/***/ }),

/***/ "./src/common/defs.js":
/*!****************************!*\
  !*** ./src/common/defs.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INITIAL_STATE": function() { return /* binding */ INITIAL_STATE; },
/* harmony export */   "CATEGORIES": function() { return /* binding */ CATEGORIES; }
/* harmony export */ });
/* harmony import */ var _services_mock_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/mock.json */ "./src/services/mock.json");

const INITIAL_STATE = {
  productsOnCart: [],
  priceOfProductsOnCart: 0,
  desableDetailsScreen: true,
  query: "",
  products: _services_mock_json__WEBPACK_IMPORTED_MODULE_0__.sections.products
};
const CATEGORIES = ["Sugestão do Vendendor", "Brinquedos", "Camas e Casinhas", "Coleiras", "Ossos e Petiscos", "Saúde"];


/***/ }),

/***/ "./src/components/CardProductMap/Card/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/CardProductMap/Card/index.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets */ "./src/assets/index.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/CardProductMap/Card/styles.ts");

var _jsxFileName = "C:\\Users\\Felp\\Documents\\challenge\\front-end\\pet-shop\\src\\components\\CardProductMap\\Card\\index.tsx";



function Card({
  products,
  handleShowDetails
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CardContainerFlex, {
    children: products.map(({
      id,
      thumbnail,
      product_name,
      price
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CardContainerProduct, {
      id: id,
      onClick: handleShowDetails,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CardImageProdyct, {
        id: id,
        src: thumbnail || _assets__WEBPACK_IMPORTED_MODULE_2__.ImageDefault
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CardProdyctName, {
        children: product_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CardSubContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CardPrice, {
          children: ["R$ ", price.toFixed(2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CardBtnAdd, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            role: "AddToCart",
            id: id,
            src: _assets__WEBPACK_IMPORTED_MODULE_2__.CartIconPink
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this)]
    }, id, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/CardProductMap/Card/styles.ts":
/*!******************************************************!*\
  !*** ./src/components/CardProductMap/Card/styles.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardContainerFlex": function() { return /* binding */ CardContainerFlex; },
/* harmony export */   "CardContainerProduct": function() { return /* binding */ CardContainerProduct; },
/* harmony export */   "CardImageProdyct": function() { return /* binding */ CardImageProdyct; },
/* harmony export */   "CardProdyctName": function() { return /* binding */ CardProdyctName; },
/* harmony export */   "CardSubContainer": function() { return /* binding */ CardSubContainer; },
/* harmony export */   "CardPrice": function() { return /* binding */ CardPrice; },
/* harmony export */   "CardBtnAdd": function() { return /* binding */ CardBtnAdd; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CardContainerFlex = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const CardContainerProduct = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 5px;
  width: 254px;
  height: 440px;
  margin: 5px;
  @media (max-width: 980px) {
    margin: 3px;
    width: 180px;
    height: 300px;
  }
`;
const CardImageProdyct = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  margin: 15px;
  border: 1px solid #ffffff;
  width: 224px;
  height: 224px;
  @media (max-width: 980px) {
    width: 144px;
    height: 144px;
  }
`;
const CardProdyctName = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  color: #3f3f3f;
  font-family: "Quicksand";
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0 42px 0px 15px;
  @media (max-width: 980px) {
    font-size: 14px;
  }
`;
const CardSubContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 980px) {
    padding: 0;
  }
`;
const CardPrice = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  color: #3f3f3f;
  font-family: "Quicksand";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 980px) {
    font-size: 14px;
  }
`;
const CardBtnAdd = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  background: #ffffff;
  border: none;
  @media (max-width: 980px) {
    font-size: 14px;
  }
`;

/***/ }),

/***/ "./src/components/CardProductMap/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/CardProductMap/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CardProductMap; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./src/components/CardProductMap/Card/index.tsx");
/* harmony import */ var _services_mock_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/mock.json */ "./src/services/mock.json");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/CardProductMap/styles.ts");


var _jsxFileName = "C:\\Users\\Felp\\Documents\\challenge\\front-end\\pet-shop\\src\\components\\CardProductMap\\index.tsx";





function CardProductMap({
  categories = _services_mock_json__WEBPACK_IMPORTED_MODULE_4__.categories,
  sections = _services_mock_json__WEBPACK_IMPORTED_MODULE_4__.sections
}) {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();

  function handleShowDetails({
    target
  }) {
    const {
      id
    } = target;
    history.push(`/productDetails/${id}`);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: categories.map(category => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.CategoryMap, {
        children: category
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ProductsContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_3__.default, {
          handleShowDetails: handleShowDetails,
          products: sections[category].products
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this)]
    }, void 0, true))
  }, void 0, false);
}

/***/ }),

/***/ "./src/components/CardProductMap/styles.ts":
/*!*************************************************!*\
  !*** ./src/components/CardProductMap/styles.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryMap": function() { return /* binding */ CategoryMap; },
/* harmony export */   "ProductsContainer": function() { return /* binding */ ProductsContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CategoryMap = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1)`
  margin: 58px 148px 0;
  color: #333333;
  font-family: "Quicksand";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 980px) {
    margin: 0;
  }
`;
const ProductsContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin: 19px 175px;
  @media (max-width: 980px) {
    margin: 0 auto;
    padding: 15px;
  }
`;

/***/ }),

/***/ "./src/components/CartShop/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/CartShop/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartShop; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Felp\\Documents\\challenge\\front-end\\pet-shop\\src\\components\\CartShop\\index.tsx";

function CartShop({
  numberOfProductsOnCart = null,
  valueOfProductsOnCart = null,
  styles = null,
  icon = null
}) {
  const S = styles;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(S.CartContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(S.CartShopIcon, {
        src: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(S.CartShopQTD, {
        children: [numberOfProductsOnCart, " Produtos no Carrinho"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(S.CartShopValue, {
      children: ["R$ ", valueOfProductsOnCart.toFixed(2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets */ "./src/assets/index.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/Footer/styles.ts");

var _jsxFileName = "C:\\Users\\Felp\\Documents\\challenge\\front-end\\pet-shop\\src\\components\\Footer\\index.tsx";



function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.FooterContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.FooterImageSoftcom, {
      src: _assets__WEBPACK_IMPORTED_MODULE_2__.SoftcomIcon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.FooterLink, {
      children: "Pol\xEDticas de Privacidade"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.FooterLink, {
      children: "Termos de Uso"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.FooterLink, {
        children: "Nossas redes sociais"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Footer/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Footer/styles.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterContainer": function() { return /* binding */ FooterContainer; },
/* harmony export */   "FooterImageSoftcom": function() { return /* binding */ FooterImageSoftcom; },
/* harmony export */   "FooterLink": function() { return /* binding */ FooterLink; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().footer)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-top: 5px solid #b41c8b;
  background: #ffffff;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 32px 0;
  @media (max-width: 1218px) {
    display: none;
  }
`;
const FooterImageSoftcom = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  height: 59px;
  width: 223px;
`;
const FooterLink = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  color: #b41c8b;
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
}`;

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CartShop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CartShop */ "./src/components/CartShop/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/Header/styles.ts");


var _jsxFileName = "C:\\Users\\Felp\\Documents\\challenge\\front-end\\pet-shop\\src\\components\\Header\\index.tsx";


 // import { Logo, MotoIcon, Clock, BackBtn, CartIcon } from "../../assets";


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  desableDetailsScreen
}) {
  // const { productsOnCart, priceOfProductsOnCart } = useSelector(
  //   (state) => state
  // );
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();

  function handleBack() {
    history.push("/");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: desableDetailsScreen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Header, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.HeaderContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.HeaderTitle, {
          children: "Pet Friends Acessories"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.HeaderStatus, {
          children: "Aberto Agora"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.HeaderStreet, {
          children: "Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | Jo\xE3o Pessoa - PB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.HeaderService, {
          children: "Delivery: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.HeaderServiceTime, {
          children: "35m - 1h:40m"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.HeaderService, {
          children: "Entrega: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.HeaderServicePrice, {
          children: "\xC0 partir de R$ 3,00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartShop__WEBPACK_IMPORTED_MODULE_3__.default, {
        numberOfProductsOnCart: 0,
        valueOfProductsOnCart: 0,
        styles: _styles__WEBPACK_IMPORTED_MODULE_4__ // icon={CartIcon}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.HeaderDetails, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.BackBtn, {
        onClick: handleBack
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./src/components/Header/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Header/styles.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; },
/* harmony export */   "HeaderImage": function() { return /* binding */ HeaderImage; },
/* harmony export */   "HeaderContainer": function() { return /* binding */ HeaderContainer; },
/* harmony export */   "HeaderTitle": function() { return /* binding */ HeaderTitle; },
/* harmony export */   "HeaderClockIcon": function() { return /* binding */ HeaderClockIcon; },
/* harmony export */   "HeaderStatus": function() { return /* binding */ HeaderStatus; },
/* harmony export */   "HeaderStreet": function() { return /* binding */ HeaderStreet; },
/* harmony export */   "HeaderService": function() { return /* binding */ HeaderService; },
/* harmony export */   "HeaderServiceTime": function() { return /* binding */ HeaderServiceTime; },
/* harmony export */   "HeaderServicePrice": function() { return /* binding */ HeaderServicePrice; },
/* harmony export */   "HeaderDetails": function() { return /* binding */ HeaderDetails; },
/* harmony export */   "BackBtn": function() { return /* binding */ BackBtn; },
/* harmony export */   "CartContainer": function() { return /* binding */ CartContainer; },
/* harmony export */   "CartShopIcon": function() { return /* binding */ CartShopIcon; },
/* harmony export */   "CartShopQTD": function() { return /* binding */ CartShopQTD; },
/* harmony export */   "CartShopValue": function() { return /* binding */ CartShopValue; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Header = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().header)`
  align-items: center;
  background-color: #ffffff;
  border-bottom: 5px solid #b41c8b;
  display: flex;
  flex-direction: row;
  padding: 23px 58px;
  margin: 0;
`;
const HeaderImage = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  border: 2px solid #b41c8b;
  border-radius: 100%;
  height: 144px;
  width: 144px;
`;
const HeaderContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  flex: auto;
  margin: 0 30px;
`;
const HeaderTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  color: #333333;
  font-family: "Quicksand";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
`;
const HeaderClockIcon = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  margin: 0 0 0 20px;
`;
const HeaderStatus = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  color: #1bbb16;
  font-family: "Quicksand";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
`;
const HeaderStreet = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3)`
  color: #333333;
  font-family: "Quicksand";
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
const HeaderService = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  color: #3f3f3f;
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;
const HeaderServiceTime = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  color: #818181;
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  padding-right: 42px;
  text-align: left;
`;
const HeaderServicePrice = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  color: #818181;
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;
const HeaderDetails = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().header)`
  background: #b41c8b;
  padding: 3px 15px;
`;
const BackBtn = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 0;
  background: none;
`;
const CartContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #ececec;
  justify-content: space-evenly;
  align-items: bottom;
  @media (max-width: 1218px) {
    position: fixed;
    top: 90%;
    z-index: +1;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: #b41c8b;
    border-radius: 15px;
    max-width: 600px;
    padding: 10px;
  }
`;
const CartShopIcon = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  height: 22.41px;
  width: 26px;
  margin: 0 13px;
  @media (max-width: 1218px) {
    color: #ffffff;
    object-fit: cover;
  }
`;
const CartShopQTD = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 1218px) {
    margin-left: 5px;
    color: #ffffff;
    font-family: "Quicksand";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
const CartShopValue = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  margin: 0 50px;
  color: #b41c8b;
  font-family: "Quicksand";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 1218px) {
    background: #ffffff;
    padding: 5px;
    border-radius: 1000px;
    margin-left: 5px;
    color: #333333;
    font-family: "Quicksand";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
  }
`;

/***/ }),

/***/ "./src/components/Navbar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Navbar/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navbar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_defs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/defs */ "./src/common/defs.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/Navbar/styles.ts");

var _jsxFileName = "C:\\Users\\Felp\\Documents\\challenge\\front-end\\pet-shop\\src\\components\\Navbar\\index.tsx";



function Navbar({
  categories = _common_defs__WEBPACK_IMPORTED_MODULE_2__.CATEGORIES
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavbarContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavbarCategories, {
      children: categories.map(category => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavbarCategoriesItem, {
        role: "category",
        id: category,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, this)
      }, category, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Navbar/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Navbar/styles.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarContainer": function() { return /* binding */ NavbarContainer; },
/* harmony export */   "NavbarCategories": function() { return /* binding */ NavbarCategories; },
/* harmony export */   "NavbarCategoriesItem": function() { return /* binding */ NavbarCategoriesItem; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NavbarContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav)`
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  margin: 0;
  @media (max-width: 850px) {
    display: none;
  }
`;
const NavbarCategories = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  padding-top: 17px;
  margin-top: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;
const NavbarCategoriesItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().li)`
  ${""
/* &:hover ${NavbarCategoriesItem} {
color: #b41c8b;
font-family: "Quicksand";
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
} */
}
  color: #3f3f3f;
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;

/***/ }),

/***/ "./src/components/SearchBar/index.tsx":
/*!********************************************!*\
  !*** ./src/components/SearchBar/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/SearchBar/styles.ts");

var _jsxFileName = "C:\\Users\\Felp\\Documents\\challenge\\front-end\\pet-shop\\src\\components\\SearchBar\\index.tsx";
 // import { SearchIcon } from "../../assets";


function SearchBar() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.SearchBarContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.SearchBarInput, {
      placeholder: "O que voc\xEA procura?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.SearchBarBtn, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/SearchBar/styles.ts":
/*!********************************************!*\
  !*** ./src/components/SearchBar/styles.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBarContainer": function() { return /* binding */ SearchBarContainer; },
/* harmony export */   "SearchBarInput": function() { return /* binding */ SearchBarInput; },
/* harmony export */   "SearchBarBtn": function() { return /* binding */ SearchBarBtn; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SearchBarContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  justify-content: left;
`;
const SearchBarInput = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().input)`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-right: none;
  box-sizing: border-box;
  border-radius: 3px 0px 0px 3px;
  margin: 50px 0 0 148px;
  width: 850px;
  height: 54px;
  /* placeholder */
  font-family: "Quicksand";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0 16px;
  @media (max-width: 850px) {
    margin: 0;
  }
`;
const SearchBarBtn = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-left: none;
  margin: 50px 0;
  padding: 0 17px;
  height: 54px;
  @media (max-width: 850px) {
    margin: 0;
  }
`;

/***/ }),

/***/ "./src/components/SwitchQTD/index.tsx":
/*!********************************************!*\
  !*** ./src/components/SwitchQTD/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SwitchQTD; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/SwitchQTD/styles.ts");

var _jsxFileName = "C:\\Users\\Felp\\Documents\\challenge\\front-end\\pet-shop\\src\\components\\SwitchQTD\\index.tsx";


function SwitchQTD({
  value,
  handleChange,
  max
}) {
  const {
    0: quantity,
    1: setQuantity
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);

  const handleIncClick = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);

      if (handleChange) {
        handleChange(quantity + 1);
      }
    }
  };

  const handleDecClick = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);

      if (handleChange) {
        handleChange(quantity - 1);
      }
    }
  };

  const handleInputChange = ({
    target
  }) => {
    let {
      value
    } = target;
    if (value > max) value = max;
    setQuantity(value);

    if (handleChange) {
      handleChange(value);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.SwitchContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.DecrementBtn, {
      type: "button",
      onClick: handleDecClick,
      children: "-"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.QuantityInput, {
      min: "0",
      type: "number",
      value: quantity,
      onChange: handleInputChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.IncrementBtn, {
      type: "button",
      onClick: handleIncClick,
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/SwitchQTD/styles.ts":
/*!********************************************!*\
  !*** ./src/components/SwitchQTD/styles.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchContainer": function() { return /* binding */ SwitchContainer; },
/* harmony export */   "DecrementBtn": function() { return /* binding */ DecrementBtn; },
/* harmony export */   "QuantityInput": function() { return /* binding */ QuantityInput; },
/* harmony export */   "IncrementBtn": function() { return /* binding */ IncrementBtn; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SwitchContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  margin: 15px auto;
  justify-content: center;
  align-items: center;
`;
const DecrementBtn = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px 0 0 10px;
  border-right: none;
  height: 30px;
  height: 55px;
  width: 35px;
`;
const QuantityInput = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().input)`
  text-align: center;
  width: 80px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-right: none;
  border-left: none;
  height: 55px;
`;
const IncrementBtn = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 0 10px 10px 0;
  border-left: none;
  height: 55px;
  width: 35px;
`;

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "CartShop": function() { return /* reexport safe */ _CartShop__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "Navbar": function() { return /* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "SearchBar": function() { return /* reexport safe */ _SearchBar__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "CardProductMap": function() { return /* reexport safe */ _CardProductMap__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "Footer": function() { return /* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "SwitchQTD": function() { return /* reexport safe */ _SwitchQTD__WEBPACK_IMPORTED_MODULE_6__.default; }
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/Header/index.tsx");
/* harmony import */ var _CartShop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartShop */ "./src/components/CartShop/index.tsx");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar/index.tsx");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar */ "./src/components/SearchBar/index.tsx");
/* harmony import */ var _CardProductMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardProductMap */ "./src/components/CardProductMap/index.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer/index.tsx");
/* harmony import */ var _SwitchQTD__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwitchQTD */ "./src/components/SwitchQTD/index.tsx");








/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./src/components/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/pages/styles.ts");

var _jsxFileName = "C:\\Users\\Felp\\Documents\\challenge\\front-end\\pet-shop\\src\\pages\\index.tsx";


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.main, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Header, {
      desableDetailsScreen: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./src/pages/styles.ts":
/*!*****************************!*\
  !*** ./src/pages/styles.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": function() { return /* binding */ main; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const main = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap");

background-color: #f3f3f4;
margin: 0;
margin-bottom: 200px;
padding: 0;
`;

/***/ }),

/***/ "./src/services/mock.json":
/*!********************************!*\
  !*** ./src/services/mock.json ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"categories":["Sugestão do Vendedor","Brinquedos","Camas e Casinhas","Coleiras","Ossos e Petiscos","Saúde"],"sections":{"Sugestão do Vendedor":{"products":[{"id":1,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 5 Litros","price":69.9,"promotion":null,"description":["Indicado para cães","Contém extrato de aloe e vera e silicone","Ph neutro","Uso veterinário","Produto de alta qualidade","Disponível em embalagens de 500ml e 5 litros"]},{"id":2,"thumbnail":"https://cobasi.vteximg.com.br/arquivos/ids/299579/Cama-Londres-Azul-Bichinho-Chic.jpg?v=637152325568000000","product_name":"Cama Londres Azul - Chicxs","price":69.9,"promotion":10,"description":["Cuidados com a Cama para Cachorro Londres Bichinho Chic Azul","Mantenha a caminha do seu pet sempre limpa e higienizada.","Escolha o tamanho da caminha de acordo com o porte do seu cachorro ou gato","Escolha um cantinho bem aconchegante na cada para colocar"]},{"id":3,"thumbnail":"https://www.petlove.com.br/images/products/199824/large/Comedouro_NF_Pet_Pesado_Lil%C3%A1s_-_Tam.P_1954075_2.jpg?1556469668","product_name":"Comedouro Pesado Lilás NF Pet","price":15.9,"promotion":null,"description":null},{"id":4,"thumbnail":null,"product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":69.9,"promotion":null,"description":null}]},"Brinquedos":{"products":[{"id":5,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 5 Litros","price":69.9,"promotion":null,"description":null},{"id":6,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":69.9,"promotion":null,"description":null},{"id":7,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":27.5,"promotion":7,"description":null},{"id":8,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Brinquedo Chalesco para Cães com Bola de Tênis - Cores Sortidas","price":27.99,"promotion":null,"description":null},{"id":9,"thumbnail":"https://chalesco.com.br/wp-content/uploads/2020/05/70741.jpg","product_name":"Brinquedo Chalesco Sapo","price":36.99,"promotion":null,"description":null}]},"Camas e Casinhas":{"products":[{"id":10,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 5 Litros","price":69.9,"promotion":null,"description":["Indicado para cães","Contém extrato de aloe e vera e silicone","Ph neutro","Uso veterinário","Produto de alta qualidade","Disponível em embalagens de 500ml e 5 litros"]},{"id":11,"thumbnail":"https://cobasi.vteximg.com.br/arquivos/ids/299579/Cama-Londres-Azul-Bichinho-Chic.jpg?v=637152325568000000","product_name":"Cama Londres Azul - Chicxs","price":69.9,"promotion":10,"description":["Cuidados com a Cama para Cachorro Londres Bichinho Chic Azul","Mantenha a caminha do seu pet sempre limpa e higienizada.","Escolha o tamanho da caminha de acordo com o porte do seu cachorro ou gato","Escolha um cantinho bem aconchegante na cada para colocar"]},{"id":12,"thumbnail":"https://www.petlove.com.br/images/products/199824/large/Comedouro_NF_Pet_Pesado_Lil%C3%A1s_-_Tam.P_1954075_2.jpg?1556469668","product_name":"Comedouro Pesado Lilás NF Pet","price":15.9,"promotion":null,"description":null},{"id":13,"thumbnail":null,"product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":69.9,"promotion":null,"description":null}]},"Coleiras":{"products":[{"id":14,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 5 Litros","price":69.9,"promotion":null,"description":["Indicado para cães","Contém extrato de aloe e vera e silicone","Ph neutro","Uso veterinário","Produto de alta qualidade","Disponível em embalagens de 500ml e 5 litros"]},{"id":15,"thumbnail":"https://cobasi.vteximg.com.br/arquivos/ids/299579/Cama-Londres-Azul-Bichinho-Chic.jpg?v=637152325568000000","product_name":"Cama Londres Azul - Chicxs","price":69.9,"promotion":10,"description":["Cuidados com a Cama para Cachorro Londres Bichinho Chic Azul","Mantenha a caminha do seu pet sempre limpa e higienizada.","Escolha o tamanho da caminha de acordo com o porte do seu cachorro ou gato","Escolha um cantinho bem aconchegante na cada para colocar"]},{"id":16,"thumbnail":"https://www.petlove.com.br/images/products/199824/large/Comedouro_NF_Pet_Pesado_Lil%C3%A1s_-_Tam.P_1954075_2.jpg?1556469668","product_name":"Comedouro Pesado Lilás NF Pet","price":15.9,"promotion":null,"description":null},{"id":17,"thumbnail":null,"product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":69.9,"promotion":null,"description":null}]},"Ossos e Petiscos":{"products":[{"id":18,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 5 Litros","price":69.9,"promotion":null,"description":["Indicado para cães","Contém extrato de aloe e vera e silicone","Ph neutro","Uso veterinário","Produto de alta qualidade","Disponível em embalagens de 500ml e 5 litros"]},{"id":19,"thumbnail":"https://cobasi.vteximg.com.br/arquivos/ids/299579/Cama-Londres-Azul-Bichinho-Chic.jpg?v=637152325568000000","product_name":"Cama Londres Azul - Chicxs","price":69.9,"promotion":10,"description":["Cuidados com a Cama para Cachorro Londres Bichinho Chic Azul","Mantenha a caminha do seu pet sempre limpa e higienizada.","Escolha o tamanho da caminha de acordo com o porte do seu cachorro ou gato","Escolha um cantinho bem aconchegante na cada para colocar"]},{"id":20,"thumbnail":"https://www.petlove.com.br/images/products/199824/large/Comedouro_NF_Pet_Pesado_Lil%C3%A1s_-_Tam.P_1954075_2.jpg?1556469668","product_name":"Comedouro Pesado Lilás NF Pet","price":15.9,"promotion":null,"description":null},{"id":21,"thumbnail":null,"product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":69.9,"promotion":null,"description":null}]},"Saúde":{"products":[{"id":22,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 5 Litros","price":69.9,"promotion":null,"description":["Indicado para cães","Contém extrato de aloe e vera e silicone","Ph neutro","Uso veterinário","Produto de alta qualidade","Disponível em embalagens de 500ml e 5 litros"]},{"id":23,"thumbnail":"https://cobasi.vteximg.com.br/arquivos/ids/299579/Cama-Londres-Azul-Bichinho-Chic.jpg?v=637152325568000000","product_name":"Cama Londres Azul - Chicxs","price":69.9,"promotion":10,"description":["Cuidados com a Cama para Cachorro Londres Bichinho Chic Azul","Mantenha a caminha do seu pet sempre limpa e higienizada.","Escolha o tamanho da caminha de acordo com o porte do seu cachorro ou gato","Escolha um cantinho bem aconchegante na cada para colocar"]},{"id":24,"thumbnail":"https://www.petlove.com.br/images/products/199824/large/Comedouro_NF_Pet_Pesado_Lil%C3%A1s_-_Tam.P_1954075_2.jpg?1556469668","product_name":"Comedouro Pesado Lilás NF Pet","price":15.9,"promotion":null,"description":null},{"id":25,"thumbnail":null,"product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":69.9,"promotion":null,"description":null}]},"products":[{"id":1,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 5 Litros","price":69.9,"promotion":null,"description":["Indicado para cães","Contém extrato de aloe e vera e silicone","Ph neutro","Uso veterinário","Produto de alta qualidade","Disponível em embalagens de 500ml e 5 litros"]},{"id":2,"thumbnail":"https://cobasi.vteximg.com.br/arquivos/ids/299579/Cama-Londres-Azul-Bichinho-Chic.jpg?v=637152325568000000","product_name":"Cama Londres Azul - Chicxs","price":69.9,"promotion":10,"description":["Cuidados com a Cama para Cachorro Londres Bichinho Chic Azul","Mantenha a caminha do seu pet sempre limpa e higienizada.","Escolha o tamanho da caminha de acordo com o porte do seu cachorro ou gato","Escolha um cantinho bem aconchegante na cada para colocar"]},{"id":3,"thumbnail":"https://www.petlove.com.br/images/products/199824/large/Comedouro_NF_Pet_Pesado_Lil%C3%A1s_-_Tam.P_1954075_2.jpg?1556469668","product_name":"Comedouro Pesado Lilás NF Pet","price":15.9,"promotion":null,"description":null},{"id":4,"thumbnail":null,"product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":69.9,"promotion":null,"description":null},{"id":5,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 5 Litros","price":69.9,"promotion":null,"description":null},{"id":6,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":69.9,"promotion":null,"description":null},{"id":7,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":27.5,"promotion":7,"description":null},{"id":8,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Brinquedo Chalesco para Cães com Bola de Tênis - Cores Sortidas","price":27.99,"promotion":null,"description":null},{"id":9,"thumbnail":"https://chalesco.com.br/wp-content/uploads/2020/05/70741.jpg","product_name":"Brinquedo Chalesco Sapo","price":36.99,"promotion":null,"description":null},{"id":10,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 5 Litros","price":69.9,"promotion":null,"description":["Indicado para cães","Contém extrato de aloe e vera e silicone","Ph neutro","Uso veterinário","Produto de alta qualidade","Disponível em embalagens de 500ml e 5 litros"]},{"id":11,"thumbnail":"https://cobasi.vteximg.com.br/arquivos/ids/299579/Cama-Londres-Azul-Bichinho-Chic.jpg?v=637152325568000000","product_name":"Cama Londres Azul - Chicxs","price":69.9,"promotion":10,"description":["Cuidados com a Cama para Cachorro Londres Bichinho Chic Azul","Mantenha a caminha do seu pet sempre limpa e higienizada.","Escolha o tamanho da caminha de acordo com o porte do seu cachorro ou gato","Escolha um cantinho bem aconchegante na cada para colocar"]},{"id":12,"thumbnail":"https://www.petlove.com.br/images/products/199824/large/Comedouro_NF_Pet_Pesado_Lil%C3%A1s_-_Tam.P_1954075_2.jpg?1556469668","product_name":"Comedouro Pesado Lilás NF Pet","price":15.9,"promotion":null,"description":null},{"id":13,"thumbnail":null,"product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":69.9,"promotion":null,"description":null},{"id":14,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 5 Litros","price":69.9,"promotion":null,"description":["Indicado para cães","Contém extrato de aloe e vera e silicone","Ph neutro","Uso veterinário","Produto de alta qualidade","Disponível em embalagens de 500ml e 5 litros"]},{"id":15,"thumbnail":"https://cobasi.vteximg.com.br/arquivos/ids/299579/Cama-Londres-Azul-Bichinho-Chic.jpg?v=637152325568000000","product_name":"Cama Londres Azul - Chicxs","price":69.9,"promotion":10,"description":["Cuidados com a Cama para Cachorro Londres Bichinho Chic Azul","Mantenha a caminha do seu pet sempre limpa e higienizada.","Escolha o tamanho da caminha de acordo com o porte do seu cachorro ou gato","Escolha um cantinho bem aconchegante na cada para colocar"]},{"id":16,"thumbnail":"https://www.petlove.com.br/images/products/199824/large/Comedouro_NF_Pet_Pesado_Lil%C3%A1s_-_Tam.P_1954075_2.jpg?1556469668","product_name":"Comedouro Pesado Lilás NF Pet","price":15.9,"promotion":null,"description":null},{"id":17,"thumbnail":null,"product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":69.9,"promotion":null,"description":null},{"id":18,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 5 Litros","price":69.9,"promotion":null,"description":["Indicado para cães","Contém extrato de aloe e vera e silicone","Ph neutro","Uso veterinário","Produto de alta qualidade","Disponível em embalagens de 500ml e 5 litros"]},{"id":19,"thumbnail":"https://cobasi.vteximg.com.br/arquivos/ids/299579/Cama-Londres-Azul-Bichinho-Chic.jpg?v=637152325568000000","product_name":"Cama Londres Azul - Chicxs","price":69.9,"promotion":10,"description":["Cuidados com a Cama para Cachorro Londres Bichinho Chic Azul","Mantenha a caminha do seu pet sempre limpa e higienizada.","Escolha o tamanho da caminha de acordo com o porte do seu cachorro ou gato","Escolha um cantinho bem aconchegante na cada para colocar"]},{"id":20,"thumbnail":"https://www.petlove.com.br/images/products/199824/large/Comedouro_NF_Pet_Pesado_Lil%C3%A1s_-_Tam.P_1954075_2.jpg?1556469668","product_name":"Comedouro Pesado Lilás NF Pet","price":15.9,"promotion":null,"description":null},{"id":21,"thumbnail":null,"product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":69.9,"promotion":null,"description":null},{"id":22,"thumbnail":"https://a-static.mlcdn.com.br/1500x1500/shampoo-tradicional-i-love-pet-5-litros/royalpets/11126/a14ea4e5fcd9fb0214b8d14e5c9ebd19.jpg","product_name":"Shampoo Tradicional I Love Pet 5 Litros","price":69.9,"promotion":null,"description":["Indicado para cães","Contém extrato de aloe e vera e silicone","Ph neutro","Uso veterinário","Produto de alta qualidade","Disponível em embalagens de 500ml e 5 litros"]},{"id":23,"thumbnail":"https://cobasi.vteximg.com.br/arquivos/ids/299579/Cama-Londres-Azul-Bichinho-Chic.jpg?v=637152325568000000","product_name":"Cama Londres Azul - Chicxs","price":69.9,"promotion":10,"description":["Cuidados com a Cama para Cachorro Londres Bichinho Chic Azul","Mantenha a caminha do seu pet sempre limpa e higienizada.","Escolha o tamanho da caminha de acordo com o porte do seu cachorro ou gato","Escolha um cantinho bem aconchegante na cada para colocar"]},{"id":24,"thumbnail":"https://www.petlove.com.br/images/products/199824/large/Comedouro_NF_Pet_Pesado_Lil%C3%A1s_-_Tam.P_1954075_2.jpg?1556469668","product_name":"Comedouro Pesado Lilás NF Pet","price":15.9,"promotion":null,"description":null},{"id":25,"thumbnail":null,"product_name":"Shampoo Tradicional I Love Pet 10 Litros","price":69.9,"promotion":null,"description":null}]}}');

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXQtc2hvcC8uL3NyYy9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGV0LXNob3AvLi9zcmMvY29tbW9uL2RlZnMuanMiLCJ3ZWJwYWNrOi8vcGV0LXNob3AvLi9zcmMvY29tcG9uZW50cy9DYXJkUHJvZHVjdE1hcC9DYXJkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wZXQtc2hvcC8uL3NyYy9jb21wb25lbnRzL0NhcmRQcm9kdWN0TWFwL0NhcmQvc3R5bGVzLnRzIiwid2VicGFjazovL3BldC1zaG9wLy4vc3JjL2NvbXBvbmVudHMvQ2FyZFByb2R1Y3RNYXAvaW5kZXgudHN4Iiwid2VicGFjazovL3BldC1zaG9wLy4vc3JjL2NvbXBvbmVudHMvQ2FyZFByb2R1Y3RNYXAvc3R5bGVzLnRzIiwid2VicGFjazovL3BldC1zaG9wLy4vc3JjL2NvbXBvbmVudHMvQ2FydFNob3AvaW5kZXgudHN4Iiwid2VicGFjazovL3BldC1zaG9wLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wZXQtc2hvcC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vcGV0LXNob3AvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL3BldC1zaG9wLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9wZXQtc2hvcC8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcGV0LXNob3AvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvc3R5bGVzLnRzIiwid2VicGFjazovL3BldC1zaG9wLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wZXQtc2hvcC8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vcGV0LXNob3AvLi9zcmMvY29tcG9uZW50cy9Td2l0Y2hRVEQvaW5kZXgudHN4Iiwid2VicGFjazovL3BldC1zaG9wLy4vc3JjL2NvbXBvbmVudHMvU3dpdGNoUVREL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9wZXQtc2hvcC8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL3BldC1zaG9wLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wZXQtc2hvcC8uL3NyYy9wYWdlcy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vcGV0LXNob3AvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BldC1zaG9wL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL3BldC1zaG9wL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcGV0LXNob3AvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIklOSVRJQUxfU1RBVEUiLCJwcm9kdWN0c09uQ2FydCIsInByaWNlT2ZQcm9kdWN0c09uQ2FydCIsImRlc2FibGVEZXRhaWxzU2NyZWVuIiwicXVlcnkiLCJwcm9kdWN0cyIsInNlY3Rpb25zIiwiQ0FURUdPUklFUyIsIkNhcmQiLCJoYW5kbGVTaG93RGV0YWlscyIsIm1hcCIsImlkIiwidGh1bWJuYWlsIiwicHJvZHVjdF9uYW1lIiwicHJpY2UiLCJJbWFnZURlZmF1bHQiLCJ0b0ZpeGVkIiwiQ2FydEljb25QaW5rIiwiQ2FyZENvbnRhaW5lckZsZXgiLCJzdHlsZWQiLCJDYXJkQ29udGFpbmVyUHJvZHVjdCIsIkNhcmRJbWFnZVByb2R5Y3QiLCJDYXJkUHJvZHljdE5hbWUiLCJDYXJkU3ViQ29udGFpbmVyIiwiQ2FyZFByaWNlIiwiQ2FyZEJ0bkFkZCIsIkNhcmRQcm9kdWN0TWFwIiwiY2F0ZWdvcmllcyIsImRhdGEiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInRhcmdldCIsInB1c2giLCJjYXRlZ29yeSIsIkNhdGVnb3J5TWFwIiwiUHJvZHVjdHNDb250YWluZXIiLCJDYXJ0U2hvcCIsIm51bWJlck9mUHJvZHVjdHNPbkNhcnQiLCJ2YWx1ZU9mUHJvZHVjdHNPbkNhcnQiLCJzdHlsZXMiLCJpY29uIiwiUyIsIkZvb3RlciIsIlNvZnRjb21JY29uIiwiRm9vdGVyQ29udGFpbmVyIiwiRm9vdGVySW1hZ2VTb2Z0Y29tIiwiRm9vdGVyTGluayIsImhhbmRsZUJhY2siLCJIZWFkZXIiLCJIZWFkZXJJbWFnZSIsIkhlYWRlckNvbnRhaW5lciIsIkhlYWRlclRpdGxlIiwiSGVhZGVyQ2xvY2tJY29uIiwiSGVhZGVyU3RhdHVzIiwiSGVhZGVyU3RyZWV0IiwiSGVhZGVyU2VydmljZSIsIkhlYWRlclNlcnZpY2VUaW1lIiwiSGVhZGVyU2VydmljZVByaWNlIiwiSGVhZGVyRGV0YWlscyIsIkJhY2tCdG4iLCJDYXJ0Q29udGFpbmVyIiwiQ2FydFNob3BJY29uIiwiQ2FydFNob3BRVEQiLCJDYXJ0U2hvcFZhbHVlIiwiTmF2YmFyIiwiTmF2YmFyQ29udGFpbmVyIiwiTmF2YmFyQ2F0ZWdvcmllcyIsIk5hdmJhckNhdGVnb3JpZXNJdGVtIiwiU2VhcmNoQmFyIiwiU2VhcmNoQmFyQ29udGFpbmVyIiwiU2VhcmNoQmFySW5wdXQiLCJTZWFyY2hCYXJCdG4iLCJTd2l0Y2hRVEQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsIm1heCIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJ1c2VTdGF0ZSIsImhhbmRsZUluY0NsaWNrIiwiaGFuZGxlRGVjQ2xpY2siLCJoYW5kbGVJbnB1dENoYW5nZSIsIlN3aXRjaENvbnRhaW5lciIsIkRlY3JlbWVudEJ0biIsIlF1YW50aXR5SW5wdXQiLCJJbmNyZW1lbnRCdG4iLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUVBLE1BQU1BLGFBQWEsR0FBRztBQUNwQkMsZ0JBQWMsRUFBRSxFQURJO0FBRXBCQyx1QkFBcUIsRUFBRSxDQUZIO0FBR3BCQyxzQkFBb0IsRUFBRSxJQUhGO0FBSXBCQyxPQUFLLEVBQUUsRUFKYTtBQUtwQkMsVUFBUSxFQUFFQyxrRUFBaUJEO0FBTFAsQ0FBdEI7QUFRQSxNQUFNRSxVQUFVLEdBQUcsQ0FDakIsdUJBRGlCLEVBRWpCLFlBRmlCLEVBR2pCLGtCQUhpQixFQUlqQixVQUppQixFQUtqQixrQkFMaUIsRUFNakIsT0FOaUIsQ0FBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQyxJQUFULENBQWM7QUFBRUgsVUFBRjtBQUFZSTtBQUFaLENBQWQsRUFBK0M7QUFDNUQsc0JBQ0UsOERBQUMsc0RBQUQ7QUFBQSxjQUNHSixRQUFRLENBQUNLLEdBQVQsQ0FBYSxDQUFDO0FBQUVDLFFBQUY7QUFBTUMsZUFBTjtBQUFpQkMsa0JBQWpCO0FBQStCQztBQUEvQixLQUFELGtCQUNaLDhEQUFDLHlEQUFEO0FBQXdCLFFBQUUsRUFBRUgsRUFBNUI7QUFBZ0MsYUFBTyxFQUFFRixpQkFBekM7QUFBQSw4QkFFRSw4REFBQyxxREFBRDtBQUFvQixVQUFFLEVBQUVFLEVBQXhCO0FBQTRCLFdBQUcsRUFBRUMsU0FBUyxJQUFJRyxpREFBWUE7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsOERBQUMsb0RBQUQ7QUFBQSxrQkFBb0JGO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFLDhEQUFDLHFEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsOENBQUQ7QUFBQSw0QkFBaUJDLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsK0NBQUQ7QUFBQSxpQ0FDRTtBQUFLLGdCQUFJLEVBQUMsV0FBVjtBQUFzQixjQUFFLEVBQUVMLEVBQTFCO0FBQThCLGVBQUcsRUFBRU0saURBQVlBO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUEsT0FBaUVOLEVBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUVPLE1BQU1PLGlCQUFpQixHQUFHQyw4REFBVztBQUM1QztBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBTUEsTUFBTUMsb0JBQW9CLEdBQUdELDhEQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBYk87QUFlQSxNQUFNRSxnQkFBZ0IsR0FBR0YsOERBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVE87QUFXQSxNQUFNRyxlQUFlLEdBQUdILDREQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBYk87QUFlQSxNQUFNSSxnQkFBZ0IsR0FBR0osOERBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVE87QUFXQSxNQUFNSyxTQUFTLEdBQUdMLDREQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpPO0FBY0EsTUFBTU0sVUFBVSxHQUFHTixpRUFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOTyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRVA7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVlLFNBQVNPLGNBQVQsQ0FBd0I7QUFDckNDLFlBQVUsR0FBR0MsMkRBRHdCO0FBRXJDdEIsVUFBUSxHQUFHc0IseURBQWF0QjtBQUZhLENBQXhCLEVBR1o7QUFDRCxRQUFNdUIsT0FBTyxHQUFHQyw0REFBVSxFQUExQjs7QUFDQSxXQUFTckIsaUJBQVQsQ0FBMkI7QUFBRXNCO0FBQUYsR0FBM0IsRUFBdUM7QUFDckMsVUFBTTtBQUFFcEI7QUFBRixRQUFTb0IsTUFBZjtBQUNBRixXQUFPLENBQUNHLElBQVIsQ0FBYyxtQkFBa0JyQixFQUFHLEVBQW5DO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBQSxjQUNHZ0IsVUFBVSxDQUFDakIsR0FBWCxDQUFnQnVCLFFBQUQsaUJBQ2Q7QUFBQSw4QkFDRSw4REFBQyxnREFBRDtBQUFBLGtCQUFnQkE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsc0RBQUQ7QUFBQSwrQkFDRSw4REFBQywwQ0FBRDtBQUNFLDJCQUFpQixFQUFFeEIsaUJBRHJCO0FBRUUsa0JBQVEsRUFBRUgsUUFBUSxDQUFDMkIsUUFBRCxDQUFSLENBQW1CNUI7QUFGL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBLG9CQUREO0FBREgsbUJBREY7QUFlRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0Q7QUFFTyxNQUFNNkIsV0FBVyxHQUFHZiw2REFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWJPO0FBZUEsTUFBTWdCLGlCQUFpQixHQUFHaEIsOERBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTk8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJQO0FBRWUsU0FBU2lCLFFBQVQsQ0FBa0I7QUFDL0JDLHdCQUFzQixHQUFHLElBRE07QUFFL0JDLHVCQUFxQixHQUFHLElBRk87QUFHL0JDLFFBQU0sR0FBRyxJQUhzQjtBQUkvQkMsTUFBSSxHQUFHO0FBSndCLENBQWxCLEVBS1o7QUFDRCxRQUFNQyxDQUFDLEdBQUdGLE1BQVY7QUFDQSxzQkFDRSw4REFBQyxDQUFELENBQUcsYUFBSDtBQUFBLDRCQUNFO0FBQUEsOEJBQ0UsOERBQUMsQ0FBRCxDQUFHLFlBQUg7QUFBZ0IsV0FBRyxFQUFFQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxDQUFELENBQUcsV0FBSDtBQUFBLG1CQUNHSCxzQkFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FLDhEQUFDLENBQUQsQ0FBRyxhQUFIO0FBQUEsd0JBQXFCQyxxQkFBcUIsQ0FBQ3RCLE9BQXRCLENBQThCLENBQTlCLENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJEO0FBRUE7QUFFQTtBQUVlLFNBQVMwQixNQUFULEdBQWtCO0FBQy9CLHNCQUNFLDhEQUFDLG9EQUFEO0FBQUEsNEJBQ0UsOERBQUMsdURBQUQ7QUFBc0IsU0FBRyxFQUFFQyxnREFBV0E7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUFBLDZCQUNFLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUVPLE1BQU1DLGVBQWUsR0FBR3pCLGlFQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZPO0FBaUJBLE1BQU0wQixrQkFBa0IsR0FBRzFCLDhEQUFXO0FBQzdDO0FBQ0E7QUFDQSxDQUhPO0FBS0EsTUFBTTJCLFVBQVUsR0FBRzNCLCtEQUFZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQVRPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJQO0FBRUE7Q0FJQTs7QUFDQTtBQUVBLDZCQUFlLG9DQUFVO0FBQUVoQjtBQUFGLENBQVYsRUFBb0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsUUFBTTBCLE9BQU8sR0FBR0MsNERBQVUsRUFBMUI7O0FBQ0EsV0FBU2lCLFVBQVQsR0FBc0I7QUFDcEJsQixXQUFPLENBQUNHLElBQVIsQ0FBYSxHQUFiO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSxjQUNHN0Isb0JBQW9CLGdCQUNuQiw4REFBQywyQ0FBRDtBQUFBLDhCQUVFLDhEQUFDLG9EQUFEO0FBQUEsZ0NBQ0UsOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFHRSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBU0UsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEYsZUFVRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQVdFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhGLGVBWUUsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFnQkUsOERBQUMsOENBQUQ7QUFDRSw4QkFBc0IsRUFBRSxDQUQxQjtBQUVFLDZCQUFxQixFQUFFLENBRnpCO0FBR0UsY0FBTSxFQUFFc0Msb0NBSFYsQ0FJRTs7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURtQixnQkF5Qm5CLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0UsOERBQUMsNENBQUQ7QUFBVyxlQUFPLEVBQUVNO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMUJKLG1CQURGO0FBbUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckREO0FBRU8sTUFBTUMsTUFBTSxHQUFHN0IsaUVBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJPO0FBVUEsTUFBTThCLFdBQVcsR0FBRzlCLDhEQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMTztBQU9BLE1BQU0rQixlQUFlLEdBQUcvQiw4REFBVztBQUMxQztBQUNBO0FBQ0EsQ0FITztBQUtBLE1BQU1nQyxXQUFXLEdBQUdoQywrREFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FUTztBQVdBLE1BQU1pQyxlQUFlLEdBQUdqQyw4REFBVztBQUMxQztBQUNBLENBRk87QUFJQSxNQUFNa0MsWUFBWSxHQUFHbEMsK0RBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVE87QUFXQSxNQUFNbUMsWUFBWSxHQUFHbkMsNkRBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVE87QUFXQSxNQUFNb0MsYUFBYSxHQUFHcEMsK0RBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVE87QUFXQSxNQUFNcUMsaUJBQWlCLEdBQUdyQywrREFBWTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZPO0FBWUEsTUFBTXNDLGtCQUFrQixHQUFHdEMsK0RBQVk7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVE87QUFXQSxNQUFNdUMsYUFBYSxHQUFHdkMsaUVBQWM7QUFDM0M7QUFDQTtBQUNBLENBSE87QUFLQSxNQUFNd0MsT0FBTyxHQUFHeEMsaUVBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTk87QUFRQSxNQUFNeUMsYUFBYSxHQUFHekMsOERBQVc7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbEJPO0FBb0JBLE1BQU0wQyxZQUFZLEdBQUcxQyw4REFBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUk87QUFVQSxNQUFNMkMsV0FBVyxHQUFHM0MsK0RBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FuQk87QUFxQkEsTUFBTTRDLGFBQWEsR0FBRzVDLDREQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F2Qk8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSlA7QUFFQTtBQUNBO0FBRWUsU0FBUzZDLE1BQVQsQ0FBZ0I7QUFBRXJDLFlBQVUsR0FBR3BCLG9EQUFVQTtBQUF6QixDQUFoQixFQUE2QztBQUMxRCxzQkFDRSw4REFBQyxvREFBRDtBQUFBLDJCQUNFLDhEQUFDLHFEQUFEO0FBQUEsZ0JBQ0dvQixVQUFVLENBQUNqQixHQUFYLENBQWdCdUIsUUFBRCxpQkFDZCw4REFBQyx5REFBRDtBQUF3QixZQUFJLEVBQUMsVUFBN0I7QUFBdUQsVUFBRSxFQUFFQSxRQUEzRDtBQUFBLCtCQUNFO0FBQUEsb0JBQUlBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQTZDQSxRQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRDtBQUVPLE1BQU1nQyxlQUFlLEdBQUc5Qyw4REFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBPO0FBU0EsTUFBTStDLGdCQUFnQixHQUFHL0MsNkRBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJPO0FBVUEsTUFBTWdELG9CQUFvQixHQUFHaEQsNkRBQVU7QUFDOUMsSUFDSTtBQUFHO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FyQk8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ25CUDs7QUFDQTtBQUVlLFNBQVNpRCxTQUFULEdBQXFCO0FBQ2xDLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFBa0IsaUJBQVcsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxpREFBRDtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUVPLE1BQU1DLGtCQUFrQixHQUFHbEQsOERBQVc7QUFDN0M7QUFDQTtBQUNBLENBSE87QUFLQSxNQUFNbUQsY0FBYyxHQUFHbkQsZ0VBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBckJPO0FBdUJBLE1BQU1vRCxZQUFZLEdBQUdwRCxpRUFBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QlA7QUFFQTtBQUVlLFNBQVNxRCxTQUFULENBQW1CO0FBQUVDLE9BQUY7QUFBU0MsY0FBVDtBQUF1QkM7QUFBdkIsQ0FBbkIsRUFBaUQ7QUFDOUQsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQywrQ0FBUSxDQUFDTCxLQUFELENBQXhDOztBQUVBLFFBQU1NLGNBQWMsR0FBRyxNQUFNO0FBQzNCLFFBQUlILFFBQVEsR0FBR0QsR0FBZixFQUFvQjtBQUNsQkUsaUJBQVcsQ0FBQ0QsUUFBUSxHQUFHLENBQVosQ0FBWDs7QUFDQSxVQUFJRixZQUFKLEVBQWtCO0FBQ2hCQSxvQkFBWSxDQUFDRSxRQUFRLEdBQUcsQ0FBWixDQUFaO0FBQ0Q7QUFDRjtBQUNGLEdBUEQ7O0FBUUEsUUFBTUksY0FBYyxHQUFHLE1BQU07QUFDM0IsUUFBSUosUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDaEJDLGlCQUFXLENBQUNELFFBQVEsR0FBRyxDQUFaLENBQVg7O0FBQ0EsVUFBSUYsWUFBSixFQUFrQjtBQUNoQkEsb0JBQVksQ0FBQ0UsUUFBUSxHQUFHLENBQVosQ0FBWjtBQUNEO0FBQ0Y7QUFDRixHQVBEOztBQVNBLFFBQU1LLGlCQUFpQixHQUFHLENBQUM7QUFBRWxEO0FBQUYsR0FBRCxLQUFnQjtBQUN4QyxRQUFJO0FBQUUwQztBQUFGLFFBQVkxQyxNQUFoQjtBQUNBLFFBQUkwQyxLQUFLLEdBQUdFLEdBQVosRUFBaUJGLEtBQUssR0FBR0UsR0FBUjtBQUNqQkUsZUFBVyxDQUFDSixLQUFELENBQVg7O0FBQ0EsUUFBSUMsWUFBSixFQUFrQjtBQUNoQkEsa0JBQVksQ0FBQ0QsS0FBRCxDQUFaO0FBQ0Q7QUFDRixHQVBEOztBQVFBLHNCQUNFLDhEQUFDLG9EQUFEO0FBQUEsNEJBQ0UsOERBQUMsaURBQUQ7QUFBZ0IsVUFBSSxFQUFDLFFBQXJCO0FBQThCLGFBQU8sRUFBRU8sY0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLDhEQUFDLGtEQUFEO0FBQ0UsU0FBRyxFQUFDLEdBRE47QUFFRSxVQUFJLEVBQUMsUUFGUDtBQUdFLFdBQUssRUFBRUosUUFIVDtBQUlFLGNBQVEsRUFBRUs7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFVRSw4REFBQyxpREFBRDtBQUFnQixVQUFJLEVBQUMsUUFBckI7QUFBOEIsYUFBTyxFQUFFRixjQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEREO0FBRU8sTUFBTUcsZUFBZSxHQUFHL0QsOERBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxPO0FBT0EsTUFBTWdFLFlBQVksR0FBR2hFLGlFQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRPO0FBV0EsTUFBTWlFLGFBQWEsR0FBR2pFLGdFQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRPO0FBV0EsTUFBTWtFLFlBQVksR0FBR2xFLGlFQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSTyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBUUE7QUFFQSwrREFBZSxNQUFNO0FBQ25CLHNCQUNFLDhEQUFDLHlDQUFEO0FBQUEsMkJBQ0UsOERBQUMsK0NBQUQ7QUFBUSwwQkFBb0IsRUFBRTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FORCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBR08sTUFBTW1FLElBQUksR0FBR25FLDhEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUE8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQLG1DOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvIH0gZnJvbSBcIi4vY2FwYXMtZGUtY2FjaG9ycm8tZm9mby0xIDEucG5nXCI7XHJcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgTW90b0ljb24gfSBmcm9tIFwiLi9tb3RvLnN2Z1wiO1xyXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIENsb2NrIH0gZnJvbSBcIi4vY2xvY2suc3ZnXCI7XHJcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FydEljb24gfSBmcm9tIFwiLi9jYXJ0SWNvbi5zdmdcIjtcclxuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hJY29uIH0gZnJvbSBcIi4vU2VhcmNoSWNvbi5zdmdcIjtcclxuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJ0SWNvblBpbmsgfSBmcm9tIFwiLi9jYXJ0SWNvblBpbmsuc3ZnXCI7XHJcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgSW1hZ2VEZWZhdWx0IH0gZnJvbSBcIi4vaW1hZ2VEZWZhdWx0LnBuZ1wiO1xyXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFNvZnRjb21JY29uIH0gZnJvbSBcIi4vU29mdGNvbS5zdmdcIjtcclxuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBCYWNrQnRuIH0gZnJvbSBcIi4vYmFja2J0bi5wbmdcIjtcclxuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJ0SWNvbldoaXRlIH0gZnJvbSBcIi4vY2FydEljb25XaGl0ZS5zdmdcIjtcclxuIiwiaW1wb3J0IHsgc2VjdGlvbnMgfSBmcm9tIFwiLi4vc2VydmljZXMvbW9jay5qc29uXCI7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIHByb2R1Y3RzT25DYXJ0OiBbXSxcclxuICBwcmljZU9mUHJvZHVjdHNPbkNhcnQ6IDAsXHJcbiAgZGVzYWJsZURldGFpbHNTY3JlZW46IHRydWUsXHJcbiAgcXVlcnk6IFwiXCIsXHJcbiAgcHJvZHVjdHM6IHNlY3Rpb25zLnByb2R1Y3RzLFxyXG59O1xyXG5cclxuY29uc3QgQ0FURUdPUklFUyA9IFtcclxuICBcIlN1Z2VzdMOjbyBkbyBWZW5kZW5kb3JcIixcclxuICBcIkJyaW5xdWVkb3NcIixcclxuICBcIkNhbWFzIGUgQ2FzaW5oYXNcIixcclxuICBcIkNvbGVpcmFzXCIsXHJcbiAgXCJPc3NvcyBlIFBldGlzY29zXCIsXHJcbiAgXCJTYcO6ZGVcIixcclxuXTtcclxuXHJcbmV4cG9ydCB7IElOSVRJQUxfU1RBVEUsIENBVEVHT1JJRVMgfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VEZWZhdWx0LCBDYXJ0SWNvblBpbmsgfSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzXCI7XHJcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHsgcHJvZHVjdHMsIGhhbmRsZVNob3dEZXRhaWxzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFMuQ2FyZENvbnRhaW5lckZsZXg+XHJcbiAgICAgIHtwcm9kdWN0cy5tYXAoKHsgaWQsIHRodW1ibmFpbCwgcHJvZHVjdF9uYW1lLCBwcmljZSB9KSA9PiAoXHJcbiAgICAgICAgPFMuQ2FyZENvbnRhaW5lclByb2R1Y3QgaWQ9e2lkfSBvbkNsaWNrPXtoYW5kbGVTaG93RGV0YWlsc30ga2V5PXtpZH0+XHJcbiAgICAgICAgICB7LyogPHNwYW4+e3Byb21vdGlvbiB8fCBcIlwifTwvc3Bhbj4gKi99XHJcbiAgICAgICAgICA8Uy5DYXJkSW1hZ2VQcm9keWN0IGlkPXtpZH0gc3JjPXt0aHVtYm5haWwgfHwgSW1hZ2VEZWZhdWx0fSAvPlxyXG4gICAgICAgICAgPFMuQ2FyZFByb2R5Y3ROYW1lPntwcm9kdWN0X25hbWV9PC9TLkNhcmRQcm9keWN0TmFtZT5cclxuICAgICAgICAgIDxTLkNhcmRTdWJDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxTLkNhcmRQcmljZT5SJCB7cHJpY2UudG9GaXhlZCgyKX08L1MuQ2FyZFByaWNlPlxyXG4gICAgICAgICAgICA8Uy5DYXJkQnRuQWRkPlxyXG4gICAgICAgICAgICAgIDxpbWcgcm9sZT1cIkFkZFRvQ2FydFwiIGlkPXtpZH0gc3JjPXtDYXJ0SWNvblBpbmt9IC8+XHJcbiAgICAgICAgICAgIDwvUy5DYXJkQnRuQWRkPlxyXG4gICAgICAgICAgPC9TLkNhcmRTdWJDb250YWluZXI+XHJcbiAgICAgICAgPC9TLkNhcmRDb250YWluZXJQcm9kdWN0PlxyXG4gICAgICApKX1cclxuICAgIDwvUy5DYXJkQ29udGFpbmVyRmxleD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZENvbnRhaW5lckZsZXggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZENvbnRhaW5lclByb2R1Y3QgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMjU0cHg7XHJcbiAgaGVpZ2h0OiA0NDBweDtcclxuICBtYXJnaW46IDVweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZEltYWdlUHJvZHljdCA9IHN0eWxlZC5pbWdgXHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgd2lkdGg6IDIyNHB4O1xyXG4gIGhlaWdodDogMjI0cHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgICB3aWR0aDogMTQ0cHg7XHJcbiAgICBoZWlnaHQ6IDE0NHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkUHJvZHljdE5hbWUgPSBzdHlsZWQucGBcclxuICBjb2xvcjogIzNmM2YzZjtcclxuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMCA0MnB4IDBweCAxNXB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkU3ViQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRQcmljZSA9IHN0eWxlZC5wYFxyXG4gIGNvbG9yOiAjM2YzZjNmO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRCdG5BZGQgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuXHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9tb2NrLmpzb25cIjtcclxuXHJcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkUHJvZHVjdE1hcCh7XHJcbiAgY2F0ZWdvcmllcyA9IGRhdGEuY2F0ZWdvcmllcyxcclxuICBzZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMsXHJcbn0pIHtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNob3dEZXRhaWxzKHsgdGFyZ2V0IH0pIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHRhcmdldDtcclxuICAgIGhpc3RvcnkucHVzaChgL3Byb2R1Y3REZXRhaWxzLyR7aWR9YCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxTLkNhdGVnb3J5TWFwPntjYXRlZ29yeX08L1MuQ2F0ZWdvcnlNYXA+XHJcbiAgICAgICAgICA8Uy5Qcm9kdWN0c0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBoYW5kbGVTaG93RGV0YWlscz17aGFuZGxlU2hvd0RldGFpbHN9XHJcbiAgICAgICAgICAgICAgcHJvZHVjdHM9e3NlY3Rpb25zW2NhdGVnb3J5XS5wcm9kdWN0c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvUy5Qcm9kdWN0c0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlNYXAgPSBzdHlsZWQuaDFgXHJcbiAgbWFyZ2luOiA1OHB4IDE0OHB4IDA7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMTlweCAxNzVweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRTaG9wKHtcclxuICBudW1iZXJPZlByb2R1Y3RzT25DYXJ0ID0gbnVsbCxcclxuICB2YWx1ZU9mUHJvZHVjdHNPbkNhcnQgPSBudWxsLFxyXG4gIHN0eWxlcyA9IG51bGwsXHJcbiAgaWNvbiA9IG51bGwsXHJcbn0pIHtcclxuICBjb25zdCBTID0gc3R5bGVzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Uy5DYXJ0Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxTLkNhcnRTaG9wSWNvbiBzcmM9e2ljb259IC8+XHJcbiAgICAgICAgPFMuQ2FydFNob3BRVEQ+XHJcbiAgICAgICAgICB7bnVtYmVyT2ZQcm9kdWN0c09uQ2FydH0gUHJvZHV0b3Mgbm8gQ2FycmluaG9cclxuICAgICAgICA8L1MuQ2FydFNob3BRVEQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Uy5DYXJ0U2hvcFZhbHVlPlIkIHt2YWx1ZU9mUHJvZHVjdHNPbkNhcnQudG9GaXhlZCgyKX08L1MuQ2FydFNob3BWYWx1ZT5cclxuICAgIDwvUy5DYXJ0Q29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgU29mdGNvbUljb24gfSBmcm9tIFwiLi4vLi4vYXNzZXRzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Uy5Gb290ZXJDb250YWluZXI+XHJcbiAgICAgIDxTLkZvb3RlckltYWdlU29mdGNvbSBzcmM9e1NvZnRjb21JY29ufSAvPlxyXG4gICAgICA8Uy5Gb290ZXJMaW5rPlBvbMOtdGljYXMgZGUgUHJpdmFjaWRhZGU8L1MuRm9vdGVyTGluaz5cclxuICAgICAgPFMuRm9vdGVyTGluaz5UZXJtb3MgZGUgVXNvPC9TLkZvb3Rlckxpbms+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFMuRm9vdGVyTGluaz5Ob3NzYXMgcmVkZXMgc29jaWFpczwvUy5Gb290ZXJMaW5rPlxyXG4gICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cInNvY2lhbE1lZGlhc1wiIHNyYz17ZmFjZWJvb2tJY29ufSBhbHQ9XCJzb2NpYWxNZWRpYXNcIiAvPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic29jaWFsTWVkaWFzXCIgc3JjPXtpbnN0YWdyYW1JY29ufSBhbHQ9XCJzb2NpYWxNZWRpYXNcIiAvPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic29jaWFsTWVkaWFzXCIgc3JjPXt0d2l0dGVySWNvbn0gYWx0PVwic29jaWFsTWVkaWFzXCIgLz5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvY2lhbE1lZGlhc1wiIHNyYz17eW91dHViZUljb259IGFsdD1cInNvY2lhbE1lZGlhc1wiIC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUy5Gb290ZXJDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNiNDFjOGI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMzJweCAwO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjE4cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlckltYWdlU29mdGNvbSA9IHN0eWxlZC5pbWdgXHJcbiAgaGVpZ2h0OiA1OXB4O1xyXG4gIHdpZHRoOiAyMjNweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJMaW5rID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6ICNiNDFjOGI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufWA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IENhcnRTaG9wIGZyb20gXCIuLi9DYXJ0U2hvcFwiO1xyXG5cclxuLy8gaW1wb3J0IHsgTG9nbywgTW90b0ljb24sIENsb2NrLCBCYWNrQnRuLCBDYXJ0SWNvbiB9IGZyb20gXCIuLi8uLi9hc3NldHNcIjtcclxuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IGRlc2FibGVEZXRhaWxzU2NyZWVuIH0pIHtcclxuICAvLyBjb25zdCB7IHByb2R1Y3RzT25DYXJ0LCBwcmljZU9mUHJvZHVjdHNPbkNhcnQgfSA9IHVzZVNlbGVjdG9yKFxyXG4gIC8vICAgKHN0YXRlKSA9PiBzdGF0ZVxyXG4gIC8vICk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBmdW5jdGlvbiBoYW5kbGVCYWNrKCkge1xyXG4gICAgaGlzdG9yeS5wdXNoKFwiL1wiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZGVzYWJsZURldGFpbHNTY3JlZW4gPyAoXHJcbiAgICAgICAgPFMuSGVhZGVyPlxyXG4gICAgICAgICAgey8qIDxTLkhlYWRlckltYWdlIGFsdD1cIkltYWdlbSBMb2dvIGRhIEVtcHJlc2FcIiBzcmM9e0xvZ299IC8+ICovfVxyXG4gICAgICAgICAgPFMuSGVhZGVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Uy5IZWFkZXJUaXRsZT5QZXQgRnJpZW5kcyBBY2Vzc29yaWVzPC9TLkhlYWRlclRpdGxlPlxyXG4gICAgICAgICAgICB7LyogPFMuSGVhZGVyQ2xvY2tJY29uIHNyYz17Q2xvY2t9IC8+ICovfVxyXG4gICAgICAgICAgICA8Uy5IZWFkZXJTdGF0dXM+QWJlcnRvIEFnb3JhPC9TLkhlYWRlclN0YXR1cz5cclxuICAgICAgICAgICAgPFMuSGVhZGVyU3RyZWV0PlxyXG4gICAgICAgICAgICAgIEF2ZW5pZGEgUmlvIEdyYW5kZSBkbyBTdWwsIDE1MjAsIEVzdGFkb3MgfCA1ODAzMC0wMjEgfCBKb8OjbyBQZXNzb2FcclxuICAgICAgICAgICAgICAtIFBCXHJcbiAgICAgICAgICAgIDwvUy5IZWFkZXJTdHJlZXQ+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIGFsdD1cIlwiIHNyYz17TW90b0ljb259IC8+ICovfVxyXG4gICAgICAgICAgICA8Uy5IZWFkZXJTZXJ2aWNlPkRlbGl2ZXJ5OiA8L1MuSGVhZGVyU2VydmljZT5cclxuICAgICAgICAgICAgPFMuSGVhZGVyU2VydmljZVRpbWU+MzVtIC0gMWg6NDBtPC9TLkhlYWRlclNlcnZpY2VUaW1lPlxyXG4gICAgICAgICAgICA8Uy5IZWFkZXJTZXJ2aWNlPkVudHJlZ2E6IDwvUy5IZWFkZXJTZXJ2aWNlPlxyXG4gICAgICAgICAgICA8Uy5IZWFkZXJTZXJ2aWNlUHJpY2U+w4AgcGFydGlyIGRlIFIkIDMsMDA8L1MuSGVhZGVyU2VydmljZVByaWNlPlxyXG4gICAgICAgICAgPC9TLkhlYWRlckNvbnRhaW5lcj5cclxuICAgICAgICAgIDxDYXJ0U2hvcFxyXG4gICAgICAgICAgICBudW1iZXJPZlByb2R1Y3RzT25DYXJ0PXswfVxyXG4gICAgICAgICAgICB2YWx1ZU9mUHJvZHVjdHNPbkNhcnQ9ezB9XHJcbiAgICAgICAgICAgIHN0eWxlcz17U31cclxuICAgICAgICAgICAgLy8gaWNvbj17Q2FydEljb259XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvUy5IZWFkZXI+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFMuSGVhZGVyRGV0YWlscz5cclxuICAgICAgICAgIDxTLkJhY2tCdG4gb25DbGljaz17aGFuZGxlQmFja30+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17QmFja0J0bn0gLz4gKi99XHJcbiAgICAgICAgICA8L1MuQmFja0J0bj5cclxuICAgICAgICA8L1MuSGVhZGVyRGV0YWlscz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2I0MWM4YjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZzogMjNweCA1OHB4O1xyXG4gIG1hcmdpbjogMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgYm9yZGVyOiAycHggc29saWQgI2I0MWM4YjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGhlaWdodDogMTQ0cHg7XHJcbiAgd2lkdGg6IDE0NHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogYXV0bztcclxuICBtYXJnaW46IDAgMzBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyQ2xvY2tJY29uID0gc3R5bGVkLmltZ2BcclxuICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyU3RhdHVzID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6ICMxYmJiMTY7XHJcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJTdHJlZXQgPSBzdHlsZWQuaDNgXHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJTZXJ2aWNlID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6ICMzZjNmM2Y7XHJcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJTZXJ2aWNlVGltZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiAjODE4MTgxO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJTZXJ2aWNlUHJpY2UgPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogIzgxODE4MTtcclxuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckRldGFpbHMgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGJhY2tncm91bmQ6ICNiNDFjOGI7XHJcbiAgcGFkZGluZzogM3B4IDE1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQmFja0J0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VjZWNlYztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogYm90dG9tO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjE4cHgpIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogOTAlO1xyXG4gICAgei1pbmRleDogKzE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2I0MWM4YjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFNob3BJY29uID0gc3R5bGVkLmltZ2BcclxuICBoZWlnaHQ6IDIyLjQxcHg7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgbWFyZ2luOiAwIDEzcHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMThweCkge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFNob3BRVEQgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjE4cHgpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRTaG9wVmFsdWUgPSBzdHlsZWQucGBcclxuICBtYXJnaW46IDAgNTBweDtcclxuICBjb2xvcjogI2I0MWM4YjtcclxuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjE4cHgpIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDQVRFR09SSUVTIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kZWZzXCI7XHJcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoeyBjYXRlZ29yaWVzID0gQ0FURUdPUklFUyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTLk5hdmJhckNvbnRhaW5lcj5cclxuICAgICAgPFMuTmF2YmFyQ2F0ZWdvcmllcz5cclxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICA8Uy5OYXZiYXJDYXRlZ29yaWVzSXRlbSByb2xlPVwiY2F0ZWdvcnlcIiBrZXk9e2NhdGVnb3J5fSBpZD17Y2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICA8YT57Y2F0ZWdvcnl9PC9hPlxyXG4gICAgICAgICAgPC9TLk5hdmJhckNhdGVnb3JpZXNJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1MuTmF2YmFyQ2F0ZWdvcmllcz5cclxuICAgIDwvUy5OYXZiYXJDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmJhckNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICBtYXJnaW46IDA7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZiYXJDYXRlZ29yaWVzID0gc3R5bGVkLnVsYFxyXG4gIHBhZGRpbmctdG9wOiAxN3B4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmJhckNhdGVnb3JpZXNJdGVtID0gc3R5bGVkLmxpYFxyXG4gICR7XHJcbiAgICBcIlwiIC8qICY6aG92ZXIgJHtOYXZiYXJDYXRlZ29yaWVzSXRlbX0ge1xyXG4gICAgY29sb3I6ICNiNDFjOGI7XHJcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH0gKi9cclxuICB9XHJcbiAgY29sb3I6ICMzZjNmM2Y7XHJcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gXCIuLi8uLi9hc3NldHNcIjtcclxuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEJhcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFMuU2VhcmNoQmFyQ29udGFpbmVyPlxyXG4gICAgICA8Uy5TZWFyY2hCYXJJbnB1dCBwbGFjZWhvbGRlcj1cIk8gcXVlIHZvY8OqIHByb2N1cmE/XCIgLz5cclxuICAgICAgPFMuU2VhcmNoQmFyQnRuPlxyXG4gICAgICAgIDxpbWcgc3JjPXtudWxsfSAvPlxyXG4gICAgICA8L1MuU2VhcmNoQmFyQnRuPlxyXG4gICAgPC9TLlNlYXJjaEJhckNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoQmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hCYXJJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4IDBweCAwcHggM3B4O1xyXG4gIG1hcmdpbjogNTBweCAwIDAgMTQ4cHg7XHJcbiAgd2lkdGg6IDg1MHB4O1xyXG4gIGhlaWdodDogNTRweDtcclxuICAvKiBwbGFjZWhvbGRlciAqL1xyXG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hCYXJCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBtYXJnaW46IDUwcHggMDtcclxuICBwYWRkaW5nOiAwIDE3cHg7XHJcbiAgaGVpZ2h0OiA1NHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpdGNoUVREKHsgdmFsdWUsIGhhbmRsZUNoYW5nZSwgbWF4IH0pIHtcclxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKHZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5jQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAocXVhbnRpdHkgPCBtYXgpIHtcclxuICAgICAgc2V0UXVhbnRpdHkocXVhbnRpdHkgKyAxKTtcclxuICAgICAgaWYgKGhhbmRsZUNoYW5nZSkge1xyXG4gICAgICAgIGhhbmRsZUNoYW5nZShxdWFudGl0eSArIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEZWNDbGljayA9ICgpID0+IHtcclxuICAgIGlmIChxdWFudGl0eSA+IDApIHtcclxuICAgICAgc2V0UXVhbnRpdHkocXVhbnRpdHkgLSAxKTtcclxuICAgICAgaWYgKGhhbmRsZUNoYW5nZSkge1xyXG4gICAgICAgIGhhbmRsZUNoYW5nZShxdWFudGl0eSAtIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgbGV0IHsgdmFsdWUgfSA9IHRhcmdldDtcclxuICAgIGlmICh2YWx1ZSA+IG1heCkgdmFsdWUgPSBtYXg7XHJcbiAgICBzZXRRdWFudGl0eSh2YWx1ZSk7XHJcbiAgICBpZiAoaGFuZGxlQ2hhbmdlKSB7XHJcbiAgICAgIGhhbmRsZUNoYW5nZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFMuU3dpdGNoQ29udGFpbmVyPlxyXG4gICAgICA8Uy5EZWNyZW1lbnRCdG4gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZURlY0NsaWNrfT5cclxuICAgICAgICAtXHJcbiAgICAgIDwvUy5EZWNyZW1lbnRCdG4+XHJcbiAgICAgIDxTLlF1YW50aXR5SW5wdXRcclxuICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8Uy5JbmNyZW1lbnRCdG4gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUluY0NsaWNrfT5cclxuICAgICAgICArXHJcbiAgICAgIDwvUy5JbmNyZW1lbnRCdG4+XHJcbiAgICA8L1MuU3dpdGNoQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTd2l0Y2hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWNyZW1lbnRCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUXVhbnRpdHlJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGhlaWdodDogNTVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmNyZW1lbnRCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG5gO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlciB9IGZyb20gXCIuL0hlYWRlclwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcnRTaG9wIH0gZnJvbSBcIi4vQ2FydFNob3BcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBOYXZiYXIgfSBmcm9tIFwiLi9OYXZiYXJcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hCYXIgfSBmcm9tIFwiLi9TZWFyY2hCYXJcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkUHJvZHVjdE1hcCB9IGZyb20gXCIuL0NhcmRQcm9kdWN0TWFwXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3dpdGNoUVREIH0gZnJvbSBcIi4vU3dpdGNoUVREXCI7XHJcbiIsImltcG9ydCB7XHJcbiAgICBIZWFkZXIsXHJcbiAgICBOYXZiYXIsXHJcbiAgU2VhcmNoQmFyLFxyXG4gIENhcmRQcm9kdWN0TWFwLFxyXG4gIEZvb3RlcixcclxufSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTLm1haW4+XHJcbiAgICAgIDxIZWFkZXIgZGVzYWJsZURldGFpbHNTY3JlZW49e3RydWV9IC8+XHJcbiAgICA8L1MubWFpbj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluID0gc3R5bGVkLmRpdmBcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmNDtcclxubWFyZ2luOiAwO1xyXG5tYXJnaW4tYm90dG9tOiAyMDBweDtcclxucGFkZGluZzogMDtcclxuYFxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==