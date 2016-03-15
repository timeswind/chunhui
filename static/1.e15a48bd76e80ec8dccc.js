webpackJsonp([1],[,,,function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["grid","header","text","button","link"]}},function(n,t,e){t=n.exports=e(1)(),t.push([n.id,".card{background:#fff;box-shadow:0 1px 3px #aaa;margin:16px}.card .context-wrapper{padding:16px}.card .button-wrapper{text-align:right;padding-right:16px;padding-bottom:16px}.card .button-wrapper a{cursor:pointer;color:#1c5f30;padding:8px 16px;border-radius:5px;-webkit-transition:.2s;transition:.2s}.card .button-wrapper a:hover{background-color:#e0e0e0}.card p{margin:0;font-size:15px}.card h1{padding-left:12px;border-left:4px solid #1c5f30;font-size:24px;margin-bottom:0;display:inline-block}@media screen and (min-width:800px){.grid-2{width:50%;float:left}.grid-3{width:33.333333%;float:left}.grid-4{width:25%;float:left}}","",{version:3,sources:["/./src/components/reuseable/Card.vue"],names:[],mappings:"AAEA,MACE,gBAAiB,AACjB,0BAA6B,AAC7B,WAAa,CACd,AAED,uBACE,YAAc,CACf,AAED,sBACE,iBAAkB,AAClB,mBAAoB,AACpB,mBAAqB,CACtB,AAED,wBACE,eAAgB,AAChB,cAAe,AACf,iBAAkB,AAClB,kBAAmB,AACnB,uBAAyB,AACzB,cAAiB,CAClB,AAED,8BACE,wBAA0B,CAC3B,AAED,QACE,SAAS,AACT,cAAgB,CACjB,AAED,SACE,kBAAmB,AACnB,8BAA+B,AAC/B,eAAgB,AAChB,gBAAiB,AACjB,oBAAsB,CACvB,AAED,oCACE,QACE,UAAW,AACX,UAAY,CACb,AAED,QACE,iBAAkB,AAClB,UAAY,CACb,AAED,QACE,UAAW,AACX,UAAY,CACb,CACF",file:"Card.vue",sourcesContent:["\n\n.card {\n  background: #fff;\n  box-shadow: 0px 1px 3px #aaa;\n  margin: 16px;\n}\n\n.card .context-wrapper{\n  padding: 16px;\n}\n\n.card .button-wrapper {\n  text-align: right;\n  padding-right: 16px;\n  padding-bottom: 16px;\n}\n\n.card .button-wrapper a {\n  cursor: pointer;\n  color: #1C5F30;\n  padding: 8px 16px;\n  border-radius: 5px;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n\n.card .button-wrapper a:hover {\n  background-color: #E0E0E0;\n}\n\n.card p {\n  margin:0;\n  font-size: 15px;\n}\n\n.card h1 {\n  padding-left: 12px;\n  border-left: 4px solid #1C5F30;\n  font-size: 24px;\n  margin-bottom: 0;\n  display: inline-block;\n}\n\n@media screen and (min-width: 800px) {\n  .grid-2{\n    width: 50%;\n    float: left;\n  }\n\n  .grid-3{\n    width: 33.333333%;\n    float: left;\n  }\n\n  .grid-4{\n    width: 25%;\n    float: left;\n  }\n}\n"],sourceRoot:"webpack://"}])},function(n,t,e){var o=e(4);"string"==typeof o&&(o=[[n.id,o,""]]);e(2)(o,{});o.locals&&(n.exports=o.locals)},function(n,t){n.exports="<div v-bind:class=grid> <div class=card> <h1>{{header}}</h1> <div class=context-wrapper> <p>{{text}}</p> </div> <div class=button-wrapper v-if=button> <a v-bind:href=link>{{button}}</a> </div> </div> </div>"},function(n,t,e){var o,r;e(5),o=e(3),r=e(6),n.exports=o||{},n.exports.__esModule&&(n.exports=n.exports["default"]),r&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=r)},,,,,,,,function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return"chi"===window.localStorage.language?{}:{}}}},,,function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var r=e(7),i=o(r),a=e(46),d=o(a);t["default"]={data:function(){return"chi"===window.localStorage.language?{groupIntroduction:{header:"集团介绍",text:"浙江春晖集团有限公司浙江省批企业集团，国家大型企业，全国500家最大规模机械工业企业之一，国家高新技术企业，是浙江省纳税大户、上虞市最具影响力的大企业大集团......",button:{text:"进一步了解",link:"/#!/about"}},news:{header:"新闻",button:{text:"所有新闻",link:"/"}},chunhuiInstitute:{header:"春晖书院",button:{text:"更多",link:"/"}}}:{groupIntroduction:{header:"Introduction",text:'Zhejiang Chunhui Group co. is a national large enterprise, one of the top 500 machining enterprises, and a high-tech enterprise of the provincial "five as one batch". Now it owns six holding companies and three shares companies (one of their will be listed )...',button:{text:"Explore more",link:"/#!/about"}},news:{header:"News",button:{text:"More",link:"/"}},chunhuiInstitute:{header:"Chunhui Institute",button:{text:"More",link:"/"}}}},components:{Banner:d["default"],Card:i["default"]}}},,,,function(n,t,e){t=n.exports=e(1)(),t.push([n.id,"#banner .wallpaper{background:url("+e(34)+");background-size:cover;background-repeat:no-repeat;background-position:50%;height:500px}","",{version:3,sources:["/./src/components/Banner.vue"],names:[],mappings:"AACA,mBACE,yCAAsC,AACtC,sBAA2B,AAC3B,4BAA+B,AAC/B,wBAAmC,AACnC,YAAc,CACf",file:"Banner.vue",sourcesContent:["\n#banner .wallpaper{\n  background: url(../assets/landsc.jpg);\n  background-size:     cover;                      /* <------ */\n  background-repeat:   no-repeat;\n  background-position: center center;\n  height: 500px;\n}\n"],sourceRoot:"webpack://"}])},function(n,t,e){t=n.exports=e(1)(),t.push([n.id,"#home .wrapper{max-width:1000px;margin:40px auto;padding:0 16px}.cards-wrapper{margin-bottom:20px;display:inline-block;width:100%}","",{version:3,sources:["/./src/components/Home.vue"],names:[],mappings:"AACA,eACE,iBAAiB,AACjB,iBAAiB,AACjB,cAAgB,CACjB,AAED,eACE,mBAAoB,AACpB,qBAAsB,AACtB,UAAW,CAEZ",file:"Home.vue",sourcesContent:["\n#home .wrapper {\n  max-width:1000px;\n  margin:40px auto;\n  padding: 0 16px;\n}\n\n.cards-wrapper {\n  margin-bottom: 20px;\n  display: inline-block;\n  width: 100%\n\n}\n"],sourceRoot:"webpack://"}])},,,,,function(n,t,e){var o=e(22);"string"==typeof o&&(o=[[n.id,o,""]]);e(2)(o,{});o.locals&&(n.exports=o.locals)},,,function(n,t,e){var o=e(23);"string"==typeof o&&(o=[[n.id,o,""]]);e(2)(o,{});o.locals&&(n.exports=o.locals)},,,function(n,t,e){n.exports=e.p+"landsc.jpg?b422ba0"},,,,function(n,t){n.exports="<div id=banner> <div class=wallpaper> </div> </div>"},,,function(n,t){n.exports="<div id=home> <banner></banner> <div class=wrapper> <div class=cards-wrapper> <card v-bind:header=groupIntroduction.header v-bind:text=groupIntroduction.text grid=grid-2 v-bind:button=groupIntroduction.button.text v-bind:link=groupIntroduction.button.link> </card> </div> <div class=cards-wrapper> <card v-bind:header=news.header grid=grid-2 v-bind:button=news.button.text v-bind:link=news.button.link> </card> <card v-bind:header=chunhuiInstitute.header grid=grid-2 v-bind:button=chunhuiInstitute.button.text v-bind:link=chunhuiInstitute.button.link> </card> </div> </div> </div>"},,,,,function(n,t,e){var o,r;e(28),o=e(15),r=e(38),n.exports=o||{},n.exports.__esModule&&(n.exports=n.exports["default"]),r&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=r)},,,function(n,t,e){var o,r;e(31),o=e(18),r=e(41),n.exports=o||{},n.exports.__esModule&&(n.exports=n.exports["default"]),r&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=r)}]);
//# sourceMappingURL=1.e15a48bd76e80ec8dccc.js.map