const { Router } = require('express');

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

const indexRouter = Router();
indexRouter.get('/', (req, res) => res.render('index', { title: 'Mini Messageboard', messages: messages }));
indexRouter.get('/new', (req, res) => res.render('new'));
indexRouter.post('/new', (req, res) => {
	const inputText = req.body.text;
	const inputUser = req.body.user;
	messages.push({ text: inputText, user: inputUser, added: new Date() });
	res.redirect('/');
});
indexRouter.get('/:id', (req, res) => {
	const { id } = req.params;
	const messageID = parseInt(id);
	res.render('details', { message: messages[messageID] });
});

module.exports = indexRouter;
