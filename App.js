const express = require('express');
const app = express();

// Simple Hello Word Node App
const APP_PORT = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello danimal! Nice to see you!');
});

app.listen(APP_PORT, () => {
	console.log(`Running app at port ${APP_PORT}`);
});
