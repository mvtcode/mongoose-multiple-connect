'use strict';

import UserService from './UserService';

export default (mapRedis) => {
	global.UserService = new UserService(mapRedis.default);
}