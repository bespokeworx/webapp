/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./ListBase','./library'],function(q,L,l){"use strict";var T=L.extend("sap.m.Table",{metadata:{library:"sap.m",properties:{backgroundDesign:{type:"sap.m.BackgroundDesign",group:"Appearance",defaultValue:sap.m.BackgroundDesign.Translucent},fixedLayout:{type:"boolean",group:"Behavior",defaultValue:true},showOverlay:{type:"boolean",group:"Appearance",defaultValue:false}},aggregations:{columns:{type:"sap.m.Column",multiple:true,singularName:"column"}}}});T.prototype.sNavItemClass="sapMListTblRow";T.prototype.init=function(){this._hasPopin=false;this._iItemNeedsColumn=0;this._selectAllCheckBox=null;L.prototype.init.call(this);};T.prototype.onBeforeRendering=function(){L.prototype.onBeforeRendering.call(this);this._notifyColumns("ItemsRemoved");};T.prototype.onAfterRendering=function(){L.prototype.onAfterRendering.call(this);var t=q(this.getTableDomRef());this._notifyColumns("ColumnRendered",t,!this.getFixedLayout());this.updateSelectAllCheckbox();this._renderOverlay();};T.prototype._renderOverlay=function(){var $=this.$(),a=$.find(".sapMTableOverlay"),s=this.getShowOverlay();if(s&&a.length===0){a=q("<div>").addClass("sapUiOverlay sapMTableOverlay").css("z-index","1");$.append(a);}else if(!s){a.remove();}};T.prototype.setShowOverlay=function(s){this.setProperty("showOverlay",s,true);this._renderOverlay();return this;};T.prototype.exit=function(){L.prototype.exit.call(this);if(this._selectAllCheckBox){this._selectAllCheckBox.destroy();this._selectAllCheckBox=null;}};T.prototype.destroyItems=function(){this._notifyColumns("ItemsRemoved");return L.prototype.destroyItems.call(this);};T.prototype.removeAllItems=function(){this._notifyColumns("ItemsRemoved");return L.prototype.removeAllItems.call(this);};T.prototype.removeSelections=function(){L.prototype.removeSelections.apply(this,arguments);this.updateSelectAllCheckbox();return this;};T.prototype.selectAll=function(){L.prototype.selectAll.apply(this,arguments);this.updateSelectAllCheckbox();return this;};T.prototype.getColumns=function(s){var c=this.getAggregation("columns",[]);if(s){c.sort(function(a,b){return a.getOrder()-b.getOrder();});}return c;};T.prototype.onAfterPageLoaded=function(){this.updateSelectAllCheckbox();L.prototype.onAfterPageLoaded.apply(this,arguments);};T.prototype.shouldRenderItems=function(){return this.getColumns().some(function(c){return c.getVisible();});};T.prototype.onItemTypeColumnChange=function(i,n){this._iItemNeedsColumn+=(n?1:-1);if(this._iItemNeedsColumn==1&&n){this._setTypeColumnVisibility(true);}else if(this._iItemNeedsColumn==0){this._setTypeColumnVisibility(false);}};T.prototype.onItemSelectedChange=function(i,s){L.prototype.onItemSelectedChange.apply(this,arguments);q.sap.delayedCall(0,this,function(){this.updateSelectAllCheckbox();});};T.prototype.ontouchstart=function(e){L.prototype.ontouchstart.call(this,e);this._handlePopinEvent(e);};T.prototype.ontouchend=function(e){this._handlePopinEvent(e);};T.prototype.ontouchcancel=T.prototype.ontouchend;T.prototype.ontouchmove=function(e){this._handlePopinEvent(e);};T.prototype.ontap=function(e){this._handlePopinEvent(e);};T.prototype.getTableDomRef=function(){return this.getDomRef("listUl");};T.prototype.getItemsContainerDomRef=function(){return this.getDomRef("tblBody");};T.prototype.setNavigationItems=function(i){var h=this.$("tblHeader");var f=this.$("tblFooter");var r=this.$("tblBody").find(".sapMLIB");var I=h.add(r).add(f).get();i.setItemDomRefs(I);if(i.getFocusedIndex()==-1){i.setFocusedIndex(h[0]?1:0);}};T.prototype.checkGrowingFromScratch=function(){if(this.hasPopin()){return false;}return this.getColumns().some(function(c){return c.getVisible()&&c.getMergeDuplicates();});};T.prototype.onColumnResize=function(c){if(!this.hasPopin()&&!this._mutex){var h=this.getColumns().some(function(b){return b.isPopin();});if(!h){c.setDisplayViaMedia(this.getTableDomRef());return;}}this._dirty=window.innerWidth;if(!this._mutex){var a=window.innerWidth;this._mutex=true;this.rerender();q.sap.delayedCall(200,this,function(){if(this._dirty!=a){this._dirty=0;this.rerender();}this._mutex=false;});}};T.prototype.setTableHeaderVisibility=function(c){if(!this.getDomRef()){return;}var $=q(this.getTableDomRef()),a=$.find("thead > tr"),h=!a.hasClass("sapMListTblHeaderNone"),v=a.find(".sapMListTblCell").filter(":visible"),b=v.eq(0);if(v.length==1){b.width("");}else{b.width(b.attr("data-sap-width"));}$.find(".sapMGHLICell").attr("colspan",v.length+!!sap.m.ListBaseRenderer.ModeOrder[this.getMode()]);if(!c&&h){a[0].className="sapMListTblRow sapMListTblHeader";this._headerHidden=false;}else if(c&&!h&&!v.length){a[0].className="sapMListTblHeaderNone";this._headerHidden=true;}};T.prototype._setTypeColumnVisibility=function(v){var t=q(this.getTableDomRef()),$=this.$("tblHeadNav"),i=$.index()+1,a=t.find("tr > td:nth-child("+i+")");t.toggleClass("sapMListTblHasNav",v);$.attr("aria-hidden",!v);a.attr("aria-hidden",!v);};T.prototype._notifyColumns=function(a,p,P){this.getColumns().forEach(function(c){c["on"+a](p,P);});};T.prototype._handlePopinEvent=function(e,r){if(!this.hasPopin()){return;}if(r&&!sap.m.ColumnListItem.isPopinFocused()){return;}return sap.m.ColumnListItem.handleEvents(e,this.getItemsContainerDomRef());};T.prototype._getSelectAllCheckbox=function(){return this._selectAllCheckBox||(this._selectAllCheckBox=new sap.m.CheckBox({id:this.getId("sa"),activeHandling:false}).setParent(this,null,true).attachSelect(function(){if(this._selectAllCheckBox.getSelected()){this.selectAll(true);}else{this.removeSelections(false,true);}},this).setTabIndex(-1).addEventDelegate({onAfterRendering:function(){this._selectAllCheckBox.getFocusDomRef().setAttribute("aria-hidden","true");}},this));};T.prototype.updateSelectAllCheckbox=function(){if(this._selectAllCheckBox&&this.getMode()==="MultiSelect"){var i=this.getItems(),s=this.getSelectedItems().length,S=i.filter(function(I){return I.isSelectable();}).length;this._selectAllCheckBox.setSelected(i.length>0&&s==S);}};T.prototype.getColSpan=function(){return(this._colCount||1)-1;};T.prototype.getColCount=function(){return(this._colCount||0);};T.prototype.hasPopin=function(){return!!this._hasPopin;};T.prototype.isHeaderRowEvent=function(e){var h=this.$("tblHeader");return!!q(e.target).closest(h,this.getTableDomRef()).length;};T.prototype.isFooterRowEvent=function(e){var f=this.$("tblFooter");return!!q(e.target).closest(f,this.getTableDomRef()).length;};T.prototype.onNavigationItemFocus=function(){};T.prototype.onsapspace=function(e){if(e.isMarked()){return;}if(e.target===this.getDomRef("tblHeader")&&this._selectAllCheckBox){this._selectAllCheckBox.setSelected(!this._selectAllCheckBox.getSelected()).fireSelect();e.preventDefault();e.setMarked();}this._handlePopinEvent(e,true);};T.prototype.onsapenter=function(e){this._handlePopinEvent(e,true);};T.prototype.onsapdelete=function(e){this._handlePopinEvent(e,true);};T.prototype.onsaptabnext=function(e){if(this._handlePopinEvent(e)){return;}var r=q();if(e.target.id==this.getId("nodata")){r=this.$("nodata");}if(this.isHeaderRowEvent(e)){r=this.$("tblHeader");}else if(this.isFooterRowEvent(e)){r=this.$("tblFooter");}var o=r.find(":sapTabbable").get(-1)||r[0];if(e.target===o){this.forwardTab(true);}};T.prototype.onsaptabprevious=function(e){var t=e.target.id;if(t==this.getId("nodata")||t==this.getId("tblHeader")||t==this.getId("tblFooter")){this.forwardTab(false);}else if(t==this.getId("trigger")){this.focusPrevious();e.preventDefault();}else{this._handlePopinEvent(e);}};T.prototype.onfocusin=function(e){var c=this._handlePopinEvent(e,true);L.prototype.onfocusin.call(this,e);c&&c.focus();};return T;},true);
