'use strict';

var OrdoroResource = require('../OrdoroResource');

module.exports = OrdoroResource.extend({

    list: function (options, cb) {
        this._request('GET', 'shipment/', options, cb);
    },

    find: function (id, cb) {
        this._request('GET', 'shipment/' + id + '/', {}, cb);
    },

		update: function(shipmentId, options, cb) {
			this._request('PUT', 'shipment/' + shipmentId + '/', options, cb);
		}
});
