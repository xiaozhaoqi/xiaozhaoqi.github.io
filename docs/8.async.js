(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{R29j:function(t,e,l){"use strict";var a=l("284h"),n=l("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,l("P2fV");var i=n(l("NJEC"));l("+L6B");var s=n(l("2/Rp"));l("OaEy");var o=n(l("2fM7"));l("5NDa");var r=n(l("5rEg")),u=a(l("mrSG")),d=n(l("q1tI")),c=l("MuoO"),f=l("iRFk"),m=l("SaUt"),p=(r.default.Group,o.default.Option),h=r.default.TextArea,g=function(t){function e(e){var l,a,n=t.call(this,e)||this;return n.handleKeyWord=function(t){n.setState({keyWord:t.target.value})},n.handleText=function(t){n.setState({text:t.target.value,isNullText:!t.target.value})},n.handleTitle=function(t){n.setState({title:t.target.value,isNullTitle:!t.target.value})},n.handleSelect=function(t){n.setState({selectValue:t})},n.save=function(){localStorage&&(localStorage.setItem("writing-title",n.state.title),localStorage.setItem("writing-text",n.state.text))},n.push=function(){n.state.title&&n.state.text?(console.log(n.state.text,n.state.title,n.state.keyWord,n.state.selectValue),n.props.dispatch({type:"global/sendNewArticle",payload:{title:n.state.title,content:n.state.text}})):(n.state.title||(window.scrollTo({top:0}),n.setState({isNullTitle:!0})),n.state.text||(window.scrollTo({top:0}),n.setState({isNullText:!0})))},localStorage&&(l=localStorage.getItem("writing-title"),a=localStorage.getItem("writing-text")),n.state={text:a||"",title:l||"",selectValue:"\u5206\u7c7b\u4e00",keyWord:"",isNullTitle:!1,isNullText:!1},n}return u.__extends(e,t),e.prototype.render=function(){var t=this;return d.default.createElement("div",null,d.default.createElement(o.default,{defaultValue:"\u5206\u7c7b\u4e00",style:{float:"left",margin:"0 10px 10px 0"},onSelect:this.handleSelect},d.default.createElement(p,{value:"\u5206\u7c7b\u4e00"},"\u5206\u7c7b\u4e00"),d.default.createElement(p,{value:"\u5206\u7c7b\u4e8c"},"\u5206\u7c7b\u4e8c")),d.default.createElement(r.default,{placeholder:"\u5173\u952e\u5b57\uff08\uff1b\u6216 ; \u5206\u9694\uff09",style:{width:"300px",float:"left",borderRadius:"5px"},onChange:this.handleKeyWord}),d.default.createElement(r.default,{value:this.state.title,placeholder:"\u6807\u9898",onChange:this.handleTitle,className:this.state.isNullTitle?m.dangerTitle:m.primaryTitle}),d.default.createElement("div",null,d.default.createElement(h,{onChange:this.handleText,className:this.state.isNullText?m.dangerWriteArea:m.writeArea,value:this.state.text,placeholder:"Markdown\u8bed\u6cd5\u7f16\u8f91\u5668",autosize:!0}),d.default.createElement(f,{source:this.state.text,className:m.parseMarkdown,escapeHtml:!1})),d.default.createElement("div",{style:{float:"left"}},d.default.createElement(s.default,{type:"primary",onClick:this.push,className:m.submitButton},"\u53d1\u5e03"),localStorage?d.default.createElement(s.default,{type:"default",onClick:this.save,className:m.submitButton},"\u5b58\u4e3a\u8349\u7a3f"):null,d.default.createElement(i.default,{title:"\u786e\u5b9a\u6e05\u9664\u6b63\u5728\u7f16\u8f91\u7684\u5185\u5bb9\uff0c\u5e76\u6e05\u7a7a\u8349\u7a3f\u7bb1\uff1f",onConfirm:function(){t.setState({text:"",title:""}),localStorage&&(localStorage.removeItem("writing-title"),localStorage.removeItem("writing-text"))},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},d.default.createElement(s.default,{type:"danger",className:m.submitButton},"\u91cd\u7f6e")),d.default.createElement(s.default,{type:"dashed",onClick:function(){window.open("https://www.jianshu.com/p/191d1e21f7ed","_blank")},className:m.submitButton},"Help")))},e}(d.default.Component),x=(0,c.connect)()(g);e.default=x}}]);