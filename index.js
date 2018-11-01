choice();

function choice() {
	console.notice("=======欢迎使用通证创建助手========");
	console.log(
		`
1. 创建通证\n
2. 查询已创建通证\n
3. 退出\n

`
	)
	var choose = Number(console.readLine("choice:"))

	console.notice("--------------------------------------Begin-----------------------------------");

	switch (choose) {
		case 1:
			run('./lib/create.js');
			break;
		case 2:
			run('./lib/query.js')
			break;
	}
	console.notice("--------------------------------------End--------------------------------------");
	if (choose <= 2) choice();
}