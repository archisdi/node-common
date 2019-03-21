const GMAPS = require('@google/maps');

let client;

exports.initialize = ({ key }) => {
    client = GMAPS.createClient({
        key,
        Promise
    });
};

exports.getClient = () => {
    if (!client) exports.initialize();
    return client;
};

module.exports = exports;
