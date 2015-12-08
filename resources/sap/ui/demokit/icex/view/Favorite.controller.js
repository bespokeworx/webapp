/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.controller("sap.ui.demokit.icex.view.Favorite",{onInit:function(){this.toggleUiModel();this.oBus=this.getOwnerComponent().getEventBus();},toggleUiModel:function(){var m=this.getView().getModel("ui");if(!m){m=new sap.ui.model.json.JSONModel({inEdit:false,inDisplay:true,listMode:(sap.ui.Device.system.phone)?"None":"SingleSelectMaster",listItemType:(sap.ui.Device.system.phone)?"Active":"Inactive",showToolbar:(sap.ui.Device.system.phone)?false:true});this.getView().setModel(m,"ui");}else{var d=m.getData();var _;var a;var b=true;if(d.inDisplay){_="Delete";a="Inactive";}else{_=(sap.ui.Device.system.phone)?"None":"SingleSelectMaster";a=(sap.ui.Device.system.phone)?"Active":"Inactive";b=(sap.ui.Device.system.phone)?false:true;}m.setData({inEdit:d.inDisplay,inDisplay:d.inEdit,listMode:_,listItemType:a,showToolbar:b});}},navBack:function(e){this.oBus.publish("nav","back");},deleteIconList:function(e){var n=e.getParameter("listItem").getTitle();this.getView().getModel("fav").toggleFavorite(n);},selectIconList:function(e){this._showDetail(e.getParameter("listItem"));},pressIconListItem:function(e){this._showDetail(e.getSource());},_showDetail:function(i){this.oBus.publish("nav","to",{id:"Detail"});this.oBus.publish("app","RefreshDetail",{name:i.getBindingContext("fav").getObject().name});}});
