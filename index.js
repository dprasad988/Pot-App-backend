const express = require('express');
const connectDB = require('./config/db.js')
const usersRouter = require('./routes/users.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
connectDB();
app.use(express.json());

app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
