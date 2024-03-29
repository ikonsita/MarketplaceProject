sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.marketplaceproject.controller.Profile", {
            onInit: function() {
            

            },

            onToPage1 : function () {
                this.getOwnerComponent().getRouter().navTo("Page1");
            }
        });
    });