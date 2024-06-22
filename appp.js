const express = require('express');
const collection = require("./mongo");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const handleRequest = async (req, res) => {
    const { email, password } = req.body;
    const data = { email, password };

    try {
        const check = await collection.findOne({ email: email });
        if (check) {
            res.json("exist");
        } else {
            await collection.insertMany([data]);
            res.json("notexist");
        }
    } catch (e) {
        console.error(e);
        res.status(500).json("error");
    }
};

app.post("/", handleRequest);
app.post("/signup", handleRequest);
app.post("/Admin", handleRequest);

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
