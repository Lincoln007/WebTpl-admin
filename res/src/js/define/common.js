function layerMsg(e,t){layer.msg(e,{icon:t,time:1e3})}function layer_show(e,t,n,a,r){null!=e&&""!=e||(e=!1),null!=a&&""!=a||(a=800),null!=r&&""!=r||(r=$(window).height()-300),layer.open({type:2,area:[a+"px",r+"px"],fix:!1,maxmin:!0,shade:!1,title:e,content:t})}function layer_close(){var e=parent.layer.getFrameIndex(window.name);parent.layer.close(e)}function addClass(e,t){var n=noRepeat(trim(e.className).split("s+"));return inArray(n,t)||n.push(t),e.className=n.join(" "),e}function removeClass(e,t){var n=noRepeat(trim(e.className).split("s+")),a=indexOf(n,t);return a!=-1&&(t.splice(a,1),e.className=t.join(" ")),e}function toggleClass(e,t){var n=noRepeat(trim(e.className).split("s+"));inArray(n,t)?removeClass(e,t):addClass(e,t)}function replaceTime(e){return new Date(1e3*parseInt(e)).toLocaleString().replace(/:\d{1,2}$/," ")}function sortBy(e){return function(t,n){var a,r;if("object"==typeof t&&"object"==typeof n&&t&&n)return a=t[e],r=n[e],a===r?0:typeof a==typeof r?a<r?-1:1:typeof a<typeof r?-1:1;throw"error"}}function timeDiff(e){var t=new Date(e),n=new Date-t,a=n/1e3/60/60/24;return Math.floor(a)}function getNowDate(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}function getWeek(){return(new Date).getDay()}function indexOf(e,t,n){if(2==arguments.length&&(n=0),e.indexOf)return e.indexOf(t,n);for(var a=0;a<e.length;a++)if(e[a]===t)return a;return-1}function noRepeat(e){for(var t=[],n=0;n<e.length;n++)indexOf(t,e[n])==-1&&t.push(e[n]);return t}function inArray(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}function trim(e){var t=e.replace(/^\s+|\s+$/g,"");return t}layui.config({base:"../../src/js/lib/"}).extend({datatable:"datatable"}),layui.use(["element","layer"],function(){var e=layui.jquery;layui.layer,layui.element();e(function(){e(".table-sort").on("click",".btn-checkall",function(){e(".btn-checkall").prop("checked",this.checked),e('[type="checkbox"][name="sublist"]').prop("checked",this.checked)}),e(".table-sort").on("click",'[type="checkbox"][name="sublist"]',function(){e(".btn-checkall").prop("checked",e('[type="checkbox"][name="sublist"]').length==e('[type="checkbox"][name="sublist"]:checked').length)}),e(".tips-icon,.tips-obj").hover(function(){e(this).find(".dialog-warp").show(),e(this).find(".dialog-warp").stop(),e(this).find(".dialog-warp").animate({opacity:1},300)},function(){e(this).find(".dialog-warp").stop(),e(this).find(".dialog-warp").animate({opacity:0},300),e(this).find(".dialog-warp").hide()}),e(".dialog-warp").each(function(){var t=e(this).height();e(this).css("margin-top",-t/2)});var t=e(".obj");t.each(function(){var t=e(this),n=t.data("value"),a=Math.ceil(n/99),r=0,i=setInterval(function(){r+=a,r>n?(t.html(n),clearInterval(i)):t.text(r)},10)})})});var lang={sProcessing:"处理中...",sLengthMenu:"每页 _MENU_ 项",sZeroRecords:"没有匹配结果",sInfo:"当前显示第 _START_ 至 _END_ 项，共 _TOTAL_ 项。",sInfoEmpty:"当前显示第 0 至 0 项，共 0 项",sInfoFiltered:"(由 _MAX_ 项结果过滤)",sInfoPostFix:"",sSearch:"本地搜索：",sUrl:"",sEmptyTable:"暂无数据",sLoadingRecords:"载入中...",sInfoThousands:",",oPaginate:{sFirst:"首页",sPrevious:"上一页",sNext:"下一页",sLast:"最后页",sJump:"跳转至"},oAria:{sSortAscending:": 以升序排列此列",sSortDescending:": 以降序排列此列"}};Array.prototype.max=function(){return Math.max.apply(null,this)},Array.prototype.min=function(){return Math.min.apply(null,this)},getWeek();