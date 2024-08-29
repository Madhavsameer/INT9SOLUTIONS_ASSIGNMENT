// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const axios= require('axios');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));
// Define the Keep-Alive function
const keepAlive = async () => {
  try {
    const response = await axios.get('https://int9solutions-assignment-1.onrender.com'); // Ping any of your existing API endpoints
    if (response.status === 200) {
      console.log('Keep-alive ping successful.');
    } else {
      console.log(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error in keep-alive ping: ${error.message}`);
  }
};

// Set an interval to ping the server every 5 minutes (300,000 ms)
setInterval(keepAlive, 300000);

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
app.use('/api/auth', authRoutes);
app.use('/api', sellerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
