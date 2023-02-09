"use strict";
exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 6098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractGetList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_clients_abstract_api_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8000);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



class AbstractGetList extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor(props, _listParamName, getListService){
        super(props);
        this.listParamName = _listParamName;
        this.getListService = getListService;
        if (!getListService) {
            throw new Error("getListService is null ");
        }
        if (!_listParamName) {
            throw new Error("_listParamName is null ");
        }
    }
    getListOnload() {
        this.getListService.getList(_api_clients_abstract_api_factory__WEBPACK_IMPORTED_MODULE_1__/* .ApiConsts.MOST_VIEWED */ .z.MOST_VIEWED).subscribe((models)=>{
            let obj = {};
            obj[this.listParamName] = models;
            this.setState(obj);
        });
    }
    componentDidMount() {
        this.getListOnload();
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "AbstractGetList"
        });
    }
}


/***/ }),

/***/ 2568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SkeletonLazyImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9323);
/* harmony import */ var primereact_skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_skeleton__WEBPACK_IMPORTED_MODULE_3__);




function SkeletonLazyImage(props) {
    const [isImageReady, setIsImageReady] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `SkeletonLazyImage SkeletonLazyImage-${props.fill ? "fill" : null}`,
        children: [
            !isImageReady && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                ...props
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                style: {
                    visibility: isImageReady == true ? "unset" : "hidden"
                },
                ...props,
                onLoadingComplete: ()=>{
                    setIsImageReady(true);
                }
            })
        ]
    });
}


/***/ })

};
;