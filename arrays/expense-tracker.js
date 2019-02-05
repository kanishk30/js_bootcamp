const account = {
    name: 'Kanishk Agrawal',
    expense: [],
    income: []
}
// Expense -> description, amount
// addexpense  -> description, amount
// getAccountSummary


let addExpense = ((description, amount) => {
    let obj = {};
    obj['description'] = description;
    obj['amount'] = amount;
    account.expense.push(obj);
});
let addIncome = ((description, amount) => {
    let obj = {};
    obj['description'] = description;
    obj['amount'] = amount;
    account.income.push(obj);
});

addExpense('Travel', 2000);
addExpense('Rent', 15000);
addExpense('Electricity', 3000);
addExpense('Cook', 5000);
addIncome('Salary', 100000);
addIncome('Freelancing', 25000);
let getAccountSummary = ((account) => {
    let totalExpense = 0;
    let totalIncome = 0;
     account.expense.forEach(expense => {
        totalExpense += expense.amount;
    });
     account.income.forEach(income => {
        totalIncome += income.amount;
    });
    let balance = totalIncome - totalExpense;
    console.log(`Total expense for ${account.name} is ${totalExpense} and income is ${totalIncome}. Balance is ${balance}`)
})

console.log(account);
getAccountSummary(account);
