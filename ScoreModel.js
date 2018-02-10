'use strict';
import Mongo from './MongoBase'
let mongoose = require ("mongoose");

class Model extends Mongo {
	constructor () {
		super('db2');
		const connection = this.getConnect();
		const Schema = mongoose.Schema;

		const schema = new Schema({
			name: String,
			agen: Number
		});

		schema.set('autoIndex', false);
		this.schema = connection.model('tests', schema);
	}

	getSchema () {
		return this.schema;
	}
};

module.exports = Model;
export default Model;