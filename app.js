const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/status', (req, res) => {
  res.json({ status: 'operational', version: '1.0.0' });
});

// Only start the server if the file is run directly (not in tests)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = app; // Export for testing