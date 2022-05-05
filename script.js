let money = prompt("Ваш бюджет на месяц?", '10000'),
	time = prompt('Введите дату в формате YYYY-MM-DD', '2022-05-01');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", 'ЖКХ'),
	a2 = prompt("Во сколько обойдется?", '3000'),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", 'Интернет'),
	a4 = prompt("Во сколько обойдется?", '1000');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);

