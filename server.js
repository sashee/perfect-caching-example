const express = require('express')


const app = express();

const logPath = (req, res, next) => {
	console.log(`Request to: ${req.originalUrl}`);
	next();
}

app.get('/',
	logPath,
	(req, res, next) => {
		res.header("Cache-Control", "no-cache, no-store, must-revalidate");
		res.header("Pragma", "no-cache");
		res.header("Expires", "0");
		next();
	},
	(req, res) => {
		res.sendFile(`${__dirname}/dist/index.html`);
	}
);

app.get('/:filename',
	logPath,
	(req, res, next) => {
		res.header("Cache-Control", "max-age=31536000");
		next();
	},
	(req, res) => {
		res.sendFile(`${__dirname}/dist/${req.params.filename}`);
	}
);

app.listen(3000);

