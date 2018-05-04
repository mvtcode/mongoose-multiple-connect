'use strict';
import Redis from 'ioredis';

let list_redis = [];

export default async (conf) => {
	return new Promise((resolve, reject) => {
		let connect_type = conf.connect;
		let redis;
		if(connect_type=='default'){
			redis = new Redis(conf.default);
		}
		else if(connect_type=='sentinel'){
			redis = new Redis(conf.sentinel);
		}
		else if(connect_type=='cluster'){
			redis = new Redis(conf.cluster);
		}
		else{
			reject ('not support connect this type');
		}

		if(conf.monitor){
			redis.monitor((err, monitor) => {
				monitor.on('monitor', (time, args, source, database) => {
					console.log(time, args, source, database);
				});
			});
		}

		redis.on('connect',()=>{
			console.log('redis connect ok');
			list_redis.push(redis);
			resolve(redis);
		});

		redis.on('error',(error)=>{
			console.error('redis connect error', error);
			reject(error);
		});

		redis.on('close',()=>{
			console.log('redis close');
		});

		redis.on('reconnecting',()=>{
			console.log('redis reconnecting');
		});
	});
};

process.on('SIGINT', () => {
	if(list_redis.length > 0){
		list_redis.forEach(redis =>{
			try{
				// redis.quit();
				redis.disconnect();
			}
			catch(e){}
		});
	}
});