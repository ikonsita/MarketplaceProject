sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, History) {
        "use strict";

        return Controller.extend("com.sap.marketplaceproject.controller.Cart", {
 
            onInit: function() {     
                var filters = [];

			var IdMerci = this.getOwnerComponent().getModel("CartModel").getData().IdMerci;
	        if(IdMerci.length == 0){
                filters.push(new sap.ui.model.Filter("IdMerci", sap.ui.model.FilterOperator.EQ, IdMerci));
            }
            for (var i = 0; i < IdMerci.length; i++) {
			filters.push(new sap.ui.model.Filter("IdMerci", sap.ui.model.FilterOperator.EQ, IdMerci[i]));
            }
			this.getOwnerComponent().getModel().read("/MerciSet", {
				filters: filters,
				urlParameters: {},
				
				success: function(data) {

					this.getOwnerComponent().getModel("CartGeneralModel").setProperty("/Dati", data.results);
					
				}.bind(this),
				error: function(error) {}.bind(this)
			});

                   },

                   onDelete: function(oEvent){
                    console.log(oEvent);
                    
                   },

                   onRefresh: function() { this.onInit();},

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
        });
    });