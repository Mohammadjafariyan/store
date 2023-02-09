"use strict";
exports.id = 504;
exports.ids = [504];
exports.modules = {

/***/ 1504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavigationBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _abstract_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7033);



function NavigationBar() {
    const items = [
        {
            label: "فروشگاه اینترنتی دیجی‌کالا"
        },
        {
            label: "مد و پوشاک"
        },
        {
            label: "زنانه"
        },
        {
            label: "اکسسوری زنانه"
        },
        {
            label: "زیورآلات زنانه"
        }
    ];
    const home = {
        icon: "pi pi-home",
        url: "https://www.primefaces.org/primereact"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: items && items.map((val, i, arr)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                        className: "on-hover-red text-muted",
                        style: {
                            marginRight: "4px",
                            marginLeft: "4px"
                        },
                        children: [
                            "   ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                style: {
                                    color: _abstract_global__WEBPACK_IMPORTED_MODULE_2__/* .GlobalConstants.SECENDARY_CSS */ .t.SECENDARY_CSS
                                },
                                className: "font-slim ",
                                href: "#",
                                children: [
                                    val.label,
                                    " "
                                ]
                            }),
                            i != arr.length - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                style: {
                                    marginRight: "6px",
                                    marginLeft: "6px"
                                },
                                children: "/"
                            })
                        ]
                    }),
                    "  "
                ]
            });
        })
    });
}


/***/ })

};
;