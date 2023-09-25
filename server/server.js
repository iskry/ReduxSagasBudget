const express = require('express');
const entryRoutes = require('./routes/entryRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(entryRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

