(window.webpackJsonp=window.webpackJsonp||[]).push([[19,9],{670:function(t,e,n){"use strict";n.r(e);n(4),n(58);var o=n(111),r=n.n(o),c={props:{post:{type:[Array,Object],default:function(){return{}}}},methods:{formatDate:function(t){return r()(t).format("YYYY-MM-DD")}}},l=n(49),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"rscp-card"},[e("div",{staticClass:"post-img"},[e("nuxt-link",{attrs:{to:t.localePath("/blog/".concat(t.post.slug))}},[e("img",{attrs:{alt:"Title img",src:n(203)("./".concat(t.post.image))}})])],1),t._v(" "),e("div",{staticClass:"post-info text-left pt-2"},[e("div",{staticClass:"post-tag"},[e("NuxtLink",{staticClass:"text-capitalize",attrs:{to:t.localePath("/tags/".concat(t.post.type))}},[t._v("\n        "+t._s(t.$t("".concat(t.post.type)))+"\n      ")])],1),t._v(" "),e("h3",{staticClass:"font-weight-bold"},[e("nuxt-link",{attrs:{to:t.localePath("/blog/".concat(t.post.slug)),title:t.post.title}},[t._v("\n        "+t._s(t.post.title)+"\n      ")])],1),t._v(" "),e("p",[t._v(t._s(t.post.description))]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-end"},[e("div",[e("fa",{staticClass:"mr-1",attrs:{icon:["fa-regular","calendar-check"]}}),t._v("\n        "+t._s(t.formatDate(t.post.createdAt))+"\n      ")],1),t._v(" "),e("a",{attrs:{href:t.post.go,target:"_blank"}},[e("fa",{attrs:{icon:["fa-solid","up-right-from-square"]}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},786:function(t,e,n){"use strict";n.r(e);var o=n(774),r=n(775),c=n(24),l=(n(21),n(110),n(44),n(67),{name:"Resource",data:function(){return{posts:[],page:1,pageSize:12,startIndex:0,endIndex:12,loadState:!0,loadState2:!0}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("resource").without(["body"]).sortBy("createdAt","desc").fetch();case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.$i18n.t("resource")," | Kama's Blog"),htmlAttrs:{lang:this.$i18n.t("localeSetting")},meta:[{hid:"description",name:"description",content:this.$i18n.t("indexmd")},{property:"og:title",content:"".concat(this.$i18n.t("resource")," | Kama's Blog")},{property:"og:description",content:this.$i18n.t("indexmd")},{property:"og:locale",content:this.$i18n.t("localeSetting")}]}},computed:{pages:function(){return Math.ceil(this.posts.length/this.pageSize)},HistoryList:function(){return this.posts.length<this.pageSize?this.posts:this.posts.slice(this.startIndex,this.endIndex)}},mounted:function(){var t=this;this.$route.query.page&&this.updatePage(Number(this.$route.query.page)),this.$nextTick((function(){setTimeout((function(){t.loadState=!1,t.loadState2=!1}),2250)}))},methods:{updatePage:function(t){var e=this;window.scrollTo({top:0,left:0,behavior:"smooth"}),this.startIndex=(t-1)*this.pageSize,this.endIndex=t*this.pageSize,this.page=t,this.loadState2=!0,this.$nextTick((function(){setTimeout((function(){e.loadState2=!1}),2250)}))}}}),d=n(49),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main pfl position-relative"},[e("div",{staticClass:"hd-i-w",staticStyle:{"background-image":"url(/_nuxt/assets/images/background/art5.jpg)",opacity:".75"}}),t._v(" "),e("section",{staticClass:"area-tf mt-3"},[t.loadState?e("h3",{staticClass:"mx-auto"}):e("h3",[t._v("\n      "+t._s(t.$t("resource"))+"\n    ")]),t._v(" "),t.loadState?e("p",{staticClass:"mx-auto"}):e("p",[t._v(t._s(t.$t("resourcedescription")))]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"d-flex flex-wrap position-relative"},[t.loadState2?e("div",{staticClass:"position-absolute w-100 d-flex flex-wrap"},t._l(t.HistoryList.length,(function(n){return e("div",{key:n,staticClass:"SkeletonResource rscp-card"},[e("div",{staticClass:"post-img"}),t._v(" "),t._m(1,!0)])})),0):t._e(),t._v(" "),t._l(t.HistoryList,(function(n,o){return e("ResourceItem",{key:o,staticClass:"niam",class:{show:!t.loadState2},attrs:{post:n}})}))],2),t._v(" "),t.posts.length>t.pageSize?e(o.a,{staticClass:"mt-4"},[e(r.a,{attrs:{length:t.pages,"total-visible":7,circle:"","prev-icon":"mdi-arrow-left","next-icon":"mdi-arrow-right"},on:{input:t.updatePage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"d-flex mt-4 justify-content-center mb-5"},[t("div",{staticClass:"bg-primary-lighten d-inline-flex rounded",staticStyle:{width:"4rem",height:"0.25rem"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-info text-left pt-2"},[e("div",{staticClass:"post-tag"}),t._v(" "),e("h3",{staticClass:"font-weight-bold"}),t._v(" "),e("p"),t._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-end"},[e("div"),t._v(" "),e("a")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ResourceItem:n(670).default})}}]);