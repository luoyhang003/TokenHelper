var FIBOS = require('fibos.js');

var httpEndpoint = 'http://va-rpc.fibos.io:8870';

var chainId = '6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a';


function fibos(privatekey) {
	return FIBOS({
		chainId: chainId,
		keyProvider: privatekey,
		httpEndpoint: httpEndpoint,
		logger: {
			log: null,
			error: null
		}
	});
}

module.exports = fibos;