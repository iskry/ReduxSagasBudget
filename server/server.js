const express = require('express');
const entryRoutes = require('./routes/entryRoutes');
require('dotenv').config();
const entryRoutes = require('./routes/entryRoutes');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(entryRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

