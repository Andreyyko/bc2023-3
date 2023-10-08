const fs = require('fs');

fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let parsedData = JSON.parse(data);

    for (let i = 0; i < parsedData.length; i++) {
        if (parsedData[i].txt == 'Витрати, усього') {
            value1 = parsedData[i].value;
        }
        else if (parsedData[i].txt == 'Доходи, усього') {
            value2 = parsedData[i].value;
        }
    }

    const content = `Доходи, усього:${value2.toFixed(4)}\nВитрати, усього:${value1.toFixed(3)}`;

    fs.writeFile('./output.txt', content, err => {
        if (err) {
            console.error(err);
        }
    });
});