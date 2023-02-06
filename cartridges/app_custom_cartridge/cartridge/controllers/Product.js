'use strict';

/**
 * @namespace Product
 */

const server = require('server');
server.extend(module.superModule);

const cache = require('*/cartridge/scripts/middleware/cache');
const consentTracking = require('*/cartridge/scripts/middleware/consentTracking');

/**
* Product-Show : This endpoint is called to show the details of the selected product
* @name Product-Show
* @function
* @memberof Product
* @param {querystringparameter} - pid - Product ID
* @param {category} - non-sensitive
* @param {renders} - isml
* @param {serverfunction} - append
*/
server.append('Show', function (req, res, next) {
    const ContentMgr = require('dw/content/ContentMgr');
    const ProductMgr = require('dw/catalog/ProductMgr');

    const pid = req.httpParameterMap.get('pid');
    const product = ProductMgr.getProduct(pid);

    const isInStock = product.getAvailabilityModel().isInStock();

    const contentAssetID = 'special-offers-available';
    const contentAsset = ContentMgr.getContent(contentAssetID);

    const viewData = res.getViewData();
    viewData.product.isInStock = isInStock;
    viewData.offerAsset = contentAsset;

    res.setViewData(viewData);
    next();
});

module.exports = server.exports();
