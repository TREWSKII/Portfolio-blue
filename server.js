const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const html = require('./routes/htmlRoutes')

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', html);
// app.use('/api', apijs);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
