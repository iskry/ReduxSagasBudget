const express = require('express');
const entryRoutes = require('./routes/entryRoutes');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001; 
const sequelize = require('./database.js');

app.use(cors());
app.use(express.json());
app.use(entryRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database synced!');
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Error syncing database:', err));
