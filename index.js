const express = require('express');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


connectDB();
// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Import routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
