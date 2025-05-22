const express = require('express');
const path = require('path');
const app = express();

// Serve static files if needed
app.use(express.static('public'));

// Route to serve the form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});
