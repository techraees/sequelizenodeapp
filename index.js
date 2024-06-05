// index.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');
const adminRoutes = require('./routes/adminRoutes');
const sequelize = require('./models/index');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'))

app.use('/users', userRoutes);
app.use('/companies', companyRoutes);
app.use('/admins', adminRoutes);

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    console.log('Database synced successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to sync database:', err);
  });
