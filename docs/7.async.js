(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"+IzV":function(e,t,a){"use strict";var n=a("Dthn"),l=a("FfR7");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("//S6");var r=l(a("OOpX"));a("nAzZ");var u=l(a("Pmrn"));a("quNJ");var o=l(a("Gf0t")),d=n(a("OmF7")),f=l(a("6cB7")),c=a("L5c0"),i=(o.default.TabPane,u.default.Option,function(e){function t(t){var a=e.call(this,t)||this;return a.props.dispatch({type:"global/getInfoFromAPI",pathname:"journalismApi",search:""}),a.props.dispatch({type:"global/getInfoFromAPI",pathname:"weatherApi",search:"city=\u5317\u4eac"}),a}return d.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.infoFromAPI,a=(e.loading,t.journalismApi_||null),n=t.weatherApi_city_\u5317\u4eac||null;return f.default.createElement("div",{style:{overflow:"hidden"}},n?f.default.createElement(f.default.Fragment,null,f.default.createElement("h2",null,"weather"),f.default.createElement(r.default,{size:"small",bordered:!0,dataSource:["\u4eca\u65e5\u6c14\u6e29\uff1a"+n.data.wendu+"\u2103",n.data.ganmao].concat(n.data.forecast.map(function(e,t){return f.default.createElement(f.default.Fragment,null,f.default.createElement("span",{style:{flex:1}},e.date),f.default.createElement("span",{style:{flex:1}},e.type),f.default.createElement("span",{style:{flex:1}},e.fengxiang),f.default.createElement("span",{style:{flex:1}},e.high),f.default.createElement("span",{style:{flex:1}},e.low))})),renderItem:function(e){return f.default.createElement(r.default.Item,null,e)}})):null,a?Object.keys(a.data).map(function(e,t){return f.default.createElement("div",{style:{margin:"10px 0"}},f.default.createElement("h2",null,e),f.default.createElement(r.default,{size:"small",bordered:!0,dataSource:a.data[e].filter(function(e){return e.title}).map(function(e,t){return f.default.createElement(f.default.Fragment,null,f.default.createElement("span",{style:{cursor:"pointer"},onClick:function(){window.open(e.link)}},f.default.createElement("a",null,e.title),f.default.createElement("span",{style:{position:"absolute",right:"10px"}},e.source)))}),renderItem:function(e){return f.default.createElement(r.default.Item,null,e)}}))}):null)},t}(f.default.Component)),m=(0,c.connect)(function(e){return{loading:e.loading.global,infoFromAPI:e.global.infoFromAPI}})(i);t.default=m}}]);