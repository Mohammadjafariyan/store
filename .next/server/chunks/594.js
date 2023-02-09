"use strict";
exports.id = 594;
exports.ids = [594];
exports.modules = {

/***/ 8000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ ApiConsts),
  "Z": () => (/* binding */ API_FACTORY)
});

// EXTERNAL MODULE: external "rxjs"
var external_rxjs_ = __webpack_require__(1964);
;// CONCATENATED MODULE: ./api-clients/abstract/server-url-provider.tsx

function ServerUrlProvider(type) {
    switch(type){
        case ApiConsts.GET_PRODUCT_TYPE:
            return "data/product_types.json";
            break;
        default:
            return "data/products.json";
            break;
    }
}

;// CONCATENATED MODULE: ./api-clients/abstract/abstract-crud-service.tsx


class AbstractCRUDService {
    getList(urltype) {
        let url = ServerUrlProvider(urltype);
        const data = external_rxjs_.Observable.create((observer)=>{
            fetch(url).then((response)=>response.json()) // or text() or blob() etc.
            .then((data)=>{
                observer.next(data.data);
                observer.complete();
            }).catch((err)=>observer.error(err));
        });
        return data;
    /* 
                let list=of(MOCK_SMALL_LIST);
        
                return list as Observable<T[]>; */ }
}

;// CONCATENATED MODULE: ./api-clients/use-case-api/api-get-most-selled.tsx

class ApiGetMostViewedImp extends AbstractCRUDService {
}

;// CONCATENATED MODULE: ./api-clients/use-case-api/api-get-most-viewed.tsx

class ApiGetMostSelledImp extends AbstractCRUDService {
}

;// CONCATENATED MODULE: ./api-clients/use-case-api/api-get-product-type.tsx

class ApiGetProductTypeListImp extends AbstractCRUDService {
}

;// CONCATENATED MODULE: ./api-clients/abstract/api-factory.tsx



var ApiConsts;
(function(ApiConsts) {
    ApiConsts[ApiConsts["MOST_VIEWED"] = 0] = "MOST_VIEWED";
    ApiConsts[ApiConsts["GET_PRODUCT_TYPE"] = 1] = "GET_PRODUCT_TYPE";
    ApiConsts[ApiConsts["MOST_SELLED"] = 2] = "MOST_SELLED";
})(ApiConsts || (ApiConsts = {}));
function API_FACTORY(name) {
    switch(name){
        case ApiConsts.MOST_SELLED:
            return new ApiGetMostSelledImp();
            break;
        case ApiConsts.MOST_VIEWED:
            return new ApiGetMostViewedImp();
            break;
        case ApiConsts.GET_PRODUCT_TYPE:
            return new ApiGetProductTypeListImp();
            break;
        default:
            return new ApiGetMostViewedImp();
            break;
    }
}


/***/ }),

/***/ 7033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ GlobalConstants)
/* harmony export */ });
var GlobalConstants;
(function(GlobalConstants) {
    GlobalConstants["PRIMARY_CSS"] = "#ef4056";
    GlobalConstants["SECENDARY_CSS"] = "#a7a7ae";
})(GlobalConstants || (GlobalConstants = {}));


/***/ }),

/***/ 3622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "primereact/inputtext"
var inputtext_ = __webpack_require__(9093);
// EXTERNAL MODULE: external "primereact/overlaypanel"
var overlaypanel_ = __webpack_require__(3977);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
;// CONCATENATED MODULE: ./utility/sample-table.tsx


function SampleTable() {
    const elements = [
        {
            position: 6,
            mass: 12.011,
            symbol: "C",
            name: "Carbon"
        },
        {
            position: 7,
            mass: 14.007,
            symbol: "N",
            name: "Nitrogen"
        },
        {
            position: 39,
            mass: 88.906,
            symbol: "Y",
            name: "Yttrium"
        },
        {
            position: 56,
            mass: 137.33,
            symbol: "Ba",
            name: "Barium"
        },
        {
            position: 58,
            mass: 140.12,
            symbol: "Ce",
            name: "Cerium"
        }
    ];
    const rows = elements.map((element)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: element.position
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: element.name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: element.symbol
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: element.mass
                })
            ]
        }, element.name));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Table, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "Element position"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "Element name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "Symbol"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "Atomic mass"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                children: rows
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/complex/header-search.tsx






