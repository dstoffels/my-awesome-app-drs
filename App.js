const express = require('express');
const app = express();

// Simple Hello World Node App for saying hello to the world...
const APP_PORT = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello World!'),
		() => {
			console.log(`Running at at port ${APP_PORT}`);
		};
});

app.listen(() => {
	console.log(`Running app at port ${APP_PORT}`);
});
