const mongoose= require('mongoose');

const URI='mongodb://localhost/merstack';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

});

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('DB is connected')
})
