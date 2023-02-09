const express = require('express')
const path = require('path')

const sequelize = require('./config/connection')

//Sets up the express app
const app = express()
const PORT = process.env.PORT || 3003;

//Sets up handlebars
const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req,res) =>{
    res.render('index')
})

app.get('/login',(req, res) =>{
    res.render('login')
})
// app.use(require('./controllers/index'));


app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
})