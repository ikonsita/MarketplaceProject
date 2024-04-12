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

        return Controller.extend("com.sap.marketplaceproject.controller.Order", {
            onInit: function() {
            
                var filters = [];
                
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("Order").attachPatternMatched(this.onObjectMatched, this);

                var ID = this.getOwnerComponent().getModel("OrderFilterModel").getData().IdOrdine;
            
                    filters.push(new sap.ui.model.Filter("IdOrdine", sap.ui.model.FilterOperator.EQ, ID));
                
                this.getOwnerComponent().getModel().read("/MerciSet", {
                    filters: filters,
                    urlParameters: {},
 
                    success: function (data) {
 
                        this.getOwnerComponent().getModel("GeneralOrderModel").setProperty("/Dati", data.results);
                               
                    }.bind(this),
                    error: function (error) { }.bind(this)
                });

            },
            onToPage1 : function () {
                this.getOwnerComponent().getRouter().navTo("Page2");
            },

            onObjectMatched(oEvent) {
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").OrderPath),
                    model: "OrderModel"
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
                const oList = this.byId("List4");
                const oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            }

        });
    });