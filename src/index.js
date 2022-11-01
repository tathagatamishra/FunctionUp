const express = require('express')
const moment = require('moment')

const route = require('./routes/route.js');

const app = express();


app.use((req, res, next) => {
    
    console.log(moment().format(), req.ip, req.path);

    next();
});

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app  🏃 🏃 🏃  on port 3️⃣ 0️⃣ 0️⃣ 0️⃣')
});
