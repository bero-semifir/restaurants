const mongoose = require('mongoose');

const URL = process.env.URL;

const mongoConnect = async() => {
    const conn = await mongoose.connect(URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
    console.log(`Mongo connecté sur ${conn.connection.host}`.cyan.underline.bold)
}

mongoConnect();