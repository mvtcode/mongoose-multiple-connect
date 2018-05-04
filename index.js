'use strict';

import app from './app';
import config from './config/config';
import Service from './services';
import IoRedis from './libs/IoRedis';

Service({
	default: IoRedis(config.redis.default)
});

const server = app.listen(config.port, config.hostname, () => {
	const {address, port} = server.address();
	console.log(`Server listening at http://${address}:${port}`);
});