const express = require('express');
const cors = require('cors')

const app = express();

const parser = require('body-parser')

app.use(cors())
app.use(parser.json())

app.use(require('./routes/routeIndex'))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅Cors enabled server listening on PORT: ${app.get("port")} 🌟`);
});
