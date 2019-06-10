!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.CountryCode=e()}(this,function(){function polyfill(){"undefined"==typeof Function.prototype.before&&(Function.prototype.before=function(t){var e=this;return function(){t.apply(e,arguments),e.apply(e,arguments)}})}function CountryCodeView(t){this.ALLOW_REWRITE=["wrapper","countryCode","showName","needSMS","onSelect","enabledAnchor"],this.wrapper=document.body,this.onSelect=null,this.datamodel=null,this.countryCode="",this.showName="",this.needSMS=0,this.enabledAnchor=!1,this._buildhtml="",this.isFirstCreate=!0,this.loadState="loading",this.disabledBodyScrollerClass="bbc_country_code-disabled-scroller",this.animationPageInClass="bbc_animation-down-in",this.animationPageOutClass="bbc_animation-down-out",this.animationDuration=300,this.componentID="_country_code_box",this.componentClassName="bbc_country_code",this.componentHeaderID="_country_code_header",this.componentContainerID="_country_code_container",this.init(t)}function init(t){return isCallNativeComponent?(normalizeCallNativeParameters(t),void traceLog.trace({pluginName:PLUGIN_NAME,pluginVersion:PLUGIN_VERSION,pageUrl:PAGE_URL,channel:"native",enabledAnchor:this.enabledAnchor})):(traceLog.trace({pluginName:PLUGIN_NAME,pluginVersion:PLUGIN_VERSION,pageUrl:PAGE_URL,channel:"h5",enabledAnchor:this.enabledAnchor}),instance||(instance=new CountryCodeView(t)))}function show(){if(isCallNativeComponent)callNativeComponent();else{if(!instance)return console.log("请调用 init 初始化组件");instance.show()}}function destroy(){instance&&instance.destroy(),instance=null}function formatNativeCallbackData(t){var e={};return e.originData=t,e.code=t.countryCode?t.countryCode:"",e.cn=t.showName?t.showName:"",e.en=t.nameEN?t.nameEN:"",e.py=t.namePY?t.namePY:"",e.country=t.countryName?t.countryName:"",e.open=t.openSMS?t.openSMS:"",e.heat=t.heat?t.heat:"",e.countryId=t.countryId?t.countryId:"",e.provinceId=t.provinceId?t.provinceId:"",e}function normalizeCallNativeParameters(t){var e=t.onSelect;hybrid_parameters=util.extendObj(t,{}),hybrid_parameters.onSelect=function(t){hybrid_parameters.countryCode=t.countryCode,hybrid_parameters.showName=t.showName,"function"==typeof e&&e(formatNativeCallbackData(t))}}function handleNativeCallback(){var t=arguments[0];t&&t.tagname&&"do_business_job"==t.tagname&&t.param&&t.param.sequenceId===sequenceId&&hybrid_parameters.onSelect(t.param)}function callNativeComponent(){var t=1,e="selectCountryPhoneCode";sequenceId=util.genSequenceId(),CtripBusiness.app_do_business_job(t,e,hybrid_parameters,sequenceId)}var PLUGIN_NAME="CountryCode",PLUGIN_VERSION="1.1.5",PAGE_URL=location.href,DOMAIN_CONFIG={dev:"gateway.m.uat.qa.nt.ctripcorp.com",fat:"gateway.m.fws.qa.nt.ctripcorp.com",uat:"gateway.m.uat.qa.nt.ctripcorp.com",prd:"sec-m.ctrip.com"},SOA_SERVICE_PATH="/restapi/soa2/12687/json/getCountryCode",PAGE_STYLE='body{-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bbc_country_code-disabled-scroller{height:100%;overflow-y:hidden}.bbc_country_code *{margin:0;padding:0}@keyframes downIn{0%{opacity:0;transform:translate3d(0,100%,0)}100%{opacity:1;transform:translate3d(0,0,0)}}@keyframes downOut{0%{opacity:1;transform:translate3d(0,0,0)}100%{opacity:0;transform:translate3d(0,100%,0)}}.bbc_animation-down-in,.bbc_animation-down-out{-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.bbc_animation-down-in{-webkit-animation-name:downIn;animation-name:downIn}.bbc_animation-down-out{-webkit-animation-name:downOut;animation-name:downOut}.bbc_country_code-load{margin-top:50px;font-size:16px;color:#666;text-align:center}.bbc_country_code-loading:before{content:"";display:block;width:100px;height:100px;margin:0 auto;background:url(https://pic.c-ctrip.com/platform/h5/common/network/loading.gif) 0 0 no-repeat}.bbc_country_code-loadfailed:before{content:"";display:block;width:80px;height:80px;margin:0 auto;background:url(https://pic.c-ctrip.com/platform/h5/common/network/loadfailed.png) 0 0 no-repeat}.bbc_country_code-loadfailed p{margin-top:10px}.bbc_country_code-btn{display:inline-block;padding:0 20px;margin-top:10px;height:34px;line-height:34px;font-size:14px;color:#fff;background:#009def;border-radius:5px}.bbc_country_code a{text-decoration:none}.bbc_country_code{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10001;background:#efefef;font:400 14px/1.5 Arial,Lucida Grande,Verdana,Microsoft YaHei}.bbc_country_code-header{position:fixed;left:0;right:0;top:0;height:44px;line-height:44px;text-align:center;background-color:#099fde;color:#fff;z-index:960}.bbc_country_code-header-icon{display:inline-block;width:44px;height:44px;line-height:44px;text-align:center;vertical-align:middle;cursor:pointer}.bbc_country_code-header-icon:active{background-color:#077cad}.bbc_country_code-icon-back:before{content:"";display:inline-block;width:10px;height:10px;vertical-align:middle;border-left:2px solid #fff;border-bottom:2px solid #fff;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-box-sizing:border-box;box-sizing:border-box}.bbc_country_code-header .bbc_country_code-icon-back{float:left}.bbc_country_code-title{line-height:44px;font-size:18px;position:absolute;left:88px;right:88px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;font-family:inherit;font-family:600 1.286em/2 Tahoma}.bbc_country_code-container{position:absolute;left:0;top:44px;right:0;bottom:0;overflow-x:hidden;overflow-y:scroll}.bbc_country_code-group{background-color:#fff}.bbc_country_code-group-hd{line-height:28px;background-color:#EFEFEF;position:relative;padding:0 15px;box-sizing:border-box;color:#666;font-size:14px}.bbc_country_code-group-list li{position:relative;border-bottom:1px solid #e5e5e5;line-height:33px;padding:5px 30px 5px 0;margin-left:15px;display:block;cursor:pointer;box-sizing:border-box;color:#333;font-size:16px;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent}.bbc_country_code-group-list li:first-child{border-top:none}.bbc_country_code-group-list li:last-child{border-bottom:none;background-image:none}.bbc_country_code-group-list li span{display:inline-block;width:180px}.bbc_country_code-group-list li em{font-style:normal;margin-right:10px;color:#999;font-weight:400}.bbc_country_code-group-list li.active:after{content:"";width:14px;height:6px;border-bottom:2px solid #099fde;border-left:2px solid #099fde;position:absolute;top:50%;right:30px;margin-top:-4px;-webkit-transform:rotate(-45deg) translateY(-50%);-ms-transform:rotate(-45deg) translateY(-50%);transform:rotate(-45deg) translateY(-50%)}.bbc_country_code-group-list li.active em,.bbc_country_code-group-list li.active span{color:#099fde}.bbc_country_code-index{position:fixed;width:24px;right:0;top:44px;bottom:0;background:#fff;text-align:center}.bbc_country_code-index-box{position:absolute;top:50%;left:0;width:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);line-height:1.1}.bbc_country_code-index span{display:block;color:#099FDE;font-size:11px;line-height:14px}@media (-webkit-min-device-pixel-ratio:2){.bbc_country_code-group-list li{border:none;background-size:100% 1px;background-repeat:no-repeat;padding-bottom:1px;background-position:left bottom;background-image:-webkit-linear-gradient(top,transparent 50%,#e5e5e5 50%);background-image:linear-gradient(to bottom,transparent 50%,#e5e5e5 50%)}}';polyfill();var util={isInCtripApp:!!navigator.userAgent.match(/ctripwireless/i),isSupportJSON:!!window.JSON,getEnv:function(){var t="prd",e=location.host;return e.match(/^(localhost|^127\.0\.0\.1|^10\.32\.25\.17)/i)?t="dev":e.match(/^m\.fat\d*\.qa\.nt\.ctripcorp\.com/i)||e.match(/^m\.ctrip\.fat\d*\.qa\.nt\.ctripcorp\.com/i)||e.match(/^webresource\.fws\.qa\.nt\.ctripcorp\.com/i)?t="fat":(e.match(/^m\.uat\.qa\.nt\.ctripcorp\.com/i)||e.match(/^m\.ctrip\.uat\.qa\.nt\.ctripcorp\.com/i)||e.match(/^webresource\.uat\.qa\.nt\.ctripcorp\.com/i))&&(t="uat"),t},strToJson:function(data){if("string"!=typeof data)return data;var ret;return ret=this.isSupportJSON?JSON.parse(data):eval("("+data+")")},params:function(t){if("object"==typeof t){var e,o=[];for(var n in t)o.push(n+"="+encodeURIComponent(t[n]));return e=o.join("&")}return t},setUrlParam:function(t,e){var o="",n=util.params(e);return o=t.indexOf("?")>-1?"&"===t.substr(t.length-1)?t+n:t+"&"+n:t+"?"+n},ajax:function(t){var e={type:"GET",url:"",async:!0,success:null,error:null};for(var o in t)e[o]=t[o];var n=new XMLHttpRequest,i=null,a=!1;e.timeout&&"number"==typeof e.timeout&&e.timeout>0&&(i=setTimeout(function(){a=!0,n.abort()},e.timeout)),"GET"===e.type&&"object"==typeof e.data&&(e.url=this.setUrlParam(e.url,e.data)),"string"!=typeof e.data&&(e.data=this.params(e.data)),n.open(e.type,e.url,e.async),"string"!=typeof e.data?(e.data=this.params(e.data),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded")):n.setRequestHeader("Content-Type","application/json"),n.onreadystatechange=function(){return a?void("function"==typeof e.error&&e.error("超时",!1)):void(4==this.readyState&&(clearTimeout(i),200==this.status?"function"==typeof e.success&&e.success(this.responseText,!0):"function"==typeof e.error&&e.error("",!1)))},n.send(e.data)},addClass:function(t,e){var o=t;t.length||(t=[t]);for(var n=e.split(" "),i=0,a=t.length;a>i;i++){for(var r=t[i].className?t[i].className.split(" "):[],c=0,s=n.length;s>c;c++)n[c]&&-1==r.indexOf(n[c])&&r.push(n[c]);t[i].className=r.join(" ")}return o},removeClass:function(t,e){var o=t;t.length||(t=[t]);for(var n=e?e.split(" "):!1,i=0,a=t.length;a>i;i++)if(n){for(var r,c=t[i].className?t[i].className.split(" "):[],s=n.length-1;s>=0;s--)r=c.indexOf(n[s]),-1!=r&&c.splice(r,1);t[i].className=c.join(" ")}else t[i].className="";return o},hasClass:function(t,e){return-1!=t.className.split(" ").indexOf(e)},getAbsPoint:function(t){for(var e=t.offsetLeft,o=t.offsetTop;t=t.offsetParent;)e+=t.offsetLeft,o+=t.offsetTop;return{x:e,y:o}},extendObj:function(t,e){try{for(var o in e)t[o]=e[o]}catch(n){}return t},genSequenceId:function(){return(new Date).getTime().toString(10)}},traceLog={init:function(){"undefined"==typeof window.__bfi&&(window.__bfi=[])},_getDefaultData:function(){return{UID:"${duid}",page_id:"${page_id}"}},_formatData:function(t){if("object"!=typeof t)return t;var e="",o="&",n=0;for(var i in t)0===n?e=i+"="+t[i]:e+=o+i+"="+t[i],n++;return e},trace:function(t,e){"function"!=typeof e&&(e=function(){});var o=util.extendObj(t,this._getDefaultData()),n=this._formatData(o);window.__bfi.push(["_tracklog","100670",n,e])}};traceLog.init(),CountryCodeView.prototype={constructor:CountryCodeView,init:function(t){t instanceof Object&&this.setOptions(t),this.render(),this.datamodel||"loading"!==this.loadState||this._request()},setOptions:function(t){for(var e in t)this.ALLOW_REWRITE.indexOf(e)>-1&&(this[e]=t[e])},_buildUrl:function(){var t=util.getEnv(),e="prd"===t?"https://":"https:"==document.location.protocol?"https://":"http://",o=DOMAIN_CONFIG[t];return e+o+SOA_SERVICE_PATH},_request:function(){return util.ajax({url:this._buildUrl(),success:this._responseSuccess.bind(this),error:this._responseError.bind(this)})},_responseSuccess:function(t){var t=util.strToJson(t);t.ResponseStatus&&t.ResponseStatus.Ack&&"Success"===t.ResponseStatus.Ack&&t.countryInfoList&&t.countryInfoList.length>0?(this.loadState="done",this.datamodel=this._parse(t.countryInfoList),this.render()):this._responseError()},_responseError:function(){this.loadState="loadFailed",this.render()},_parse:function(t){var e=this,o={},n={hot:t.slice(0,5)},i=t.sort(this._compare.bind(this));return i.forEach(function(t){if(1!==e.needSMS||1===t.open){var n=t.py.substr(0,1).toUpperCase();o[n]?o[n].push(t):o[n]=[t]}}),util.extendObj(n,o)},_compare:function(t,e){for(var o=this._getPyInitial(t.py),n=this._getPyInitial(e.py),i=o.length>n.length?o.length:n.length,a=0;i>a;a++){var r=o.charCodeAt(a)-n.charCodeAt(a);if(0!=r)return"_"==o.charAt(a)?-1:r}return a==i?o.length-n.length:void 0},_getPyInitial:function(t){return"string"!=typeof t?t:t.split(" ").map(function(t){return t[0]}).join("")},_createStyle:function(){var t="";return t+="<style>",t+=PAGE_STYLE,t+="</style>"},_createLoading:function(){var t='<div class="bbc_country_code-load bbc_country_code-loading">游游努力加载中</div>';return t},_createLoadFailed:function(){var t="";return t+='<div class="bbc_country_code-load bbc_country_code-loadfailed">',t+="<p>抱歉，出错了</p>",t+='<a href="javascript:;" class="bbc_country_code-btn">再试一次</a>',t+="</div>"},_createCountryList:function(){function t(t){return"hot"===t?"热门":t}var e=this,o="",n="";o+='<div class="bbc_country_code-group">';for(var i in this.datamodel)o+='<div class="bbc_country_code-group-hd bbc_country_code-alphabet-'+i+'">'+t(i)+"</div>",o+='<div class="bbc_country_code-group-bd">',o+='<ul class="bbc_country_code-group-list">',this.datamodel[i].forEach(function(t,n){o+=e._isDefaultHighLight(t)?'<li data-alphabet="'+i+'" data-index="'+n+'" data-country="'+t.country+'"  data-code="'+t.code+'" class="bbc_country_code-'+t.country+t.code+' active"><span>'+t.cn+"</span> <em>"+t.code+"</em></li>":'<li data-alphabet="'+i+'" data-index="'+n+'" data-country="'+t.country+'"  data-code="'+t.code+'" class="bbc_country_code-'+t.country+t.code+'"><span>'+t.cn+"</span> <em>"+t.code+"</em></li>"}),o+="</ul>",o+="</div>",n+='<span data-alphabet="'+i+'">'+t(i)+"</span>";return o+="</div>",o+='<div class="bbc_country_code-index">',o+='<div class="bbc_country_code-index-box">',o+=n,o+="</div>",o+="</div>"},_isDefaultHighLight:function(t){if(!this.countryCode&&!this.showName)return!1;if(this.countryCode){if(this.showName){if(t.code!=this.countryCode||t.cn!=this.showName)return!1}else if(t.code!=this.countryCode)return!1}else if(t.cn!=this.showName)return!1;return!0},_createHeader:function(){var t=['<div class="bbc_country_code-header" id="'+this.componentHeaderID+'">','<span class="bbc_country_code-header-icon bbc_country_code-icon-back"></span> ','<h1 class="bbc_country_code-title">选择国家或地区</h1>',"</div>"].join("");return t},createUI:function(){var t="";if("loading"===this.loadState?t+=this._createLoading():"loadFailed"===this.loadState?t+=this._createLoadFailed():"done"===this.loadState&&(t+=this._createCountryList()),this.isFirstCreate){this.isFirstCreate=!1;var e="";this._buildhtml=document.createElement("div"),this._buildhtml.id=this.componentID,this._buildhtml.className=this.componentClassName,e+=this._createStyle(),e+=this._createHeader(),e+='<section id="'+this.componentContainerID+'" class="bbc_country_code-container">',e+=t,e+="</section>",this._buildhtml.innerHTML=e}else document.getElementById(this.componentContainerID).innerHTML=t;var o=this._buildhtml.getElementsByClassName("active")[0];"done"===this.loadState&&o&&this.enabledAnchor&&(this._isInViewport(o)||this.scrollToScreenCenter(o))},syncUI:function(){this._buildhtml.style.display="none"},bindUI:function(){var t=this,e=this._buildhtml.getElementsByTagName("li"),o=(this._buildhtml.getElementsByClassName("bbc_country_code-group-hd"),"active");this._buildhtml.addEventListener("click",function(n){var i=n.target;if("LI"===i.tagName.toUpperCase()||"LI"===i.parentNode.tagName.toUpperCase()){n.stopPropagation();var a="LI"===i.tagName.toUpperCase()?i:i.parentNode,r=a.getAttribute("data-alphabet"),c=a.getAttribute("data-index"),s=a.getAttribute("data-country"),l=a.getAttribute("data-code"),d="bbc_country_code-",u=t._buildhtml.getElementsByClassName(d+s+l);util.removeClass(e,o),util.addClass(u,o),"function"==typeof t.onSelect&&t.onSelect(t.formatCallbackData(t.datamodel[r][c])),t.hide()}if("A"===i.tagName.toUpperCase()&&util.hasClass(i,"bbc_country_code-btn")&&(n.stopPropagation(),t.reload()),"SPAN"===i.tagName.toUpperCase()&&util.hasClass(i,"bbc_country_code-icon-back")&&(n.stopPropagation(),t.hide()),"SPAN"===i.tagName.toUpperCase()&&i.getAttribute("data-alphabet")){n.stopPropagation();var r=i.getAttribute("data-alphabet"),p=t._buildhtml.getElementsByClassName("bbc_country_code-alphabet-"+r)[0];t.scrollTo(p)}},!1);var n=!1;this._buildhtml.addEventListener("touchstart",function(t){var e=t.target;"SPAN"===e.tagName.toUpperCase()&&e.getAttribute("data-alphabet")&&(n=!0)},!1),this._buildhtml.addEventListener("touchmove",function(e){if(n){e.stopPropagation();var o=e.targetTouches[0]||e.originalEvent.targetTouches[0],i=document.elementFromPoint(o.pageX,o.pageY);if(i&&"SPAN"===i.tagName.toUpperCase()&&i.getAttribute("data-alphabet")){e.preventDefault();var a=i.getAttribute("data-alphabet"),r=t._buildhtml.getElementsByClassName("bbc_country_code-alphabet-"+a)[0];t.scrollTo(r)}}},!1),this._buildhtml.addEventListener("touchend",function(){n=!1},!1),this._buildhtml.addEventListener("touchcancel",function(){n=!1},!1)},formatCallbackData:function(t){return t},scrollTo:function(t){var e=util.getAbsPoint(t),o=44;document.getElementById(this.componentContainerID).scrollTop=e.y-o},scrollToTop:function(){document.getElementById(this.componentContainerID).scrollTop=0},scrollToScreenCenter:function(t){var e=window.screen.height,o=44,n=document.getElementById(this.componentContainerID),i=(n.scrollTop,util.getAbsPoint(t).y),a=t.offsetHeight;n.scrollTop=i-(e-o-a)/2},_isInViewport:function(t){var e=window.screen.height,o=44,n=document.getElementById(this.componentContainerID),i=n.scrollTop,a=util.getAbsPoint(t).y,r=t.offsetHeight,c=a-o-i>=0,s=e>=a+r-i;return c&&s},render:function(){this.isFirstCreate?(this.createUI(),this.syncUI(),this.bindUI(),this.wrapper.appendChild(this._buildhtml)):this.createUI()},reload:function(){this.loadState="loading",this._request(),this.render()},_disabledBodyScroller:function(){util.addClass(document.body,this.disabledBodyScrollerClass)},_enabledBodyScroller:function(){util.removeClass(document.body,this.disabledBodyScrollerClass)},show:function(){return this._buildhtml.style.display="block",this._disabledBodyScroller(),util.removeClass(this._buildhtml,this.animationPageOutClass),util.addClass(this._buildhtml,this.animationPageInClass),this},hide:function(){return this._enabledBodyScroller(),util.addClass(this._buildhtml,this.animationPageOutClass),util.removeClass(this._buildhtml,this.animationPageInClass),!this.enabledAnchor&&this.scrollToTop(),this},destroy:function(){this.wrapper.removeChild(this._buildhtml)}};var instance,isCallNativeComponent=util.isInCtripApp&&window.CtripBusiness,hybrid_parameters={},sequenceId;return isCallNativeComponent&&(window.app?window.app.callback||(window.app.callback=function(){}):(window.app={},window.app.callback=function(){}),window.app.callback=window.app.callback.before(handleNativeCallback)),{init:init,show:show,destroy:destroy}});
//# sourceMappingURL=country.h5.js.a2de6cd9.map