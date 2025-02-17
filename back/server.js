const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/name-length", (req, res) => {
    const name = req.body.name;

    if (typeof name !== "string") {
        return res.status(400).json({ error: "Invalid input, please send a string" });
    }

    res.json({ length: name.length });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
