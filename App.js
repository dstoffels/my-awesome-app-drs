const express = require('express');
const app = express();

// Simple Hello World Node App for saying hello to the world...
const APP_PORT = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello to you and the rest of the world out there!');
});

app.listen(APP_PORT, () => {
	console.log(`Running app at port ${APP_PORT}`);
});
