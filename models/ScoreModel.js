'use strict';
import MongoBase from './MongoBase'
import mongoose from 'mongoose';

class Model extends MongoBase {
	constructor (connect, option, debug) {
		super(connect, option, debug);
		const connection = this.getConnect();
		const Schema = mongoose.Schema;

		const schema = new Schema({
			name: String,
			agen: Number
		});
		
		schema.set('autoIndex', false);
		this.schema = connection.model('scores', schema);
	}

	getSchema () {
		return this.schema;
	}
};

// module.exports = Model;
export default Model;