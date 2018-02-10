'use strict';
import ScoreModel from './ScoreModel'

class Service extends ScoreModel {
	constructor() {
		super();
	}

	insert(info) {
		return new Promise((resolve, reject) => {
			try {
				const schema = new this.schema(info);
				schema.save().then((err, _info) => {
					resolve(err, _info);
				});
			} catch (e) {
				reject(e, null);
			}
		});
	}

	getList() {
		return new Promise((resolve, reject) => {
			try {
				this.schema.find().then((err, list) => {
					resolve(err, list);
				});
			} catch (e) {
				reject(e, null);
			}
		});
	}
};

module.exports = Service;
export default Service;