'use strict';

import UserModel from '../models/UserModel'
import config from '../config/config';

class Service extends UserModel {
	constructor(dbConnect) {
		super(dbConnect);
	}

	async insert(info) {
		const schema = new this.schema(info);
		return await schema.save()
	}

	async getList() {
		return await this.schema.find({});
	}
};

export default new Service(config.mongo.default);