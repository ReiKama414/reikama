(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{671:function(t,e,r){"use strict";r.r(e);r(4),r(58),r(11),r(25),r(87),r(45);var n=r(111),l=r.n(n),o={props:{post:{type:[Array,Object],default:function(){return{}}},keyword:{type:String,default:null},showd:{type:Boolean,default:!0},searchrange:{type:String,default:null}},methods:{formatDate:function(t){return l()(t).format("YYYY-MM-DD")},replaceKey:function(t,content){if(content=content.replace(/</g,"&lt;").replace(/>/g,"&gt;"),!t||""===t)return content;for(var e=["\\","/","[","]","(",")"],i=0;i<e.length;i++)t=t.replace(e[i],"\\".concat(e[i]));return content.replace(new RegExp(t.replace(/</g,"&lt;").replace(/>/g,"&gt;"),"gi"),(function(t){return"<mark>".concat(t,"</mark>")}))}}},c=r(49),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"search-item d-flex justify-content-between flex-wrap"},[e("div",{staticClass:"col-12 mt-2 header"},[e("nuxt-link",{staticClass:"flex-fill text-left",attrs:{to:t.localePath("/blog/".concat(t.post.slug)),title:t.post.title}},["ranged"!==t.searchrange?e("span",{domProps:{innerHTML:t._s(t.replaceKey(t.keyword,t.post.title))}}):e("span",[t._v(" "+t._s(t.post.title)+" ")])]),t._v(" "),e("div",{staticClass:"pl-2 custom-mw1"},[e("fa",{staticClass:"mr-1",attrs:{icon:["fa-solid","pen"]}}),t._v(" "),e("span",[t._v(t._s(t.formatDate(t.post.createdAt)))])],1)],1),t._v(" "),t.showd?e("div",{staticClass:"col-12 text-left content mb-2 mt-1"},["ranget"!==t.searchrange?e("span",{domProps:{innerHTML:t._s(t.replaceKey(t.keyword,t.post.description))}}):e("span",[t._v(" "+t._s(t.post.description)+" ")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);