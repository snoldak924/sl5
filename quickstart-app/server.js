const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', app: 'quickstart-app' });
});

app.listen(port, () => {
  console.log(`quickstart-app listening on http://localhost:${port}`);
});
