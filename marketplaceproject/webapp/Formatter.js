sap.ui.define(function() {
	"use strict";

	var Formatter = {

		status :  function (DispMercMag) {
				if (DispMercMag === "SI") {
					return "Success";
				} else if (DispMercMag === "NO") {
					return "Warning";
				} else {
					return "None";
				}
		},

		decimal: function () {
            // Define the formatter
            sap.ui.core.format.NumberFormat.getFloatInstance({
                style: "decimal",
                maxFractionDigits: 2,
                decimalSeparator: ",",
                groupingSeparator: "."
            });
        }
	};



	return Formatter;

},  /* bExport= */ true);