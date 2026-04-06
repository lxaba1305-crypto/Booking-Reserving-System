const express = require('express');
const app = express();
const PORT = 3000;
const bookingRoutes = require('./routes/bookingRoutes');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/api', bookingRoutes);

app.listen(PORT, () => {
    console.log(`Server is operational on port ${PORT}`);
});