const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Set up Content-Security-Policy to allow favicon and other necessary resources
app.use(cors());
app.use(express.json());

// Route to check if a number is even
app.post("/name-length", (req, res) => {
    console.log("name-length");
    const { name } = req.body;

    if (typeof name !== "string") {
        return res.status(400).json({ error: "Invalid input, please send a string" });
    }

    const nameLength = name.length;  // Calculate the length of the name
    res.json({ length: nameLength });  // Send the length back as JSON
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
