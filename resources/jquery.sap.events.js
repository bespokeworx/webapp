/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/Device','jquery.sap.keycodes'],function(q,D){"use strict";var o,a,b,c,d,m,I=false;if(D.browser.webkit&&/Mobile/.test(navigator.userAgent)&&D.support.touch){I=true;(function(){var e=window.document,H=false,T=null,j=false,S,z,i=0;m=["mousedown","mouseover","mouseup","mouseout","click"];var A=function(C,E){if(!H){return;}var M=E.type=="touchend"?E.changedTouches[0]:E.touches[0];var F=e.createEvent('MouseEvent');F.initMouseEvent(C,true,true,window,E.detail,M.screenX,M.screenY,M.clientX,M.clientY,E.ctrlKey,E.shiftKey,E.altKey,E.metaKey,E.button,E.relatedTarget);F.isSynthetic=true;window.setTimeout(function(){T.dispatchEvent(F);},0);};var B=function(E){return E.target.tagName.match(/input|textarea|select/i);};d=function(E){if(!E.isSynthetic&&!B(E)){E.stopPropagation();E.preventDefault();}};o=function(E){var C=E.touches,F;H=(C.length==1&&!B(E));j=false;if(H){F=C[0];T=F.target;if(T.nodeType===3){T=T.parentNode;}S=F.clientX;z=F.clientY;A("mousedown",E);}};a=function(E){var C;if(H){C=E.touches[0];if(Math.abs(C.clientX-S)>10||Math.abs(C.clientY-z)>10){j=true;}if(j){A("mousemove",E);}}};b=function(E){A("mouseup",E);if(!j){A("click",E);}};c=function(E){A("mouseup",E);};for(;i<m.length;i++){e.addEventListener(m[i],d,true);}e.addEventListener('touchstart',o,true);e.addEventListener('touchmove',a,true);e.addEventListener('touchend',b,true);e.addEventListener('touchcancel',c,true);q.sap.disableTouchToMouseHandling=function(){var i=0;if(!I){return;}e.removeEventListener('touchstart',o,true);e.removeEventListener('touchmove',a,true);e.removeEventListener('touchend',b,true);e.removeEventListener('touchcancel',c,true);for(;i<m.length;i++){e.removeEventListener(m[i],d,true);}};}());}if(!q.sap.disableTouchToMouseHandling){q.sap.disableTouchToMouseHandling=function(){};}q.sap.ControlEvents=["click","dblclick","contextmenu","focusin","focusout","keydown","keypress","keyup","mousedown","mouseout","mouseover","mouseup","select","selectstart","dragstart","dragenter","dragover","dragleave","dragend","drop","paste","cut","input"];if(D.support.touch){q.sap.ControlEvents.push("touchstart","touchend","touchmove","touchcancel");}q.sap.PseudoEvents={sapdown:{sName:"sapdown",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_DOWN&&!k(e);}},sapdownmodifiers:{sName:"sapdownmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_DOWN&&k(e);}},sapshow:{sName:"sapshow",aTypes:["keydown"],fnCheck:function(e){return(e.keyCode==q.sap.KeyCodes.F4&&!k(e))||(e.keyCode==q.sap.KeyCodes.ARROW_DOWN&&h(e,false,true,false));}},sapup:{sName:"sapup",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_UP&&!k(e);}},sapupmodifiers:{sName:"sapupmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_UP&&k(e);}},saphide:{sName:"saphide",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_UP&&h(e,false,true,false);}},sapleft:{sName:"sapleft",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_LEFT&&!k(e);}},sapleftmodifiers:{sName:"sapleftmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_LEFT&&k(e);}},sapright:{sName:"sapright",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_RIGHT&&!k(e);}},saprightmodifiers:{sName:"saprightmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_RIGHT&&k(e);}},saphome:{sName:"saphome",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.HOME&&!k(e);}},saphomemodifiers:{sName:"saphomemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.HOME&&k(e);}},saptop:{sName:"saptop",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.HOME&&h(e,true,false,false);}},sapend:{sName:"sapend",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.END&&!k(e);}},sapendmodifiers:{sName:"sapendmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.END&&k(e);}},sapbottom:{sName:"sapbottom",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.END&&h(e,true,false,false);}},sappageup:{sName:"sappageup",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.PAGE_UP&&!k(e);}},sappageupmodifiers:{sName:"sappageupmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.PAGE_UP&&k(e);}},sappagedown:{sName:"sappagedown",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.PAGE_DOWN&&!k(e);}},sappagedownmodifiers:{sName:"sappagedownmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.PAGE_DOWN&&k(e);}},sapselect:{sName:"sapselect",aTypes:["keydown"],fnCheck:function(e){return(e.keyCode==q.sap.KeyCodes.ENTER||e.keyCode==q.sap.KeyCodes.SPACE)&&!k(e);}},sapselectmodifiers:{sName:"sapselectmodifiers",aTypes:["keydown"],fnCheck:function(e){return(e.keyCode==q.sap.KeyCodes.ENTER||e.keyCode==q.sap.KeyCodes.SPACE)&&k(e);}},sapspace:{sName:"sapspace",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.SPACE&&!k(e);}},sapspacemodifiers:{sName:"sapspacemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.SPACE&&k(e);}},sapenter:{sName:"sapenter",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ENTER&&!k(e);}},sapentermodifiers:{sName:"sapentermodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ENTER&&k(e);}},sapbackspace:{sName:"sapbackspace",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.BACKSPACE&&!k(e);}},sapbackspacemodifiers:{sName:"sapbackspacemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.BACKSPACE&&k(e);}},sapdelete:{sName:"sapdelete",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.DELETE&&!k(e);}},sapdeletemodifiers:{sName:"sapdeletemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.DELETE&&k(e);}},sapexpand:{sName:"sapexpand",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.NUMPAD_PLUS&&!k(e);}},sapexpandmodifiers:{sName:"sapexpandmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.NUMPAD_PLUS&&k(e);}},sapcollapse:{sName:"sapcollapse",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.NUMPAD_MINUS&&!k(e);}},sapcollapsemodifiers:{sName:"sapcollapsemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.NUMPAD_MINUS&&k(e);}},sapcollapseall:{sName:"sapcollapseall",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.NUMPAD_ASTERISK&&!k(e);}},sapescape:{sName:"sapescape",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ESCAPE&&!k(e);}},saptabnext:{sName:"saptabnext",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.TAB&&!k(e);}},saptabprevious:{sName:"saptabprevious",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.TAB&&h(e,false,false,true);}},sapskipforward:{sName:"sapskipforward",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.F6&&!k(e);}},sapskipback:{sName:"sapskipback",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.F6&&h(e,false,false,true);}},sapdecrease:{sName:"sapdecrease",aTypes:["keydown"],fnCheck:function(e){var R=sap.ui.getCore().getConfiguration().getRTL();var i=R?q.sap.KeyCodes.ARROW_RIGHT:q.sap.KeyCodes.ARROW_LEFT;return(e.keyCode==i||e.keyCode==q.sap.KeyCodes.ARROW_DOWN)&&!k(e);}},sapminus:{sName:"sapminus",aTypes:["keypress"],fnCheck:function(e){var C=String.fromCharCode(e.which);return C=='-';}},sapdecreasemodifiers:{sName:"sapdecreasemodifiers",aTypes:["keydown"],fnCheck:function(e){var R=sap.ui.getCore().getConfiguration().getRTL();var i=R?q.sap.KeyCodes.ARROW_RIGHT:q.sap.KeyCodes.ARROW_LEFT;return(e.keyCode==i||e.keyCode==q.sap.KeyCodes.ARROW_DOWN)&&k(e);}},sapincrease:{sName:"sapincrease",aTypes:["keydown"],fnCheck:function(e){var R=sap.ui.getCore().getConfiguration().getRTL();var N=R?q.sap.KeyCodes.ARROW_LEFT:q.sap.KeyCodes.ARROW_RIGHT;return(e.keyCode==N||e.keyCode==q.sap.KeyCodes.ARROW_UP)&&!k(e);}},sapplus:{sName:"sapplus",aTypes:["keypress"],fnCheck:function(e){var C=String.fromCharCode(e.which);return C=='+';}},sapincreasemodifiers:{sName:"sapincreasemodifiers",aTypes:["keydown"],fnCheck:function(e){var R=sap.ui.getCore().getConfiguration().getRTL();var N=R?q.sap.KeyCodes.ARROW_LEFT:q.sap.KeyCodes.ARROW_RIGHT;return(e.keyCode==N||e.keyCode==q.sap.KeyCodes.ARROW_UP)&&k(e);}},sapprevious:{sName:"sapprevious",aTypes:["keydown"],fnCheck:function(e){var R=sap.ui.getCore().getConfiguration().getRTL();var i=R?q.sap.KeyCodes.ARROW_RIGHT:q.sap.KeyCodes.ARROW_LEFT;return(e.keyCode==i||e.keyCode==q.sap.KeyCodes.ARROW_UP)&&!k(e);}},sappreviousmodifiers:{sName:"sappreviousmodifiers",aTypes:["keydown"],fnCheck:function(e){var R=sap.ui.getCore().getConfiguration().getRTL();var i=R?q.sap.KeyCodes.ARROW_RIGHT:q.sap.KeyCodes.ARROW_LEFT;return(e.keyCode==i||e.keyCode==q.sap.KeyCodes.ARROW_UP)&&k(e);}},sapnext:{sName:"sapnext",aTypes:["keydown"],fnCheck:function(e){var R=sap.ui.getCore().getConfiguration().getRTL();var N=R?q.sap.KeyCodes.ARROW_LEFT:q.sap.KeyCodes.ARROW_RIGHT;return(e.keyCode==N||e.keyCode==q.sap.KeyCodes.ARROW_DOWN)&&!k(e);}},sapnextmodifiers:{sName:"sapnextmodifiers",aTypes:["keydown"],fnCheck:function(e){var R=sap.ui.getCore().getConfiguration().getRTL();var N=R?q.sap.KeyCodes.ARROW_LEFT:q.sap.KeyCodes.ARROW_RIGHT;return(e.keyCode==N||e.keyCode==q.sap.KeyCodes.ARROW_DOWN)&&k(e);}},sapdelayeddoubleclick:{sName:"sapdelayeddoubleclick",aTypes:["click"],fnCheck:function(e){var i=q(e.target);var j=e.timeStamp;var z=i.data("sapdelayeddoubleclick_lastClickTimestamp");var A=z||0;i.data("sapdelayeddoubleclick_lastClickTimestamp",j);var B=j-A;return(B>=300&&B<=1300);}}};var P=["sapdown","sapdownmodifiers","sapshow","sapup","sapupmodifiers","saphide","sapleft","sapleftmodifiers","sapright","saprightmodifiers","saphome","saphomemodifiers","saptop","sapend","sapendmodifiers","sapbottom","sappageup","sappageupmodifiers","sappagedown","sappagedownmodifiers","sapselect","sapselectmodifiers","sapspace","sapspacemodifiers","sapenter","sapentermodifiers","sapexpand","sapbackspace","sapbackspacemodifiers","sapdelete","sapdeletemodifiers","sapexpandmodifiers","sapcollapse","sapcollapsemodifiers","sapcollapseall","sapescape","saptabnext","saptabprevious","sapskipforward","sapskipback","sapprevious","sappreviousmodifiers","sapnext","sapnextmodifiers","sapdecrease","sapminus","sapdecreasemodifiers","sapincrease","sapplus","sapincreasemodifiers","sapdelayeddoubleclick"];(function initTouchEventSupport(){q.sap.touchEventMode="SIM";var A=[];var e=[];if(D.support.touch){q.sap.touchEventMode="ON";q.event.props.push("touches","targetTouches","changedTouches");}var j=function(J,K,N){var Q="__"+J+"Handler";var R="sap"+J;A.push(R);e.push({sName:J,aTypes:[R],fnCheck:function(U){return true;}});q.event.special[R]={add:function(U){var V=this,$=q(this),W={domRef:V,eventName:J,sapEventName:R,eventHandle:U};var X=function(Y){N(Y,W);};U.__sapSimulatedEventHandler=X;for(var i=0;i<K.length;i++){$.on(K[i],X);}},remove:function(U){var $=q(this);var N=U.__sapSimulatedEventHandler;$.removeData(Q+U.guid);for(var i=0;i<K.length;i++){q.event.remove(this,K[i],N);}}};};var M=function(J,K){var $=q(K.domRef);if(J.isMarked("delayedMouseEvent")){return;}if(!(J.type!="mouseout"||(J.type==="mouseout"&&q.sap.checkMouseEnterOrLeave(J,K.domRef)))){var N=true;var Q=$.data("__touchstart_control");if(Q){var R=q.sap.domById(Q);if(R&&q.sap.checkMouseEnterOrLeave(J,R)){N=false;}}if(N){return;}}var U=q.event.fix(J.originalEvent||J);U.type=K.sapEventName;if(U.isMarked("firstUIArea")){U.setMark("handledByUIArea",false);}var V=[{identifier:1,pageX:U.pageX,pageY:U.pageY,clientX:U.clientX,clientY:U.clientY,screenX:U.screenX,screenY:U.screenY,target:U.target,radiusX:1,radiusY:1,rotationAngle:0}];switch(K.eventName){case"touchstart":case"touchmove":U.touches=U.changedTouches=U.targetTouches=V;break;case"touchend":U.changedTouches=V;U.touches=U.targetTouches=[];break;}if(K.eventName==="touchstart"||$.data("__touch_in_progress")){$.data("__touch_in_progress","X");var W=q.fn.control?q(J.target).control(0):null;if(W){$.data("__touchstart_control",W.getId());}if(J.type==="mouseout"){U.setMarked("fromMouseout");}K.eventHandle.handler.call(K.domRef,U);if(K.eventName==="touchend"&&!U.isMarked("fromMouseout")){$.removeData("__touch_in_progress");$.removeData("__touchstart_control");}}};if(!(D.support.pointer&&D.support.touch)){j("touchstart",["mousedown"],M);j("touchend",["mouseup","mouseout"],M);j("touchmove",["mousemove"],M);}function z(){var J=window["sap-ui-config"]||{},K=J.libs||"";function N(Q){return document.location.search.indexOf("sap-ui-"+Q)>-1||!!J[Q.toLowerCase()];}return D.support.touch||N("xx-test-mobile")||N("xx-fakeOS")||K.match(/sap.m\b/);}if(z()){q.sap.require("sap.ui.thirdparty.jquery-mobile-custom");if(D.support.touch&&!D.support.pointer){var F=false,B=q.vmouse.moveDistanceThreshold,S,C,O,E,L;var G=function(J,K,N){var Q=q.event.fix(J.originalEvent||J);Q.type=K.sapEventName;delete Q.touches;delete Q.changedTouches;delete Q.targetTouches;Q.screenX=N.screenX;Q.screenY=N.screenY;Q.clientX=N.clientX;Q.clientY=N.clientY;Q.ctrlKey=N.ctrlKey;Q.altKey=N.altKey;Q.shiftKey=N.shiftKey;Q.button=(D.browser.msie&&D.browser.version<=8?1:0);return Q;};var T=function(J,K){if(J.isMarked("handledByTouchToMouse")){return;}J.setMarked("handledByTouchToMouse");if(!F){var N=J.originalEvent.touches[0];F=(Math.abs(N.pageX-S)>B||Math.abs(N.pageY-C)>B);}if(D.os.blackberry){if(L&&J.timeStamp-L<50){return;}L=J.timeStamp;}var Q=G(J,K,J.touches[0]);function R(){Q.setMark("handledByUIArea",false);K.eventHandle.handler.call(K.domRef,Q);}if(D.os.blackberry){q.sap.delayedCall(0,this,R);}else{R();}};var H=function(J,K){if(J.isMarked("handledByTouchToMouse")){return;}J.setMarked("handledByTouchToMouse");var N,Q,R;function U(){N.setMark("handledByUIArea",false);K.eventHandle.handler.call(K.domRef,N);}function V(){Q.setMark("handledByUIArea",false);K.eventHandle.handler.call(K.domRef,Q);if(R){Q.type="click";Q.getPseudoTypes=q.Event.prototype.getPseudoTypes;Q.setMark("handledByUIArea",false);Q.offsetX=O;Q.offsetY=E;K.eventHandle.handler.call(K.domRef,Q);}}function W(){return G(J,K,K.eventName==="mouseup"?J.changedTouches[0]:J.touches[0]);}if(J.type==="touchstart"){var X=J.originalEvent.touches[0];F=false;L=0;S=X.pageX;C=X.pageY;O=Math.round(X.pageX-q(J.target).offset().left);E=Math.round(X.pageY-q(J.target).offset().top);N=W();if(D.os.blackberry){q.sap.delayedCall(0,this,U);}else{U();}}else if(J.type==="touchend"){Q=W();R=!F;if(D.os.blackberry){q.sap.delayedCall(0,this,V);}else{V();}}};q.sap.disableTouchToMouseHandling();j("mousedown",["touchstart"],H);j("mousemove",["touchmove"],T);j("mouseup",["touchend","touchcancel"],H);}A.push("swipe","tap","swipeleft","swiperight","scrollstart","scrollstop");e.push({sName:"swipebegin",aTypes:["swipeleft","swiperight"],fnCheck:function(J){var R=sap.ui.getCore().getConfiguration().getRTL();return(R&&J.type==="swiperight")||(!R&&J.type==="swipeleft");}});e.push({sName:"swipeend",aTypes:["swipeleft","swiperight"],fnCheck:function(J){var R=sap.ui.getCore().getConfiguration().getRTL();return(!R&&J.type==="swiperight")||(R&&J.type==="swipeleft");}});}if(q.sap.Version(q.fn.jquery).compareTo("1.9.1")<0){q.sap.ControlEvents=q.sap.ControlEvents.concat(A);}else{q.sap.ControlEvents=A.concat(q.sap.ControlEvents);}for(var i=0;i<e.length;i++){q.sap.PseudoEvents[e[i].sName]=e[i];P.push(e[i].sName);}}());function f(){var e=q.sap.PseudoEvents,R=[];for(var N in e){if(e[N].aTypes){for(var j=0,i=e[N].aTypes.length;j<i;j++){var T=e[N].aTypes[j];if(q.inArray(T,R)==-1){R.push(T);}}}}return R;}var g=f();function h(e,C,A,S){return e.shiftKey==S&&e.altKey==A&&l(e)==C;}function k(e){return e.shiftKey||e.altKey||l(e);}function l(e){return!!(e.metaKey||e.ctrlKey);}q.Event.prototype.getPseudoTypes=function(){var e=[];if(q.inArray(this.type,g)!=-1){var j=P;var z=j.length;var A=null;for(var i=0;i<z;i++){A=q.sap.PseudoEvents[j[i]];if(A.aTypes&&q.inArray(this.type,A.aTypes)>-1&&A.fnCheck&&A.fnCheck(this)){e.push(A.sName);}}}this.getPseudoTypes=function(){return e.slice();};return e.slice();};q.Event.prototype.isPseudoType=function(T){var e=this.getPseudoTypes();if(T){return q.inArray(T,e)>-1;}else{return e.length>0;}};q.sap.bindAnyEvent=function bindAnyEvent(C){if(C){q(document).bind(q.sap.ControlEvents.join(" "),C);}};q.sap.unbindAnyEvent=function unbindAnyEvent(C){if(C){q(document).unbind(q.sap.ControlEvents.join(" "),C);}};q.sap.checkMouseEnterOrLeave=function checkMouseEnterOrLeave(E,i){if(E.type!="mouseover"&&E.type!="mouseout"){return false;}var j=false;var z=i;var A=E.relatedTarget;try{while(A&&A!==z){A=A.parentNode;}if(A!==z){j=true;}}catch(e){}return j;};q.sap.isSpecialKey=function(e){var K=q.sap.KeyCodes,i=e.which,S=n(e)||p(e)||(i>=33&&i<=36)||(i>=44&&i<=46)||(i>=112&&i<=123)||(i===K.BREAK)||(i===K.BACKSPACE)||(i===K.TAB)||(i===K.ENTER)||(i===K.ESCAPE)||(i===K.SCROLL_LOCK);switch(e.type){case"keydown":case"keyup":return S;case"keypress":return(i===0||i===K.BACKSPACE||i===K.ESCAPE||i===K.ENTER)||false;default:return false;}};function n(e){var K=q.sap.KeyCodes,i=e.which;return(i===K.SHIFT)||(i===K.CONTROL)||(i===K.ALT)||(i===K.CAPS_LOCK)||(i===K.NUM_LOCK);}function p(e){var K=e.which,A=(K>=37&&K<=40);switch(e.type){case"keydown":case"keyup":return A;case"keypress":return K===0;default:return false;}}q.Event.prototype.getOffsetX=function(){if(this.type=='click'){if(this.offsetX){return this.offsetX;}if(this.layerX){return this.layerX;}if(this.originalEvent.layerX){return this.originalEvent.layerX;}}return 0;};q.Event.prototype.getOffsetY=function(){if(this.type=='click'){if(this.offsetY){return this.offsetY;}if(this.layerY){return this.layerY;}if(this.originalEvent.layerY){return this.originalEvent.layerY;}}return 0;};var s=q.Event.prototype.stopImmediatePropagation;q.Event.prototype.stopImmediatePropagation=function(S){s.apply(this,arguments);if(S){this._bIsStopHandlers=true;}};q.Event.prototype.isImmediateHandlerPropagationStopped=function(){return!!this._bIsStopHandlers;};q.Event.prototype.setMark=function(K,V){K=K||"handledByControl";V=arguments.length<2?true:V;(this.originalEvent||this)["_sapui_"+K]=V;};q.Event.prototype.setMarked=q.Event.prototype.setMark;q.Event.prototype.isMarked=function(K){K=K||"handledByControl";return!!(this.originalEvent||this)["_sapui_"+K];};q.sap._FASTNAVIGATIONKEY="sap-ui-fastnavgroup";function r(R){var G=q(R).closest('[data-sap-ui-customfastnavgroup="true"]');return G[0];}function t(R){var G=r(R);if(G){return G;}var $=q(R).closest('[data-'+q.sap._FASTNAVIGATIONKEY+'="true"]');return $[0];}function u(R,S,N){var $=q(R),A,T;if(N){A=q.merge($.find("*"),q.merge($.nextAll(),$.parents().nextAll()));T=A.find(':sapTabbable').addBack(':sapTabbable');}else{A=q.merge($.prevAll(),$.parents().prevAll());T=q.merge($.parents(':sapTabbable'),A.find(':sapTabbable').addBack(':sapTabbable'));}var T=q.unique(T);return T.filter(function(){return w(S,this);});}function v(R,S){var e=q.sap.domById("sap-ui-static");if(!e){return R;}var j=[];for(var i=0;i<S.length;i++){if(q.contains(e,S[i])){j.push(S[i]);}}return R.filter(function(){if(j.length&&w(j,this)){return true;}return!q.contains(e,this);});}function w(C,R){for(var i=0;i<C.length;i++){if(C[i]===R||q.contains(C[i],R)){return true;}}return false;}function x(F,T,S,e){var G,$;for(var i=T.length-1;i>=0;i--){G=t(T[i]);if(G!=S){if(e){S=G;e=false;}else{$=q(T[i+1]);break;}}}if(!$&&!e){$=F;}return $;}function y(S,e,F){if(!e||e.length==0){e=[document];}if(!w(e,S)){return;}var j=t(S),A=v(q(e).find(':sapTabbable').addBack(':sapTabbable'),e),$=A.first(),T=v(u(S,e,F),e),G,z;if(F){for(var i=0;i<T.length;i++){G=t(T[i]);if(G!=j){z=q(T[i]);break;}}if(!z||!z.length){z=$;}}else{z=x($,T,j,true);if(!z||!z.length){if(A.length==1){z=q(A[0]);}else if(A.length>1){j=t(A.eq(-1));G=t(A.eq(-2));if(j!=G){z=A.eq(-1);}else{z=x($,A,j,false);}}}}if(z&&z.length){var B=z[0],E=null,C=r(B);if(C&&C.id){var H=sap.ui.getCore().byId(C.id);if(H){E=q.Event("BeforeFastNavigationFocus");E.target=B;E.source=S;E.forward=F;H._handleEvent(E);}}if(!E||!E.isDefaultPrevented()){q.sap.focus(B);}}}q.sap.handleF6GroupNavigation=function(e,S){if(e.type!="keydown"||e.keyCode!=q.sap.KeyCodes.F6||e.isMarked("sapui5_handledF6GroupNavigation")||e.isMarked()||e.isDefaultPrevented()){return;}e.setMark("sapui5_handledF6GroupNavigation");e.setMarked();e.preventDefault();if(S&&S.skip){return;}var T=S&&S.target?S.target:document.activeElement,i=null;if(S&&S.scope){i=q.isArray(S.scope)?S.scope:[S.scope];}y(T,i,!e.shiftKey);};q(function(){q(document).on("keydown",function(e){q.sap.handleF6GroupNavigation(e,null);});});q.sap.isMouseEventDelayed=(D.browser.mobile&&!((D.os.ios&&D.os.version>=8&&D.browser.safari)||(D.browser.chrome&&!/SAMSUNG/.test(navigator.userAgent)&&D.browser.version>=32)));return q;});
