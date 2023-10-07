const http = require('http');

const data = [
    { fname: 'Shivam', lname: 'Vishwakarma', email: 'shivam.vishwakarma@exelaonline.com' },
    { fname: 'Satyam', lname: 'Vishwakarma', email: 'satyam.vishwakarma@exelaonline.com' },
    { fname: 'Rohit', lname: 'Yadav', email: 'rohit.yadav@exelaonline.com' },
    { fname: 'Roshan', lname: 'Sharma', email: 'roshan.sharma@exelaonline.com' },
    { fname: 'Ankit', lname: 'Pal', email: 'ankit.pal@exelaonline.com' },
    { fname: 'Rupesh', lname: 'Yadav', email: 'rupesh.yadav@exelaonline.com' }
];

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application\json' });
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(2800);

console.table(data);