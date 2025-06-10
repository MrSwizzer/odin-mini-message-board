const express = require('express');
const indexRouter = require('./routes/indexRouter');
const path = require('node:path');

const app = express();

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Express is listening on Port: ${PORT}`);
});
