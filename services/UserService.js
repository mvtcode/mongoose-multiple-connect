'use strict';
import UserRepository from '../repositories/UserRepository'

export default class Service {
	constructor(redis) {
		this._redis = redis;
	}

	async insert(info) {
		const schema = new this.schema(info);
		return await schema.save();
	}

	async getList() {
		return await UserRepository.find();
	}
};