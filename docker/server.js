const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use((req, res, next) => {
  console.log(`📥 ${req.method} ${req.url}`);
  next();
});


app.get('/test', (req, res) => {
  res.json({ message: '✅ Test route working perfectly!' });
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
