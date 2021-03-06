'use strict';

var resources = {
    Orders: require('./resources/Orders'),
    Carts: require('./resources/Carts'),
    Products: require('./resources/Products'),
		Shipments: require('./resources/Shipments'),
    Warehouses: require('./resources/Warehouses')
};

Ordoro.OrdoroResource = require('./OrdoroResource');
Ordoro.resources = resources;

function Ordoro(email, password) {
    if (!(this instanceof Ordoro)) {
        return new Ordoro(email, password);
    }

    this.auth = {email: email, password: password};

    this._prepResources();
}

Ordoro.prototype = {
    _prepResources: function () {
        for (var name in resources) {
            this[name.toLowerCase()] = new resources[name](this);
        }
    }
};

module.exports = Ordoro;
