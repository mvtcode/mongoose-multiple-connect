'use strict';
import UserService from './UserService';
import UserService1 from './UserService1';
import ScoreService from './ScoreService';

const userService = new UserService();
const userService1 = new UserService1();
const scoreService = new ScoreService();

// const insert = async () => {
// 	const newInfo = await userService.insert({
// 		name: 'b',
// 		age: 2
// 	});
// 	console.log(newInfo);
// };
// insert();

const getList = async () => {
	const list = await userService.getList();
	console.log(list);
}
getList();

// const insert1 = async () => {
// 	const newInfo = await userService1.insert({
// 		name: 'h',
// 		age: 8
// 	});
// 	console.log(newInfo);
// };
// insert1();

const getList1 = async () => {
	const list = await userService1.getList();
	console.log(list);
}
getList1();

// const insertScore = async () => {
// 	const newInfo = await scoreService.insert({
// 		name: 'f',
// 		age: 6
// 	});
// 	console.log(newInfo);
// };
// insertScore();

const getListScore = async () => {
	const list = await scoreService.getList();
	console.log(list);
}
getListScore();