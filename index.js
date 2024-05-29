const express = require('express');
const connectDB = require('./config/db.js')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
connectDB();
app.use(express.json());

const apiRoutes = require('./routes/users.js');
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
