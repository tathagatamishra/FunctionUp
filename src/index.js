const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://new_user:jk1BBWwmxQpZ31zO@cluster0.pxvwsjp.mongodb.net/Authentication", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is ✅✅✅"))
.catch ( err => console.log(err) )


app.use('/', route)


app.listen(1000, function () {
    console.log('Express app 🏃🏃🏃 on port 3️⃣ 0️⃣ 0️⃣ 0️⃣')
});
