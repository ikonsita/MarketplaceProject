sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },

        createGeneralModel: function() {
			var oModel = new JSONModel({"Dati": []});
			return oModel;
		},

        createCartModel: function() {
			var oModel = new JSONModel({"IdMerci": [],  "PrezzoTotale": ''});
			return oModel;
		},

        createCartGeneralModel: function() {
			var oModel = new JSONModel({"Dati": []});
			return oModel;
		},
        createNewInvoiceModel: function() {
			var oModel = new JSONModel({"NumeroOrdine": '00001', "Categoria": '', "IndirizzoConsegna": '', "DettaglioOrdine":'', "DataOrdine": new Date(),"IndirizzoPartenza": 'Magazzini Ikons',"Stato": 'SPEDIZIONE', "PrezzoTotale": '', "IdFornitore": '1',"IdCliente": '1'});
			return oModel;
		},
        
    };
});