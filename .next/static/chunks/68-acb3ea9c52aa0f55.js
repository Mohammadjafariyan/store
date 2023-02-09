"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68],{2068:function(e,t,n){n.d(t,{d:function(){return g}});var a=n(7294),i=n(6367),r=n(6516),l=n(3308),o=n(4951),c=n(9868),u=n(3643);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function v(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r,l,o=[],c=!0,u=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=r.call(n)).done)&&(o.push(a.value),o.length!==t);c=!0);}catch(s){u=!0,i=s}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}(e,t)||v(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=a.memo(a.forwardRef(function(e,t){var n=function(){var t=e.activeItemIndex+1;e.onActiveItemChange({index:e.circular&&e.value.length-1===e.activeItemIndex?0:t})},i=function(){var t=0!==e.activeItemIndex?e.activeItemIndex-1:0;e.onActiveItemChange({index:e.circular&&0===e.activeItemIndex?e.value.length-1:t})},r=function(){e.slideShowActive&&e.stopSlideShow&&e.stopSlideShow()},o=function(e){r(),i(),e&&e.cancelable&&e.preventDefault()},s=function(e){r(),n(),e&&e.cancelable&&e.preventDefault()},m=function(t){r(),e.onActiveItemChange({index:t})},v=function(t){e.changeItemOnIndicatorHover&&(r(),e.onActiveItemChange({index:t}))},d=function(t,n){13===t.which&&(r(),e.onActiveItemChange({index:n}))};(0,l.nw)(function(){e.autoPlay&&e.startSlideShow()});var p=function(t){var n=e.activeItemIndex===t,i=(0,u.AK)("p-galleria-indicator",{"p-highlight":n}),r=e.indicator&&e.indicator(t);return r||(r=a.createElement("button",{type:"button",tabIndex:-1,className:"p-link"},a.createElement(c.H,null))),a.createElement("li",{className:i,key:"p-galleria-indicator-"+t,tabIndex:0,onClick:function(){return m(t)},onMouseEnter:function(){return v(t)},onKeyDown:function(e){return d(e,t)}},r)},h=e.itemTemplate&&e.itemTemplate(e.value[e.activeItemIndex]),f=function(){if(e.showItemNavigators){var t=!e.circular&&0===e.activeItemIndex,n=(0,u.AK)("p-galleria-item-prev p-galleria-item-nav p-link",{"p-disabled":t});return a.createElement("button",{type:"button",className:n,onClick:o,disabled:t},a.createElement("span",{className:"p-galleria-item-prev-icon pi pi-chevron-left"}),a.createElement(c.H,null))}return null}(),g=function(){if(e.showItemNavigators){var t=!e.circular&&e.activeItemIndex===e.value.length-1,n=(0,u.AK)("p-galleria-item-next p-galleria-item-nav p-link",{"p-disabled":t});return a.createElement("button",{type:"button",className:n,onClick:s,disabled:t},a.createElement("span",{className:"p-galleria-item-next-icon pi pi-chevron-right"}),a.createElement(c.H,null))}return null}(),I=function(){if(e.caption){var t=e.caption(e.value[e.activeItemIndex]);return a.createElement("div",{className:"p-galleria-caption"},t)}return null}(),b=function(){if(e.showIndicators){for(var t=(0,u.AK)("p-galleria-indicators p-reset",e.indicatorsContentClassName),n=[],i=0;i<e.value.length;i++)n.push(p(i));return a.createElement("ul",{className:t},n)}return null}();return a.createElement("div",{ref:t,className:"p-galleria-item-wrapper"},a.createElement("div",{className:"p-galleria-item-container"},f,a.createElement("div",{className:"p-galleria-item"},h),g,I),b)}));p.displayName="GalleriaItem";var h=a.memo(function(e){var t=e.active?0:null,n=e.template&&e.template(e.item),i=(0,u.AK)("p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":e.current,"p-galleria-thumbnail-item-active":e.active,"p-galleria-thumbnail-item-start":e.start,"p-galleria-thumbnail-item-end":e.end},e.className);return a.createElement("div",{className:i},a.createElement("div",{className:"p-galleria-thumbnail-item-content",tabIndex:t,onClick:function(t){e.onItemClick({originalEvent:t,index:e.index})},onKeyDown:function(t){13===t.which&&e.onItemClick({originalEvent:t,index:e.index})}},n))}),f=a.memo(a.forwardRef(function(e,t){var n,r,o,s,p=d(a.useState(e.numVisible),2),f=p[0],g=p[1],I=d(a.useState(0),2),b=I[0],x=I[1],y=a.useRef(null),w=a.useRef(null),E=a.useRef(""),N=a.useRef(null),S=a.useRef(null),A=(0,l.D9)(f),C=(0,l.D9)(e.activeItemIndex),P=d((0,l.HR)({listener:function(){Z()},when:e.responsiveOptions}),1)[0],T=function(t){var n=b+t;t<0&&-1*n+f>e.value.length-1?n=f-e.value.length:t>0&&n>0&&(n=0),e.circular&&(t<0&&e.value.length-1===e.activeItemIndex?n=0:t>0&&0===e.activeItemIndex&&(n=f-e.value.length)),y.current&&(u.p7.removeClass(y.current,"p-items-hidden"),y.current.style.transform=e.isVertical?"translate3d(0, ".concat(n*(100/f),"%, 0)"):"translate3d(".concat(n*(100/f),"%, 0, 0)"),y.current.style.transition="transform 500ms ease 0s"),x(n)},k=function(){e.slideShowActive&&e.stopSlideShow&&e.stopSlideShow()},O=function(){var e=Math.floor(f/2);return f%2?e:e-1},V=function(t){k();var n=0!==e.activeItemIndex?e.activeItemIndex-1:0;f-(n+b)-1>O()&&(-1*b!=0||e.circular)&&T(1),e.onActiveItemChange({index:e.circular&&0===e.activeItemIndex?e.value.length-1:n}),t.cancelable&&t.preventDefault()},H=function(t){k();var n=e.activeItemIndex+1;n+b>O()&&(-1*b<D()-1||e.circular)&&T(-1),e.onActiveItemChange({index:e.circular&&e.value.length-1===e.activeItemIndex?0:n}),t.cancelable&&t.preventDefault()},K=function(t){k();var n=t.index;if(n!==e.activeItemIndex){var a=n+b,i=0;n<e.activeItemIndex?(i=f-a-1-O())>0&&-1*b!=0&&T(i):(i=O()-a)<0&&-1*b<D()-1&&T(i),e.onActiveItemChange({index:n})}},R=function(e,t){t<0?H(e):V(e)},D=function(){return e.value.length>f?e.value.length-f+1:0},j=function(){N.current||(N.current=u.p7.createInlineStyle(i.ZP.nonce));var t,n="\n            .p-galleria-thumbnail-items[".concat(E.current,"] .p-galleria-thumbnail-item {\n                flex: 1 0 ").concat(100/f,"%\n            }\n        ");if(e.responsiveOptions){S.current=function(e){if(Array.isArray(e))return m(e)}(t=e.responsiveOptions)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||v(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),S.current.sort(function(e,t){var n=e.breakpoint,a=t.breakpoint;return u.gb.sort(n,a,-1,i.ZP.locale,i.ZP.nullSortOrder)});for(var a=0;a<S.current.length;a++){var r=S.current[a];n+="\n                    @media screen and (max-width: ".concat(r.breakpoint,") {\n                        .p-galleria-thumbnail-items[").concat(E.current,"] .p-galleria-thumbnail-item {\n                            flex: 1 0 ").concat(100/r.numVisible,"%\n                        }\n                    }\n                ")}}N.current.innerHTML=n},Z=function(){if(y.current&&S.current){for(var t=window.innerWidth,n={numVisible:e.numVisible},a=0;a<S.current.length;a++){var i=S.current[a];parseInt(i.breakpoint,10)>=t&&(n=i)}f!==n.numVisible&&g(n.numVisible)}};(0,l.nw)(function(){y.current&&(E.current=(0,u.Th)(),y.current.setAttribute(E.current,"")),j(),Z(),P()}),(0,l.rf)(function(){var t=b;(A!==f||C!==e.activeItemIndex)&&((t=e.activeItemIndex<=O()?0:e.value.length-f+O()<e.activeItemIndex?f-e.value.length:e.value.length-f<e.activeItemIndex&&f%2==0?-1*e.activeItemIndex+O()+1:-1*e.activeItemIndex+O())!==b&&x(t),y.current.style.transform=e.isVertical?"translate3d(0, ".concat(t*(100/f),"%, 0)"):"translate3d(".concat(t*(100/f),"%, 0, 0)"),C!==e.activeItemIndex&&(u.p7.removeClass(y.current,"p-items-hidden"),y.current.style.transition="transform 500ms ease 0s"))});var M=(n=e.value.map(function(t,n){var i=-1*b,r=i+f-1,l=e.activeItemIndex===n;return a.createElement(h,{key:n,index:n,template:e.itemTemplate,item:t,active:i<=n&&r>=n,start:i===n,end:r===n,onItemClick:K,current:l})}),r=e.isVertical?e.contentHeight:"",o=function(){if(e.showThumbnailNavigators){var t=!e.circular&&0===e.activeItemIndex||e.value.length<=f,n=(0,u.AK)("p-galleria-thumbnail-prev p-link",{"p-disabled":t}),i=(0,u.AK)("p-galleria-thumbnail-prev-icon pi",{"pi-chevron-left":!e.isVertical,"pi-chevron-up":e.isVertical});return a.createElement("button",{className:n,onClick:V,disabled:t},a.createElement("span",{className:i}),a.createElement(c.H,null))}return null}(),s=function(){if(e.showThumbnailNavigators){var t=!e.circular&&e.activeItemIndex===e.value.length-1||e.value.length<=f,n=(0,u.AK)("p-galleria-thumbnail-next p-link",{"p-disabled":t}),i=(0,u.AK)("p-galleria-thumbnail-next-icon pi",{"pi-chevron-right":!e.isVertical,"pi-chevron-down":e.isVertical});return a.createElement("button",{className:n,onClick:H,disabled:t},a.createElement("span",{className:i}),a.createElement(c.H,null))}return null}(),a.createElement("div",{className:"p-galleria-thumbnail-container"},o,a.createElement("div",{className:"p-galleria-thumbnail-items-container",style:{height:r}},a.createElement("div",{ref:y,className:"p-galleria-thumbnail-items",onTransitionEnd:function(e){y.current&&"transform"===e.propertyName&&(u.p7.addClass(y.current,"p-items-hidden"),y.current.style.transition="")},onTouchStart:function(e){var t=e.changedTouches[0];w.current={x:t.pageX,y:t.pageY}},onTouchMove:function(e){e.cancelable&&e.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];e.isVertical?R(t,n.pageY-w.current.y):R(t,n.pageX-w.current.x)}},n)),s));return a.createElement("div",{className:"p-galleria-thumbnail-wrapper"},M)}));h.displayName="GalleriaThumbnailItem",f.displayName="GalleriaThumbnails";var g=a.memo(a.forwardRef(function(e,t){var n=d(a.useState(!1),2),m=n[0],v=n[1],h=d(a.useState(e.numVisible),2),I=h[0],b=h[1],x=d(a.useState(!1),2),y=x[0],w=x[1],E=d(a.useState(e.activeIndex),2),N=E[0],S=E[1],A=a.useRef(null),C=a.useRef(null),P=a.useRef(null),T=e.onItemChange?e.activeIndex:N,k="left"===e.thumbnailsPosition||"right"===e.thumbnailsPosition;(0,l.Yz)(function(){O({index:e.circular&&e.value.length-1===T?0:T+1})},e.transitionInterval,y);var O=function(t){e.onItemChange?e.onItemChange(t):S(t.index)},V=function(){v(!0)},H=function(){v(!1)},K=function(){u.p7.addClass(document.body,"p-overflow-hidden")},R=function(){u.P9.set("modal",P.current,i.ZP.autoZIndex,e.baseZIndex||i.ZP.zIndex.modal),u.p7.addMultipleClasses(P.current,"p-component-overlay p-component-overlay-enter")},D=function(){e.onShow&&e.onShow()},j=function(){u.p7.removeClass(document.body,"p-overflow-hidden"),u.p7.addClass(P.current,"p-component-overlay-leave")},Z=function(){u.P9.clear(P.current),e.onHide&&e.onHide()},M=function(){return y},_=function(){w(!0)},G=function(){w(!1)},Y=function(e,t){var n=["top","left","bottom","right"].find(function(e){return e===t});return n?"".concat(e,"-").concat(n):""};a.useEffect(function(){e.value&&e.value.length<I&&b(e.value.length)},[e.value,I]),a.useEffect(function(){b(e.numVisible)},[e.numVisible]),(0,l.zq)(function(){y&&G(),u.P9.clear(P.current)}),a.useImperativeHandle(t,function(){return{props:e,show:V,hide:H,isAutoPlayActive:M,startSlideShow:_,stopSlideShow:G,getElement:function(){return A.current},getPreviewContent:function(){return C.current}}});var z=function(){var t=u.gb.findDiffKeys(e,g.defaultProps),n=e.showThumbnails&&Y("p-galleria-thumbnails",e.thumbnailsPosition),r=e.showIndicators&&Y("p-galleria-indicators",e.indicatorsPosition),l=(0,u.AK)("p-galleria p-component",e.className,{"p-galleria-fullscreen":e.fullScreen,"p-galleria-indicator-onitem":e.showIndicatorsOnItem,"p-galleria-item-nav-onhover":e.showItemNavigatorsOnHover&&!e.fullScreen},n,r),o=e.fullScreen&&a.createElement("button",{type:"button",className:"p-galleria-close p-link","aria-label":(0,i.qJ)("close"),onClick:H},a.createElement("span",{className:"p-galleria-close-icon pi pi-times","aria-hidden":"true"}),a.createElement(c.H,null)),m=e.header?a.createElement("div",{className:"p-galleria-header"},e.header):null,v=e.footer?a.createElement("div",{className:"p-galleria-footer"},e.footer):null;return a.createElement("div",s({ref:A,id:e.id,className:l,style:e.style},t),o,m,a.createElement("div",{className:"p-galleria-content"},a.createElement(p,{ref:C,value:e.value,activeItemIndex:T,onActiveItemChange:O,itemTemplate:e.item,circular:e.circular,caption:e.caption,showIndicators:e.showIndicators,changeItemOnIndicatorHover:e.changeItemOnIndicatorHover,indicator:e.indicator,showItemNavigators:e.showItemNavigators,autoPlay:e.autoPlay,slideShowActive:y,startSlideShow:_,stopSlideShow:G}),e.showThumbnails&&a.createElement(f,{value:e.value,activeItemIndex:T,onActiveItemChange:O,itemTemplate:e.thumbnail,numVisible:I,responsiveOptions:e.responsiveOptions,circular:e.circular,isVertical:k,contentHeight:e.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.showThumbnailNavigators,autoPlay:e.autoPlay,slideShowActive:y,stopSlideShow:G})),v)};return u.gb.isNotEmpty(e.value)&&function(){var t=z();if(e.fullScreen){var n=(0,u.AK)("p-galleria-mask",{"p-galleria-visible":m}),i=a.createElement("div",{ref:P,className:n},a.createElement(r.K,{nodeRef:A,classNames:"p-galleria",in:m,timeout:{enter:150,exit:150},options:e.transitionOptions,unmountOnExit:!0,onEnter:K,onEntering:R,onEntered:D,onExit:j,onExited:Z},t));return a.createElement(o.h,{element:i})}return t}()}));g.displayName="Galleria",g.defaultProps={__TYPE:"Galleria",id:null,value:null,activeIndex:0,fullScreen:!1,item:null,thumbnail:null,indicator:null,caption:null,className:null,style:null,header:null,footer:null,numVisible:3,responsiveOptions:null,showItemNavigators:!1,showThumbnailNavigators:!0,showItemNavigatorsOnHover:!1,changeItemOnIndicatorHover:!1,circular:!1,autoPlay:!1,transitionInterval:4e3,showThumbnails:!0,thumbnailsPosition:"bottom",verticalThumbnailViewPortHeight:"300px",showIndicators:!1,showIndicatorsOnItem:!1,indicatorsPosition:"bottom",baseZIndex:0,transitionOptions:null,onItemChange:null}}}]);