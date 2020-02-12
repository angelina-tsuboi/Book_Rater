require('./config/config');

const express = require("express")
const app = express()
const port = process.env.PORT || 5123
var {mongoose} = require('./db/mongoose');
var {Book} = require('./models/Book')
const bodyParser = require('body-parser')
mongoose.connect("mongodb://localhost:27017/BookRater", {useNewUrlParser: true});

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.set(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/submitBook', async(req, res) => {
    let title = req.body.bookName;
    let author = req.body.bookAuthor;
    let rating = req.body.bookRating;
    let description = req.body.bookDescription;
//save the data to DB
})

app.listen(port, (err) => {
    err ? console.log("Something went wrong: " + err) : console.log("App is up and running on port " + port)
})