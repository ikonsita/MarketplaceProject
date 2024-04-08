sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "sap/ui/core/routing/History",
    'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, History, MessageToast) {
        "use strict";

        return Controller.extend("com.sap.marketplaceproject.controller.Product", {
            onInit: function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("Product").attachPatternMatched(this.onObjectMatched, this);
            },

            onObjectMatched(oEvent) {
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").MerciPath),
                    model: "GeneralModel"
                });
            },

            onNavBack() {
                const oHistory = History.getInstance();
                const sPreviousHash = oHistory.getPreviousHash();
    
                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    const oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("Page1", {}, true);
                }
            },

           onAddToCart(){
                
                var ID = [this.getOwnerComponent().getModel("GeneralModel").getBindings().filter(binding => binding.sPath === "IdMerci")[0].getValue()];
                this.getOwnerComponent().getModel("CartModel").getProperty("/IdMerci").push(ID);
                MessageToast.show('Product added to cart');
            }
        });
    });