const mongoose = require('mongoose')
const DB_NAME = 'pirates_db'


mongoose.connect('mongodb://localhost/'+ DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
