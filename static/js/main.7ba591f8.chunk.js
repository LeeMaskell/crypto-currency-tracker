(this["webpackJsonpcrypto-currency-tracker"]=this["webpackJsonpcrypto-currency-tracker"]||[]).push([[0],{10:function(e,t,a){e.exports={searchContainer:"MarketSummary_searchContainer__1o5jM",heading:"MarketSummary_heading__3kd26",input:"MarketSummary_input__1IlUM",btn:"MarketSummary_btn__2V47q",dataContainer:"MarketSummary_dataContainer__XwaPa"}},29:function(e,t,a){},3:function(e,t,a){e.exports={container:"CoinSummary_container__qWrxr",contentFlex:"CoinSummary_contentFlex__1hsI0",row:"CoinSummary_row__11KNg",noRow:"CoinSummary_noRow__-nia_",coinType:"CoinSummary_coinType__3Ugur",priceContainer:"CoinSummary_priceContainer__2kAKK",percentageContainer:"CoinSummary_percentageContainer__1yyaM",addButtonContainer:"CoinSummary_addButtonContainer__3ft7I",closeBtn:"CoinSummary_closeBtn__2Mkc3",flexItem:"CoinSummary_flexItem__24ZZk",mktCapFlexItem:"CoinSummary_mktCapFlexItem__332bD",symbol:"CoinSummary_symbol__1uV8D",data:"CoinSummary_data__Knxxc",price:"CoinSummary_price__1V0mc",percent:"CoinSummary_percent__detLu",red:"CoinSummary_red__3itrS",green:"CoinSummary_green__3YyXS",btn:"CoinSummary_btn__2Bm4z",mktCapConatainer:"CoinSummary_mktCapConatainer__38MA3",displayFlex:"CoinSummary_displayFlex__cVKZt",name:"CoinSummary_name__3hdU3"}},4:function(e,t,a){e.exports={container:"WatchedCoin_container__26OXg",stickyHeading:"WatchedCoin_stickyHeading__1DQH3",text:"WatchedCoin_text__31rzf",row:"WatchedCoin_row__3JG1K",coinType:"WatchedCoin_coinType__3d7ul",priceContainer:"WatchedCoin_priceContainer__ZhhAu",percentageContainer:"WatchedCoin_percentageContainer__cfGnP",removeBtnConatainer:"WatchedCoin_removeBtnConatainer__Si02c",symbol:"WatchedCoin_symbol__2fzXN",data:"WatchedCoin_data__1uOIZ",price:"WatchedCoin_price__RStC5",percent:"WatchedCoin_percent__3O66H",red:"WatchedCoin_red__1E1-b",green:"WatchedCoin_green__2o5X_",btn:"WatchedCoin_btn__13_P5"}},50:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(22),r=a.n(i),s=a(2),l=(a(29),a(24)),o=a(23),u=a.n(o),d=a(0),_=Object(n.createContext)();function j(e){var t=e.children,a=Object(n.useState)([]),c=Object(s.a)(a,2),i=c[0],r=c[1],o=Object(n.useState)(!0),j=Object(s.a)(o,2),m=j[0],h=j[1],b="aud";b=1==m?"aud":"usd",Object(n.useEffect)((function(){u.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(b,"&order=market_cap_desc&per_page=50&page=1&sparkline=false")).then((function(e){r(e.data)})).catch((function(e){return console.log(e)}))}),[m]);var x=Object(n.useState)([]),O=Object(s.a)(x,2),p=O[0],C=O[1];return Object(d.jsx)(_.Provider,{value:{coins:i,setCurrency:h,currency:m,watchlist:p,setWatchlist:C,addToWatchlist:function(e){console.log(e),p.includes(e)?C(p):C([].concat(Object(l.a)(p),[e]))},removeFromWatchlist:function(e){var t=p.filter((function(t){return t.name!==e.name}));C(t)}},children:t})}var m=_,h=a(3),b=a.n(h),x=function(e){var t=e.coinData,a=Object(n.useContext)(m),c=Object(n.useState)(!1),i=Object(s.a)(c,2),r=i[0],l=i[1];return Object(d.jsx)("div",{className:b.a.container,children:Object(d.jsxs)("div",{className:b.a.contentFlex,children:[Object(d.jsxs)("section",{className:b.a.row,children:[Object(d.jsxs)("div",{className:b.a.coinType,children:[Object(d.jsx)("img",{src:t.image,alt:"crytpto logo"}),Object(d.jsx)("h4",{onClick:function(){return l(!0)},children:t.name})]}),Object(d.jsx)("div",{className:b.a.priceContainer,children:Object(d.jsxs)("p",{className:b.a.price,children:["$",t.current_price]})}),Object(d.jsx)("div",{className:b.a.percentageContainer,children:t.price_change_percentage_24h<0?Object(d.jsxs)("p",{className:"".concat(b.a.percent," ").concat(b.a.red),children:[t.price_change_percentage_24h.toFixed(2),"%"]}):Object(d.jsxs)("p",{className:"".concat(b.a.percent," ").concat(b.a.green),children:[t.price_change_percentage_24h.toFixed(2),"%"]})}),Object(d.jsx)("div",{className:b.a.addButtonContainer,children:Object(d.jsx)("button",{className:b.a.btn,onClick:function(){return a.addToWatchlist(t)},children:"+"})})]}),Object(d.jsxs)("section",{className:"".concat(r?b.a.row:b.a.noRow),children:[Object(d.jsx)("div",{className:b.a.closeBtn,children:Object(d.jsx)("h2",{onClick:function(){return l(!1)},children:"x"})}),Object(d.jsx)("div",{className:b.a.flexItem,children:Object(d.jsxs)("p",{children:["Variation: $",t.price_change_24h.toFixed(2)]})}),Object(d.jsx)("div",{className:b.a.flexItem,children:Object(d.jsxs)("p",{children:["24hr high: $",t.high_24h.toFixed(2)]})}),Object(d.jsx)("div",{className:b.a.flexItem,children:Object(d.jsxs)("p",{children:["24hr low: $",t.low_24h.toFixed(2)]})}),Object(d.jsx)("div",{className:b.a.mktCapFlexItem,children:Object(d.jsxs)("p",{children:["Mkt Cap: $",t.market_cap.toLocaleString()]})})]})]})})},O=a(10),p=a.n(O),C=function(e){var t=e.hide,a=Object(n.useContext)(m),c=Object(n.useState)(""),i=Object(s.a)(c,2),r=i[0],l=i[1],o=a.coins.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return Object(d.jsxs)("div",{className:"market-summary ".concat(t?"hidePanelMobile":""),children:[Object(d.jsxs)("div",{className:p.a.searchContainer,children:[Object(d.jsx)("h1",{className:p.a.heading,children:"SEARCH CURRENCIES"}),Object(d.jsx)("form",{action:"",children:Object(d.jsx)("input",{type:"text",placeholder:"enter currency",className:p.a.input,onChange:function(e){l(e.target.value)}})}),Object(d.jsx)("button",{className:p.a.btn,onClick:function(){a.setCurrency(!a.currency),console.log("clicked")},children:a.currency?"Convert to $USD":"Convert to $AUD"})]}),o.map((function(e){return Object(d.jsx)(x,{coinData:e})}))]})},g=a(6),v=a.n(g),y=function(e){var t=e.hide,a=Object(n.useContext)(m);console.log(a);var c=Object(n.useState)(null),i=Object(s.a)(c,2),r=i[0],l=i[1],o=Object(n.useState)(null),u=Object(s.a)(o,2),_=u[0],j=u[1],h=Object(n.useState)(null),b=Object(s.a)(h,2),x=b[0],O=b[1];return Object(d.jsxs)("div",{className:"estimates ".concat(t?"hidePanelMobile":""),children:[Object(d.jsx)("h1",{className:v.a.text,children:"PRICE ESTIMATES"}),Object(d.jsx)("div",{className:v.a.dataInput,children:Object(d.jsxs)("form",{className:v.a.flexContainer,action:"",children:[Object(d.jsx)("label",{htmlFor:"",className:v.a.label,children:"Currency"}),Object(d.jsxs)("select",{className:v.a.select,name:"currency",id:"currency",value:r,onChange:function(e){console.log(e.target.value),l(e.target.value)},children:[Object(d.jsx)("option",{disabled:!0,selected:!0,value:!0,children:" -- select an option -- "}),a.coins.map((function(e){return Object(d.jsx)("option",{value:e.current_price,children:e.name})}))]}),Object(d.jsx)("label",{className:v.a.label,children:"Quantity"}),Object(d.jsx)("input",{className:v.a.input,placeholder:"enter quantity",type:"text",id:"quantity",name:"quantity",value:_,onChange:function(e){return j(e.target.value)}})]})}),Object(d.jsxs)("div",{className:v.a.costDisplay,children:[Object(d.jsx)("button",{className:v.a.btn,onClick:function(e){e.preventDefault(),O(_*r)},children:"Calculate Cost"}),Object(d.jsxs)("h4",{className:v.a.white,children:["(CURRENT UNIT PRICE: $",r,")"]}),Object(d.jsxs)("h2",{className:v.a.white,children:["COST ESTIMATE: $",x," AUD"]})]})]})},f=a(7),N=a.n(f),S=function(e){var t=e.hide,a=Object(n.useContext)(m);console.log(a);var c=Object(n.useState)(null),i=Object(s.a)(c,2),r=i[0],l=i[1],o=Object(n.useState)(null),u=Object(s.a)(o,2),_=u[0],j=u[1],h=Object(n.useState)(null),b=Object(s.a)(h,2),x=b[0],O=b[1],p=Object(n.useState)(null),C=Object(s.a)(p,2),g=C[0],v=C[1];return Object(d.jsxs)("div",{className:"modelling ".concat(t?"hidePanelMobile":""),children:[Object(d.jsx)("h1",{className:N.a.text,children:"Modelling"}),Object(d.jsx)("div",{className:N.a.input,children:Object(d.jsxs)("form",{className:N.a.form,action:"",children:[Object(d.jsx)("label",{className:N.a.white,children:"Purchase Quantity"}),Object(d.jsx)("input",{placeholder:"enter quantity",type:"number",id:"purchaseQuantity",name:"purchaseQuantity",value:x,onChange:function(e){return O(e.target.value)}}),Object(d.jsx)("label",{className:N.a.white,children:"Value on Purchase"}),Object(d.jsx)("input",{placeholder:"enter value",type:"number",id:"purchasePrice",name:"purchasePrice",value:r,onChange:function(e){return l(e.target.value)}}),Object(d.jsx)("label",{className:N.a.white,children:"Estimated Total Sale Value"}),Object(d.jsx)("input",{placeholder:"enter value",type:"number",id:"sellPrice",name:"sellPrice",value:_,onChange:function(e){return j(e.target.value)}})]})}),Object(d.jsxs)("div",{className:N.a.costDisplay,children:[Object(d.jsx)("button",{className:N.a.btn,onClick:function(e){e.preventDefault(),v(_*x-r*x)},children:"Calculate Value"}),g>0?Object(d.jsxs)("h2",{className:N.a.red,children:["ESTIMATED VALUE:  $",g," AUD"]}):Object(d.jsxs)("h2",{className:N.a.green,children:["ESTIMATED VALUE:  $",g," AUD"]})]})]})},k=a(4),M=a.n(k),E=function(e){var t=e.coin,a=Object(n.useContext)(m);return Object(d.jsx)("div",{className:M.a.container,children:Object(d.jsxs)("div",{className:M.a.row,children:[Object(d.jsxs)("div",{className:M.a.coinType,children:[Object(d.jsx)("img",{src:t.image,alt:"crytpto logo"}),Object(d.jsx)("h4",{children:t.name})]}),Object(d.jsx)("div",{className:M.a.priceContainer,children:Object(d.jsxs)("p",{className:M.a.price,children:["$",t.current_price]})}),Object(d.jsx)("div",{className:M.a.percentageContainer,children:t.price_change_percentage_24h<0?Object(d.jsxs)("p",{className:"".concat(M.a.percent," ").concat(M.a.red),children:[t.price_change_percentage_24h.toFixed(2),"%"]}):Object(d.jsxs)("p",{className:"".concat(M.a.percent," ").concat(M.a.green),children:[t.price_change_percentage_24h.toFixed(2),"%"]})}),Object(d.jsx)("div",{className:M.a.removeBtnConatainer,children:Object(d.jsx)("button",{className:M.a.btn,onClick:function(){return a.removeFromWatchlist(t)},children:"-"})})]})})},P=function(e){var t=e.hide,a=Object(n.useContext)(m);return Object(d.jsxs)("div",{className:"watchlist ".concat(t?"hidePanelMobile":""),children:[Object(d.jsx)("div",{className:M.a.stickyHeading,children:Object(d.jsx)("h1",{className:M.a.text,children:"WATCHLIST"})}),a.watchlist.map((function(e){return Object(d.jsx)(E,{coin:e})}))]})},w=a(8),W=a.n(w),I=function(e){var t=e.hideFunction,a=Object(n.useState)(!1),c=Object(s.a)(a,2),i=c[0],r=c[1],l=function(e){t(e),r(!i)};return Object(d.jsxs)("nav",{className:W.a.navbar,children:[Object(d.jsx)("div",{className:W.a.flexContainer,children:Object(d.jsx)("div",{className:W.a.icon,onClick:function(){return r(!i)},children:"\u2630"})}),Object(d.jsx)("div",{className:i?"".concat(W.a.navLink," ").concat(W.a.showLink):"".concat(W.a.navLink),children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:W.a.item,onClick:function(){return l({MarketSummary:!1,PriceEstimate:!0,Modelling:!0,Watchlist:!0})},children:"Market Summary"}),Object(d.jsx)("li",{className:W.a.item,onClick:function(){return l({MarketSummary:!0,PriceEstimate:!1,Modelling:!0,Watchlist:!0})},children:"Price Estimates"}),Object(d.jsx)("li",{className:W.a.item,onClick:function(){return l({MarketSummary:!0,PriceEstimate:!0,Modelling:!1,Watchlist:!0})},children:"Modelling"}),Object(d.jsx)("li",{className:W.a.item,onClick:function(){return l({MarketSummary:!0,PriceEstimate:!0,Modelling:!0,Watchlist:!1})},children:"Watchlist"})]})})]})};var T=function(){var e=Object(n.useState)({MarketSummary:!1,PriceEstimate:!0,Modelling:!0,Watchlist:!0}),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(d.jsx)("div",{className:"home",children:Object(d.jsxs)(j,{children:[Object(d.jsx)(I,{hideFunction:c}),Object(d.jsx)(C,{hide:a.MarketSummary}),Object(d.jsx)(y,{hide:a.PriceEstimate}),Object(d.jsx)(S,{hide:a.Modelling}),Object(d.jsx)(P,{hide:a.Watchlist})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),F()},6:function(e,t,a){e.exports={dataInput:"PriceEstimate_dataInput__1OPJ1",flexContainer:"PriceEstimate_flexContainer__ZXRlb",input:"PriceEstimate_input__10nVQ",select:"PriceEstimate_select__14tr4",label:"PriceEstimate_label__2CqoJ",costDisplay:"PriceEstimate_costDisplay__3JmB3",text:"PriceEstimate_text__2aS3v",btn:"PriceEstimate_btn__3UtD3",white:"PriceEstimate_white__YmItB"}},7:function(e,t,a){e.exports={text:"Modelling_text__m5kNm",input:"Modelling_input__2T_Vk",form:"Modelling_form__2AOkQ",costDisplay:"Modelling_costDisplay__13-xf",btn:"Modelling_btn__ER8JV",value:"Modelling_value__lOsM0",red:"Modelling_red__39Hg1",green:"Modelling_green__1Twj5",white:"Modelling_white__nQDKc"}},8:function(e,t,a){e.exports={navLink:"Navbar_navLink__23hjr",showLink:"Navbar_showLink__1klSg",item:"Navbar_item__2aQVG",icon:"Navbar_icon__2Rew6",flexContainer:"Navbar_flexContainer__30bC_",navbar:"Navbar_navbar__1HfJ-"}}},[[50,1,2]]]);
//# sourceMappingURL=main.7ba591f8.chunk.js.map