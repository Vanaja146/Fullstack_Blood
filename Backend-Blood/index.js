const express = require('express');
const mongoose = require('mongoose');
const donorRoutes = require('./src/routes/donorRoutes'); // Update path to donor routes
const recipientRoutes = require('./src/routes/recipientRoutes'); // Update path to recipient routes
const bloodAvailabilityRoutes = require('./src/routes/bloodAvailabilityRoutes'); // Update path to blood availability routes
const dotenv = require('dotenv');
const cors=require("cors")
const path = require('path');

dotenv.config(); // Load environment variables from .env file if available
const _dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 5010;  

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ["POST"],
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
}));
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/donors', donorRoutes); // API route for donors
app.use('/api/recipients', recipientRoutes); // API route for recipients
app.use('/api/blood-availability', bloodAvailabilityRoutes); // API route for blood availability

app.use(express.static(path.join(_dirname,"/frontend/vite-project/dist")));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","vite-project","index.html"));
})
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
