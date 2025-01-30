require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    res.json({ message: 'API is running...' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;

