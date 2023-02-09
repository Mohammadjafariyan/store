(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./styles/assets/bootstrap.css
var bootstrap = __webpack_require__(3652);
// EXTERNAL MODULE: ./styles/assets/mega-menu.css
var mega_menu = __webpack_require__(8312);
// EXTERNAL MODULE: ./styles/theme.css
var theme = __webpack_require__(9702);
// EXTERNAL MODULE: ./styles/assets/sample.css
var sample = __webpack_require__(365);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: ./node_modules/primereact/resources/primereact.min.css
var primereact_min = __webpack_require__(5626);
// EXTERNAL MODULE: ./node_modules/primeicons/primeicons.css
var primeicons = __webpack_require__(3248);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./components/abstract/root-redux-store.tsx


const makeStore = ()=>(0,toolkit_namespaceObject.configureStore)({
        reducer: {
        },
        devTools: true
    });
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);

;// CONCATENATED MODULE: ./pages/_app.tsx







/* import 'primereact/resources/themes/saga-blue/theme.css'; */ 

//import 'primeflex/primeflex.css';


function App({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        __webpack_require__.e(/* import() */ 41).then(__webpack_require__.t.bind(__webpack_require__, 5041, 23));
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.MantineProvider, {
            withGlobalStyles: true,
            withNormalizeCSS: true,
            theme: {
                /** Put your mantine theme override here */ colorScheme: "light"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
// return <Component {...pageProps} />
}
/* harmony default export */ const _app = (wrapper.withRedux(App));


/***/ }),

/***/ 3248:
/***/ (() => {



/***/ }),

/***/ 5626:
/***/ (() => {



/***/ }),

/***/ 3652:
/***/ (() => {



/***/ }),

/***/ 8312:
/***/ (() => {



/***/ }),

/***/ 365:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 9702:
/***/ (() => {



/***/ }),

/***/ 2247:
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/core");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7609));
module.exports = __webpack_exports__;

})();