sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/demo/wt/HelloDialog"
], function (UIComponent, JSONModel, ResourceModel,HelloDialog) {
    return UIComponent.extend("sap.ui.demo.wt.Component", {

        metadata : {
            rootView: "sap.ui.demo.wt.Main",
            manifest: "json",

        },



        init : function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            var oData = {
                recipient : {
                    name : "Prasad.."
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set i18n model
            var i18nModel = new ResourceModel({
                bundleName : "sap.ui.demo.wt.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");



            var oInvoiceModel = new JSONModel("./util/Invoices.json");

            this.setModel(oInvoiceModel, "invoice");


            this.helloDialog = new HelloDialog( );

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

           this.getRouter().initialize();




        }
    });
});