'use strict';

import fs from 'fs';
import tracer from 'tracer';
import {join} from 'path';

const logger = tracer.colorConsole();

export default (redis) => {
	const servicePath = join(__dirname, '../services');
	fs.readdirSync(servicePath)
		.filter(file => ~file.search(/^[^\.].*\.js$/))
		.forEach(file =>{
			try{
				const module = file.split('.')[0];
				import Service from join(servicePath, file);
				global[module] = new Service(redis);
			}
			catch (e){
				logger.error(file, e);
				throw new Error(e, file);
			}
		});
};