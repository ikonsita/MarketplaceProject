sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.sap.marketplaceproject.controller.View1", {
            onInit: function() {
            
                var filters = [];
    
                    this.getOwnerComponent().getModel().read("/MerciSet", {
                    filters: filters,
                    urlParameters: {},
                    success: function(data) {
                        
                        this.getOwnerComponent().getModel("GeneralModel").setProperty("/Dati", data.results);
                        
                    }.bind(this),
                    error: function(error) {}.bind(this)
                });
    
            },

            onToPage2 : function () {
                this.getOwnerComponent().getRouter().navTo("Page2");
            },
            
            onCart : function () {
                this.getOwnerComponent().getRouter().navTo("Cart");
            },


            onPress(oEvent) {
                const oItem = oEvent.getSource();
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Product", {
                    MerciPath: window.encodeURIComponent(oItem.getBindingContext("GeneralModel").getPath().substr(1))
                });
        },
            onFilterInvoices(oEvent) {
                // build filter array
                const aFilter = [];
                const sQuery = oEvent.getParameter("query");
                if (sQuery) {
                    aFilter.push(new Filter("DescMag", FilterOperator.Contains, sQuery));
                }
    
                // filter binding
                const oList = this.byId("List1");
                const oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            }

        });
    });
