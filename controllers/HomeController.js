'use strict';

class controller {
	constructor() {

	}

	home(req, res) {
		res.send('home');
	}
}

export default new controller();