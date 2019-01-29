const account = {
    name: 'Kanishk',
    income: 0,
    expenditure: 0
}
const addIncome = (acc, income) => {
    acc.income += income;
}

const addExpense = (acc, expense) => {
    acc.expenditure += expense;
}
const resetIncome = (acc) => {
    acc.income = 0;
    acc.expenditure = 0;
}

const getAccountSummary = (acc) => {
    console.log(`Account for ${acc.name} has ${acc.income - acc.expenditure}. ${acc.income} in income. ${acc.expenditure} in expenses `)
}
// Note: No role of aync function calls yet. ( Still exploring :P )

addIncome(account, 1000);
addIncome(account, 500);
addExpense(account, 300);
addExpense(account, 300);
addExpense(account, 300);
getAccountSummary(account);
resetIncome(account);
getAccountSummary(account);
