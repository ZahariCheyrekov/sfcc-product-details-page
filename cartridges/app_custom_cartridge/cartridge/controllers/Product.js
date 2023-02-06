'use strict';

/**
 * @namespace Product
 */

const server = require('server');
server.extend(module.superModule);

const cache = require('*/cartridge/scripts/middleware/cache');
const consentTracking = require('*/cartridge/scripts/middleware/consentTracking');


server.append('Show', function (req, res, next) {
    const ProductMgr = require('dw/catalog/ProductMgr');

    const pid = req.httpParameterMap.get("pid");
    const product = ProductMgr.getProduct(pid);

    const isInStock = product.getAvailabilityModel().isInStock();

    const viewData = res.getViewData();
    viewData.product.isInStock = isInStock;
    res.setViewData(viewData);

    next();
});

module.exports = server.exports();
