'use strict';
import MongoBase from './MongoBase'
import mongoose from 'mongoose';

export default class Model extends MongoBase {
	constructor (dbConnect) {
		super(dbConnect);
		const connection = this.getConnect();
		const Schema = mongoose.Schema;

		const schema = new Schema({
			name: String,
			agen: Number
		});

		schema.set('autoIndex', false);
		this.schema = connection.model('users', schema);
	}

	getSchema () {
		return this.schema;
	}
};