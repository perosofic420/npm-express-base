require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('./src/express');
require('./src/mysql');

const apiDir = path.join(__dirname, 'src', 'api');
const apiFolders = fs.readdirSync(apiDir);
for (const folder of apiFolders) {
    const folderPath = path.join(apiDir, folder);
    const files = fs.readdirSync(folderPath);
    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const { method, url, execute } = require(filePath);
        switch (method) {
        case "GET":
            express.get(url, execute);
            break;
        case "POST":
            express.post(url, execute);
            break;
        case "PUT":
            express.put(url, execute);
            break;
        case "DELETE":
            express.delete(url, execute);
            break;
        case "PATCH":
            express.patch(url, execute);
            break;
        }
    }
}

express.listen(3000);

console.log("yes m8");
