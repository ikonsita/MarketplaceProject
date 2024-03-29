sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
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
            }


        });
    });
