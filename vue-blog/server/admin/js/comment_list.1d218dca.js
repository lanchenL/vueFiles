(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comment_list"],{5013:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("m-top-handle",{attrs:{title:"昵称",content:"评论"}}),n("el-table",{attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),n("el-table-column",{attrs:{prop:"_id",label:"id"}}),n("el-table-column",{attrs:{prop:"avatarImg",label:"头像"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{attrs:{src:t.row.avatarImg,alt:"",height:"50"}})]}}])}),n("el-table-column",{attrs:{prop:"nickName",label:"昵称"}}),n("el-table-column",{attrs:{prop:"byAiteName",label:"艾特谁"}}),n("el-table-column",{attrs:{prop:"content",label:"留言"}}),n("el-table-column",{attrs:{label:"操作",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"}},[t._v("回复")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.deleteHandle(e.row)}}},[t._v("删除")])]}}])})],1)],1)},r=[],l=(n("96cf"),n("1da1")),s={data:function(){return{tableData:[],title:""}},created:function(){this.getList()},methods:{getList:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/rest/comments");case 2:n=e.sent,t.tableData=n.data;case 4:case"end":return e.stop()}}),e)})))()},deleteHandle:function(t){var e=this;this.$confirm("是否确定要删除留言: ".concat(t.content," ?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.delete("/rest/comments/".concat(t._id));case 2:e.getList(),e.$message({type:"success",message:"删除成功!"});case 4:case"end":return n.stop()}}),n)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}},c=s,o=n("2877"),i=Object(o["a"])(c,a,r,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=comment_list.1d218dca.js.map