//db pswd : VYQeGniQjVYs8AUQ

const express = require("express")
const app = express()

const mongoose = require("mongoose")
const dotenv = require("dotenv")

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users")


dotenv.config();

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( () => console.log("DB connected successfully!"))
.catch((err) => console.log(err));

app.use(express.json());

app.use("/server/auth", authRoute);

app.use("/server/users", userRoute);

app.listen(8800, () => {
    console.log("Backend Server is Running")
});