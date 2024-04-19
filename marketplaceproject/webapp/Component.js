/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/sap/marketplaceproject/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("com.sap.marketplaceproject.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                this.setModel(models.createGeneralModel(), "GeneralModel");

                this.setModel(models.createCartModel(), "CartModel");

                this.setModel(models.createCartGeneralModel(), "CartGeneralModel");

<<<<<<< HEAD
                this.setModel(models.createOrderModel(), "OrderModel");

                this.setModel(models.createOrderFilterModel(), "OrderFilterModel");

                this.setModel(models.createGeneralOrderModel(), "GeneralOrderModel");

=======
                this.setModel(models.createNewInvoiceModel(), "NewInvoiceModel");
>>>>>>> HomeMarketlace

            }
        });
    }
);