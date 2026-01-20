// Import the express module
import express from 'express';

// define a port number where the server will listen
const PORT = 3000;

// Create an Express application
const app = express();
// Java example

// Define "root" path
app.get('/', (req, res) =>{

    // send a message to the client
    res.send('Hello, World!');
});

// 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});