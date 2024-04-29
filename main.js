const express = require('express');

const app = express();

const PORT = process.env.PORT || 4193;

app.use('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
