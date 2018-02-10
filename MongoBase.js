'use strict';
import mongoose from 'mongoose';
import config from './config';
import colors from 'colors'

let mapConnect = {};

class Mongo {
	constructor(db){
		let client = mapConnect[db];
		if (client) {
			this.client = client;
		} else {
			try {
				client = mongoose.createConnection(config.mongo.connect[db], config.mongo.option);
				mapConnect[db] = client;
				this.client = client;
			} catch (e) {
				console.log(colors.cyan('Mongo: ') + colors.red(e));
			}
		}
	}

	getConnect() {
		return this.client;
	}
}

module.exports = Mongo;
export default Mongo;