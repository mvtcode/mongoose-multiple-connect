'use strict';
const config = {
	mongo: {
		connect: {
			db1: 'mongodb://localhost:27017/test1',
			db2: 'mongodb://localhost:27017/test2'
		},
		option: {
			keepAlive: 300000,
			connectTimeoutMS: 30000,
			reconnectTries: 30,
			reconnectInterval: 1000,
			// replicaSet: {
			// 	auto_reconnect: true,
			// 	socketOptions: {
			// 		keepAlive: 300000,
			// 		connectTimeoutMS: 30000,
			// 	},
			// 	strategy: 'ping',
			// 	read_secondary: true,
			// 	readPreference: 'nearest',
			// 	slaveOk: true,
			// 	safe: {w: "majority", j: 1, wtimeout: 10000}
			// }
		}
	}
};

module.exports = config;
export default config;