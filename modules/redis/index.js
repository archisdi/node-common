const Redis = require('ioredis');

let instance;

exports.initialize = ({ config }) => {
    instance = new Redis(config.connection_string);
};

exports.getInstance = async () => {
    if (!instance) await exports.initialize();
    return instance;
};

module.exports = exports;
