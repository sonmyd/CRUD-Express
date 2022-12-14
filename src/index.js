const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const bomberoRoutes = require('./routes/bomberos');
const santaRitaRoutes = require('./routes/santa_rita');
const ciudadelaRoutes = require('./routes/ciudadela');
const cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
//enable request url
app.use(cors());
//middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', bomberoRoutes);
app.use('/api', santaRitaRoutes);
app.use('/api', ciudadelaRoutes);

// routes
app.get('/', (req, res) => {
  res.send('Welcome to');
});

// mongodb connection
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('un error ', err));

app.listen(port, () => {
  console.log('listening on port');
});
