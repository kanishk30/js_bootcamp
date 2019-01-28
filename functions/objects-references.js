const myAccount = {
    name: 'Kanishk',
    expense: 100,
    income: 20
}

const addExpense = (account, amount) => {
    account.expense += amount;
    console.log(account, 'account');
}

addExpense(myAccount, 30);
console.log(myAccount, 'myAccount'); // changed

/*
{
    name: 'Kanishk',
    expense: 130,
    income: 20
}
'account' 
{
    name: 'Kanishk',
    expense: 130,
    income: 20
}
'myAccount'

*/