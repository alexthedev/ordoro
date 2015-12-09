'use strict';

var OrdoroResource = require('../OrdoroResource');

module.exports = OrdoroResource.extend({

    list: function (options, cb) {
        this._request('GET', 'product/', options, cb);
    },

    counts: function (options, cb) {
        this._request('GET', 'product/counts/', options, cb);
    },

    create: function (options, cb) {
        this._request('POST', 'product/', options, cb);
    },

    find: function (sku, cb) {
        this._request('GET', 'product/' + sku + '/', {}, cb);
    },

		update: function(sku, options, cb) {
			this._request('PUT', 'product/' + sku + '/', options, cb);
		},

    nDaySales: function (cb) {
        this._request('GET', 'product/n_day_sales/', {}, cb);
    }
});
