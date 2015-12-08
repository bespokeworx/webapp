/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.jsview("sap.ui.demokit.explored.view.app", {

	getControllerName : function () {
		return "sap.ui.demokit.explored.view.app";
	},
	
	createContent : function (oController) {

		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);

		// create split app
		return new sap.m.SplitApp("splitApp", {
			afterDetailNavigate: function () {
				this.hideMaster();
			}
		});
	}
});
