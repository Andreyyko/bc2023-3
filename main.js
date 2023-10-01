const fs = require('fs');
const { parse } = require('path');

fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let parsedData = JSON.parse(data);
    let sumExpenses = 0;
    let sumIncome = 0;

    for (let i = 0; i < parsedData.length; i++) {
        if (parsedData[i].parent == 'BS2_ExpensesTotal') {
            sumExpenses = sumExpenses + parsedData[i].value;
        }
        else if(parsedData[i].parent == 'BS2_IncomeTotal'){
            sumIncome = sumIncome + parsedData[i].value;
        }
    }
    
    const content = `Доходи, усього:${sumIncome.toFixed(4)}\nВитрати, усього:${sumExpenses.toFixed(3)}`;

    fs.writeFile('./output.txt', content, err => {
        if (err) {
            console.error(err);
        }
    });
});