function HeaderSearch() {
    const op = (0,external_react_.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                className: "d-flex",
                role: "search",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "p-input-icon-right me-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "pi pi-search"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(inputtext_.InputText, {
                            onClick: (e)=>{
                                if (op && op.current) {
                                    op.current.toggle(e);
                                }
                            },
                            placeholder: " جستجو ",
                            style: {
                                width: "30vw",
                                backgroundColor: "#f1f2f4",
                                border: "none",
                                borderRadius: "5px",
                                height: "40px",
                                fontSize: "15px"
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(overlaypanel_.OverlayPanel, {
                ref: op,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        shallow: true,
                        href: "/Search",
                        children: "go Search "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SampleTable, {})
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/basic/header-basket.tsx



const HeaderBasket = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "nav-link ",
            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                className: "non-border",
                variant: "default",
                color: "gray",
                ...props,
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "pi pi-shopping-cart shopping-cart"
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/basic/mega-menu.tsx


function MegaMeno() {
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Group, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.HoverCard, {
            width: "90vw",
            shadow: "md",
            position: "bottom-start",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.HoverCard.Target, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "dropbtn bottom-line-hover text-dark",
                            href: "#",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "pi pi-bars ps-1"
                                }),
                                "دسته بندی کالا ها"
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.HoverCard.Dropdown, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                        size: "sm",
                        children: "Hover card is revealed when user hovers over target element, it will be hidden once mouse is not over both target and dropdown elements"
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "primereact/dialog"
var dialog_ = __webpack_require__(2222);
// EXTERNAL MODULE: external "primereact/button"
var button_ = __webpack_require__(1088);
;// CONCATENATED MODULE: ./components/complex/select-city-modal.tsx





const SelectCityModal = (props)=>{
    const [visible, setVisible] = (0,external_react_.useState)(false);
    const dialogFuncMap = {
        "visible": setVisible
    };
    const onHide = (name)=>{
        dialogFuncMap[`${name}`](false);
    };
    const renderFooter = (name)=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(button_.Button, {
                    label: "No",
                    icon: "pi pi-times",
                    onClick: ()=>onHide(name),
                    className: "p-button-text"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(button_.Button, {
                    label: "Yes",
                    icon: "pi pi-check",
                    onClick: ()=>onHide(name),
                    autoFocus: true
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            "  ",
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "#",
                className: "nav-link text-muted",
                onClick: ()=>setVisible(true),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "pi pi-map-marker ms-2"
                    }),
                    "لطفا شهر خود را انتخاب کنید"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dialog_.Dialog, {
                header: "Header",
                visible: visible,
                style: {
                    width: "50vw"
                },
                footer: renderFooter("visible"),
                onHide: ()=>onHide("displayBasic2"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SampleTable, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/basic/header-login-register-button.tsx



const HeaderLoginRegisterButton = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nav-link ",
        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
            ...props,
            leftIcon: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: "pi pi-sign-in "
            }),
            variant: "default",
            color: "gray",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "pe-2",
                children: "ورود | ثبت نام"
            })
        })
    });
};
/* harmony default export */ const header_login_register_button = (HeaderLoginRegisterButton);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
;// CONCATENATED MODULE: ./components/complex/auth-utils/login-insert-email-phone.tsx



function LoginInsertEmailPhone(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        "data-testid": "LoginInsertEmailPhone",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    fontWeight: "normal",
                    color: "#ef4056"
                },
                children: "شماره تلفن یا ایمیل :"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(inputtext_.InputText, {
                value: props.value,
                style: {
                    width: "100%"
                },
                onChange: props.onChange
            })
        ]
    });
}

