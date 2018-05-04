'use strict';
const config = {
	port: 4000,
	hotname: '127.0.0.1',
	mongo: {
		db1: {
			connect: 'mongodb://localhost:27017/test1',
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
		},
		db2: {
			connect: 'mongodb://localhost:27017/test2',
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
	}
};

module.exports = config;
export default config;