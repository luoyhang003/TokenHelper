var fibos = require("./init.js")

//相关信息
var symbol = 'AF'
var max_supply = '10000000000.0000 AF'
var max_exchange = '10000000000.0000 AF'
var connector_weight = 0.15
var reserve_supply = '3500000000.0000 AF'
var reserve_connector_balance = '78000000.0000 FO'

console.error("请确认以下信息：（按Y键后回车表示确认，其它按键表示退出）");

console.warn("待发行通证的名称：" + symbol);
console.warn("最大发行量：" + max_supply);
console.warn("最大可兑换量：" + max_exchange);
console.warn("CW：" + connector_weight);
console.warn("锁仓通证数量：" + reserve_supply);
console.warn("锁仓保证金（FO）数量：" + reserve_connector_balance);

var ok = console.readLine("请确认：（按Y键后回车表示确认，其它按键表示退出）");

if (ok == 'Y' || ok == 'y') {
	var account = console.readLine("请输入您的FIBOS账户名：");
	var priKey = console.readLine("请输入您的账户私钥：");

	console.notice("正在发行通证....")

	var ctx = fibos(priKey).contractSync("eosio.token");

	var lock_time = parseDate((fmtDate(2) + (6 * 30 * 24 * 60 * 60)));
	let r = ctx.excreateSync(
		account,
		max_supply,
		0.15,
		max_exchange,
		reserve_supply,
		reserve_connector_balance,
		lock_time, {
			authorization: account
		});
	console.notice("通证发行完毕")
} else {
	console.error('已退出')
}

function fmtDate(n) {
	n = n || 2;
	return parseInt((new Date().getTime() + n * 1000) / 1000);
}

function parseDate(time) {
	return new Date(time * 1000).toISOString().split('.')[0];
}