// 使用常量名代替
const USER_KYE = 'user_key';
// 对数据进行存储
export default {
	//保存user
	saveUser(user) {
		localStorage.setItem(USER_KYE, JSON.stringify(user));
	},
	//读取user
	getUser() {
		return JSON.parse(localStorage.getItem(USER_KYE) || '{}');
	},
	//删除user
	removeUser() {
		localStorage.removeItem(USER_KYE);
	}
};
