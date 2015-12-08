sap.ui.controller('sap.ui.demo.wt.Main', {

    onGreet: function() {

        //this._getDialog().open();

        //sap.m.MessageToast.show("This message should appear in the message toast");

        //debugger;
        //this.getOwnerComponent().helloDialog.open(this.getView());
        this.getOwnerComponent().helloDialog.open(this.getView());

    },


    //_getDialog : function () {
    //    if (!this._oDialog) {
    //        this._oDialog = sap.ui.xmlfragment("sap.ui.demo.wt.HelloDialog",this);
    //        this.getView().addDependent(this._oDialog);
    //    }
    //    return this._oDialog;
    //},
    //
    //onCloseDialog : function () {
    //    this._getDialog().close();
    //
    //
    //},




    /**
    * Called when a controller is instantiated and its View controls (if available) are already created.
    * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
    * @memberOf webapp.Main **/
    onInit: function() {

        //var oData = {
        //
        //    recipient: { name : "Prasad"}
        //
        //};
        //
        //
        //var oModel = new sap.ui.model.json.JSONModel(oData);
        //var oMainView = this.getView();
        //oMainView.setModel(oModel);
        //this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());



    },

    /**
    * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
    * (NOT before the first rendering! onInit() is used for that one!).
    * @memberOf webapp.Main
    **/
    onBeforeRendering: function() {



    },

    /**
    * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
    * This hook is the same one that SAPUI5 controls get after being rendered.
    * @memberOf webapp.Main **/
    onAfterRendering: function() {

    },

    /**
    * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
    * @memberOf webapp.Main
    **/
    onExit: function() {


    },


    onFilterInvoices : function (oEvent) {
        // build filter array
        var aFilter = [];
        var sQuery = oEvent.getParameter("query");


        if (sQuery) {
            aFilter.push(new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.Contains, sQuery));
        }

        // filter binding
        var oList = this.getView().byId("list");
        var aItems = oList.getItems();
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
    }

});
