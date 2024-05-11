const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const caravanRoute = require('./routes/caravanRoute');
const favoriteCaravansRoute = require('./routes/favoriteCaravansRoute');

dotenv.config();
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.log(err));

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/caravan', caravanRoute);
app.use('/api/favorites', favoriteCaravansRoute);

app.listen('8000', () => {
  console.log('Backend is running.');
});
