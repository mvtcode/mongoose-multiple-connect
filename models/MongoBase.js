'use strict';
import mongoose from 'mongoose';
import colors from 'colors'

let mapConnect = {};

export default class Mongo {
	constructor({connect, option, debug}){
		let client = mapConnect[connect];
		if (client) {
			this.client = client;
		} else {
			try {
				console.log(colors.cyan('Mongo:'),'connect', colors.green(connect));
				client = mongoose.createConnection(connect, option);
				mapConnect[connect] = client;
				this.client = client;
				mongoose.set('debug', debug);
			} catch (e) {
				console.log(colors.cyan('Mongo:'), colors.red(e));
			}
		}
	}

	getConnect() {
		return this.client;
	}
}

process.on('SIGINT', () => {
	if(Object.keys(mapConnect).length > 0){
		for(let key in mapConnect) {
			try{
				const connect = mapConnect(key);
				connect.close();
			} catch(e){}
		}
	}
});