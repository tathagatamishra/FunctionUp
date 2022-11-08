const express = require('express');
const { default: mongoose } = require('mongoose');

const route = require('./routes/route.js');

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://new_user:jk1BBWwmxQpZ31zO@cluster0.pxvwsjp.mongodb.net/Axios", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);


app.listen(4000, function () {
    console.log('Express app running on port 4000')
});
