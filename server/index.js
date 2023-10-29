const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const propertyRoute = require("./routes/propertyRoute");
const messageRoute = require("./routes/messageRoute");
const visitRoute = require("./routes/visitRoute");
const sellPropertyRoute = require("./routes/sellPropertyRoute");
const userRoute = require("./routes/userRoute");

const app = express();

app.use(cors({
    origin: ["https://divine-client.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json());

mongoose.connect("mongodb+srv://shuaibafnansk:Shuaib11@cluster0.k5qlbv2.mongodb.net/divine?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log('atlas is connected'))
    .catch((err) => {
        console.log(err)
    });

    
app.use("/server/sellers", userRoute);
app.use("/server/properties", propertyRoute);
app.use("/server/messages", messageRoute);
app.use("/server/visits", visitRoute);
app.use("/server/sellProperties", sellPropertyRoute);

app.listen(3001, () => {
    console.log("local host is running")
})