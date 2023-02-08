const express = require('express')
const path = require('path')

const sequelize = require('./config/connection')

//Sets up the express app
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
})