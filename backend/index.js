const express = require('express');
const cryptoRoutes = require('./routes/crypto');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use('/api', cryptoRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
