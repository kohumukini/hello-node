import express from 'express'

// Instantiate express object
const app = express();

// Port Mapping - Tell server what port to listen on 
const PORT = 3000; 

// Define root path
app.get('/', (req, res) => {
    // Send text to the client
    res.send('Hello, World!'); 
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http:://localhost:${PORT}`);
});