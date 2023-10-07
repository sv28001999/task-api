const fs = require('fs');

function createCSVFile(fname, num) {
    let strData = "";
    for (let i = 1; i <= num; i++) {
        strData += formatText(i) + "\n";
        if (i === num) {
            fs.writeFileSync(fname, strData);
        }
    }
}

function formatText(count) {
    let fText = `|D|Shivam${count}|Vishwakarma|shivam${count}.vishwakarma@gmail.com|${count}|`;
    return fText;
}

createCSVFile("LDAP.csv", 50000);