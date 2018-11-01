var fibos = require("./init.js")

var account = console.readLine("请输入您的FIBOS账户名:");

var r = fibos('').getTableRowsSync(true, "eosio.token", account, "stats");
var num = r.rows.length;

console.warn("您所创建的通证数量为：" + num);

for (var i = 0; i < num; i++) {
	console.warn("第 " + (i + 1) + " 个：");
	console.warn("通证名称为：" + r.rows[i].supply.split(' ')[1]);
	console.warn("最大发行量为：" + r.rows[i].max_supply);
	console.warn("最大可兑换量为：" + r.rows[i].max_exchange);
	console.warn("CW为：" + r.rows[i].connector_weight);
	console.warn("锁仓通证数量为：" + r.rows[i].reserve_supply);
	console.warn("锁仓保证金（FO）数量为：" + r.rows[i].reserve_connector_balance);
	console.error("当前通证的价格为：" + calPrice(r.rows[i].connector_balance, r.rows[i].reserve_connector_balance, r.rows[i].supply, r.rows[i].reserve_supply, r.rows[i].connector_weight).toFixed(6));
}


function calPrice(connector_balance, reserve_connector_balance, supply, reserve_supply, cw) {
	// console.log(connector_balance.split(' ')[0], " ", reserve_connector_balance.split(' ')[0], ' ', cw, ' ', reserve_supply.split(' ')[0], ' ', supply.split(' ')[0])
	return parseFloat(parseFloat(connector_balance.split(' ')[0]) + parseFloat(reserve_connector_balance.split(' ')[0]) /
		(parseFloat(cw) * (parseFloat(reserve_supply.split(' ')[0]) + parseFloat(supply.split(' ')[0]))))
}