;// CONCATENATED MODULE: ./utility/regex.tsx
class GLOBAL_REGEXES_UTIL {
    static EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    static MOBILE = /^(?:(\u0660\u0669[\u0660-\u0669][\u0660-\u0669]{8})|(\u06F0\u06F9[\u06F0-\u06F9][\u06F0-\u06F9]{8})|(09[0-9][0-9]{8}))$/;
    static emailRegex = new RegExp(GLOBAL_REGEXES_UTIL.EMAIL);
    static mobileRegex = new RegExp(GLOBAL_REGEXES_UTIL.MOBILE);
}
function RegexEmailUtil(value) {
    return GLOBAL_REGEXES_UTIL.emailRegex.test(value);
}
function RegexMobileUtil(value) {
    return GLOBAL_REGEXES_UTIL.mobileRegex.test(value);
}

// EXTERNAL MODULE: external "primereact/inputmask"
var inputmask_ = __webpack_require__(5452);
;// CONCATENATED MODULE: ./components/complex/auth-utils/login-confirm-code.tsx





function LoginConfirmCode(props) {
    const toast = (0,external_react_.useRef)(null);
    const show = ()=>{
        toast.current.show({
            severity: "success",
            summary: "Form Submitted",
            detail: formik.values.value
        });
    };
    const formik = (0,external_formik_.useFormik)({
        initialValues: {
            value: ""
        },
        validate: (data)=>{
            let errors = {};
            if (!data.value) {
                errors.value = "Name - Surname is required.";
            }
            return errors;
        },
        onSubmit: (data)=>{
            data && show();
            formik.resetForm();
        }
    });
    const isFormFieldInvalid = (name)=>!!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name)=>{
        return isFormFieldInvalid(name) ? /*#__PURE__*/ jsx_runtime_.jsx("small", {
            className: "p-error",
            children: formik.errors[name]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("small", {
            className: "p-error",
            children: "\xa0"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        "data-testid": "loginConfirmCode",
        style: {
            padding: "2vw"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                style: {
                    fontWeight: "normal",
                    color: "#ef4056"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "لطفا کد ارسال شده به"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: " شماره موبایل "
                    }),
                    props.mobileOrEmail && RegexMobileUtil(props.mobileOrEmail) && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: "black"
                        },
                        children: props.mobileOrEmail
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: " ایمیل "
                    }),
                    props.mobileOrEmail && RegexEmailUtil(props.mobileOrEmail) && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: "black"
                        },
                        children: props.mobileOrEmail
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "را وارد نمایید "
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(inputmask_.InputMask, {
                mask: "9 9 9 9",
                placeholder: "_ _ _ _",
                style: {
                    width: "100%",
                    textAlign: "center",
                    direction: "ltr"
                }
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/abstract/global.tsx
var global = __webpack_require__(7033);
;// CONCATENATED MODULE: ./components/complex/auth-utils/login.tsx







var LoginPanels;
(function(LoginPanels) {
    LoginPanels[LoginPanels["LoginInsertEmailPhone"] = 0] = "LoginInsertEmailPhone";
    LoginPanels[LoginPanels["LoginConfirmCode"] = 1] = "LoginConfirmCode";
})(LoginPanels || (LoginPanels = {}));
function Login() {
    const toast = (0,external_react_.useRef)(null);
    const [panel, setPanel] = (0,external_react_.useState)(LoginPanels.LoginInsertEmailPhone);
    const show = ()=>{
        toast.current.show({
            severity: "success",
            summary: "Form Submitted",
            detail: formik.values.value
        });
    };
    const formik = (0,external_formik_.useFormik)({
        initialValues: {
            phoneOrEmail: ""
        },
        validate: (data)=>{
            let errors = {};
            if (!data.phoneOrEmail) {
                errors.phoneOrEmail = "لطفا ایمیل یا شماره تلفن خود را وارد نمایید";
            }
            if (!RegexEmailUtil(data.phoneOrEmail) && !RegexMobileUtil(data.phoneOrEmail)) {
                errors.phoneOrEmail = "شماره موبایل یا ایمیل اشتباه است";
            }
            return errors;
        },
        onSubmit: (data)=>{
            // data && show();
            // formik.resetForm();
            setPanel(LoginPanels.LoginConfirmCode);
        }
    });
    const goBack = ()=>{
        setPanel(LoginPanels.LoginInsertEmailPhone);
    };
    const isFormFieldInvalid = (name)=>!!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name)=>{
        return isFormFieldInvalid(name) ? /*#__PURE__*/ jsx_runtime_.jsx("small", {
            className: "p-error",
            children: formik.errors[name]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("small", {
            className: "p-error",
            children: "\xa0"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "",
                "data-testid": "login",
                style: {
                    padding: "2vw"
                },
                children: [
                    panel == LoginPanels.LoginInsertEmailPhone && /*#__PURE__*/ jsx_runtime_.jsx(LoginInsertEmailPhone, {
                        value: formik.values.phoneOrEmail,
                        onChange: (e)=>{
                            formik.setFieldValue("phoneOrEmail", e.target.value);
                        }
                    }),
                    panel == LoginPanels.LoginConfirmCode && /*#__PURE__*/ jsx_runtime_.jsx(LoginConfirmCode, {
                        goBack: goBack,
                        mobileOrEmail: formik.values.phoneOrEmail
                    }),
                    getFormErrorMessage("phoneOrEmail"),
                    panel != LoginPanels.LoginInsertEmailPhone && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "nav",
                        style: {
                            float: "left",
                            color: global/* GlobalConstants.SECENDARY_CSS */.t.SECENDARY_CSS
                        },
                        type: "button",
                        onClick: goBack,
                        children: " بازگشت"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "nav nav-pills nav-justified ",
                id: "ex1",
                role: "tablist",
                style: {
                    padding: "0px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "nav-item",
                    role: "presentation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: `nav-link active`,
                        children: "ورود"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/complex/auth-utils/register.tsx



function Register() {
    const toast = (0,external_react_.useRef)(null);
    const show = ()=>{
        toast.current.show({
            severity: "success",
            summary: "Form Submitted",
            detail: formik.values.value
        });
    };
    const formik = (0,external_formik_.useFormik)({
        initialValues: {
            value: ""
        },
        validate: (data)=>{
            let errors = {};
            if (!data.value) {
                errors.value = "Name - Surname is required.";
            }
            return errors;
        },
        onSubmit: (data)=>{
            data && show();
            formik.resetForm();
        }
    });
    const isFormFieldInvalid = (name)=>!!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name)=>{
        return isFormFieldInvalid(name) ? /*#__PURE__*/ jsx_runtime_.jsx("small", {
            className: "p-error",
            children: formik.errors[name]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("small", {
            className: "p-error",
            children: "\xa0"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "card flex justify-content-center",
        "data-testid": "register",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-outline mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            id: "registerName",
                            className: "form-control"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "form-label",
                            children: "Name"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-outline mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            id: "registerUsername",
                            className: "form-control"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "form-label",
                            children: "Username"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-outline mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "email",
                            id: "registerEmail",
                            className: "form-control"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "form-label",
                            children: "Email"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-outline mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "password",
                            id: "registerPassword",
                            className: "form-control"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "form-label",
                            children: "Password"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-outline mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "password",
                            id: "registerRepeatPassword",
                            className: "form-control"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "form-label",
                            children: "Repeat password"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-check d-flex justify-content-center mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input me-2",
                            type: "checkbox",
                            value: "",
                            id: "registerCheck",
                            checked: true,
                            "aria-describedby": "registerCheckHelpText"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "form-check-label",
                            children: "I have read and agree to the terms"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "submit",
                    className: "btn btn-primary btn-block mb-3",
                    children: "Sign in"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/complex/auth-utils/login-register-modal.tsx






function LoginRegisterModal() {
    const [visible, setVisible] = (0,external_react_.useState)(false);
    const [loginOrRegister, setLoginOrRegister] = (0,external_react_.useState)(1);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        "data-testid": "login-register-modal",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header_login_register_button, {
                onClick: ()=>setVisible(true)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dialog_.Dialog, {
                header: "ورود | ثبت نام",
                visible: visible,
                onHide: ()=>setVisible(false),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: " d-flex justify-content-center align-items-center",
                    "data-testid": "login",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: " d-flex flex-column align-items-center tab-content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/img/logo.svg",
                                width: 100,
                                height: 50,
                                alt: "لوگو"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tab-pane fade show active",
                                id: "pills-login",
                                role: "tabpanel",
                                "aria-labelledby": "tab-login",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        loginOrRegister === 1 && /*#__PURE__*/ jsx_runtime_.jsx(Login, {}),
                                        loginOrRegister === 2 && /*#__PURE__*/ jsx_runtime_.jsx(Register, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                            className: "text-caption color-700 mt-4",
                                            children: [
                                                "ورود شما به معنای پذیرش",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "mx-1 d-inline-block color-secondary-700",
                                                    children: "شرایط طلا کالا"
                                                }),
                                                "و",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "mx-1 d-inline-block color-secondary-700",
                                                    children: "قوانین حریم‌خصوصی"
                                                }),
                                                "است"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text-center mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    children: "ورود با  سرویس های دیگر "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    className: "btn btn-link btn-floating mx-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "pi pi-facebook"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    className: "btn btn-link btn-floating mx-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "pi pi-google"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    className: "btn btn-link btn-floating mx-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "pi pi-twitter"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    className: "btn btn-link btn-floating mx-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "pi pi-github"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/complex/header.tsx








class Header extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: " ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "navbar-brand",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/img/sample-header.gif",
                                width: "100%",
                                height: "50px",
                                className: "sample-header",
                                alt: "header"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "navbar navbar-expand-lg ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container-fluid ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "navbar-brand me-5 pe-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: "/",
                                    shallow: true,
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/logo.svg",
                                            width: 100,
                                            height: 50,
                                            alt: "لوگو"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "navbar-toggler",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#navbarTogglerDemo02",
                                "aria-controls": "navbarTogglerDemo02",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "navbar-toggler-icon"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(HeaderSearch, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "collapse navbar-collapse ms-5 ps-5",
                                id: "navbarTogglerDemo02",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "navbar-nav me-auto mb-2 mb-lg-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LoginRegisterModal, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-muted",
                                            style: {
                                                fontSize: "33px",
                                                color: "rgb(33 37 41 / 28%)"
                                            },
                                            children: "| "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(HeaderBasket, {})
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "navbar navbar-expand-lg bg-body-tertiary link-bottom-dec ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container-fluid ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "me-5 pe-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(MegaMeno, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "nav-item dropdown",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "dropdown-content",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "card",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "card-body mega-menu-body",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            className: "card-title",
                                                            children: "Card title"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "card-text",
                                                            children: "Some quick example text to build on the card title and make up the bulk of the cards content."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "btn btn-primary",
                                                            children: "Go somewhere"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "navbar-toggler",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#navbarNav",
                                "aria-controls": "navbarNav",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "navbar-toggler-icon"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "collapse navbar-collapse justify-content-between",
                                id: "navbarNav",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link text-muted ",
                                                    children: "سوپرمارکت"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link text-muted",
                                                    children: "پرفروش ترین ها"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link text-muted",
                                                    children: "تخفیف ها و پیشنهاد ما"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link text-muted",
                                                    children: "شگفت انگیز ها "
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link text-muted",
                                                    children: "سوالی دارید ؟"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link text-muted",
                                                    children: "در دیجی کالا بفروشید"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "navbar-nav ms-5 ps-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "collapse navbar-collapse",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(SelectCityModal, {})
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    }
}


/***/ })

};
;