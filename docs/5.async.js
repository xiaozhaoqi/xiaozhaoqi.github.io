(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"1u08":function(e,t,l){"use strict";var i=l("fbTi"),o=l("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,l("g7dW");var n=o(l("92bB"));l("UqIb");var a=o(l("Rk8M"));l("jDsq");var r=o(l("sUc3")),d=i(l("rOct")),s=l("Nyzl"),c=o(l("i9FB")),p=o(l("AoqS")),u=l("x8j0"),f=function(e){function t(t){var l=e.call(this,t)||this;return l.state={title:decodeURI(document.location.hash.split("title=")[1]),renderArticle:{},toTop:"none"},t.dispatch({type:"global/getCurrentArticleList"}).then(function(){t.articleList.map(function(e,t){e.title===l.state.title&&l.setState({renderArticle:e})})}),window.addEventListener("scroll",function(e){document.body.scrollTop>document.body.offsetHeight?l.setState({toTop:"block"}):l.setState({toTop:"none"})}),l}return d.__extends(t,e),t.prototype.render=function(){var e=new Date(this.state.renderArticle.time).toLocaleString();return c.default.createElement("div",{style:{wordBreak:"break-all",wordWrap:"break-word",overflow:"hidden"}},this.props.articleList&&!this.props.loading?c.default.createElement(a.default,{size:"lg"},c.default.createElement(r.default,{size:"lg"}),c.default.createElement("h2",{style:{fontSize:"18px",fontWeight:"bold",lineHeight:"1.4",marginBottom:"14px"}},this.state.renderArticle.title),c.default.createElement("div",{style:{marginBottom:"22px",lineHeight:"20px",wordWrap:"break-word",wordBreak:"break-all"}},c.default.createElement("span",{style:{color:"rgba(0,0,0,0.3)",display:"inline-block",verticalAlign:"middle",margin:"0 10px 10px 0",fontSize:"15px"}},"zhaoqi.xiao"),c.default.createElement("span",{onClick:function(){p.default.push("/#/mobile")},style:{color:"#576b95",display:"inline-block",verticalAlign:"middle",margin:"0 10px 10px 0",fontSize:"15px"}},"IOBoard"),c.default.createElement("span",{style:{color:"rgba(0,0,0,0.3)",display:"inline-block",verticalAlign:"middle",margin:"0 10px 10px 0",fontSize:"15px"}},e)),c.default.createElement(u,{source:this.state.renderArticle.content,escapeHtml:!1})):c.default.createElement(n.default,{type:"loading",size:"lg",style:{position:"absolute",top:"50%",left:"45%"}}),c.default.createElement(n.default,{type:"up",size:"lg",style:{position:"fixed",right:"20vw",bottom:"10vh",display:this.state.toTop},onClick:function(){window.scrollTo({top:0})}}))},t}(c.default.Component);function m(e){return{loading:e.loading.global,articleList:e.global.articleList}}var g=(0,s.connect)(m)(f);t.default=g}}]);