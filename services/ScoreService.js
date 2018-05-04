'use strict';
import ScoreModel from '../models/ScoreModel'
import config from '../config/config';

class Service extends ScoreModel {
	constructor(db = 'default') {
		super(config.mongo[db].connect, config.mongo[db].option, true);
	}

	async insert(info) {
		const schema = new this.schema(info);
		return schema.save()
	}

	async getList() {
		return await this.schema.find();
	}
};

// module.exports = Service;
export default new Service('db2');