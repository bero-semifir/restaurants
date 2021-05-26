const mongoose = require('mongoose');

const URL = "mongodb://localhost:27017/app";

const mongoConnect = async() => {
    const conn = await mongoose.connect(URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
    console.log(`Mongo connecté sur ${conn.connection.host}`.cyan.underline.bold)
}

mongoConnect();