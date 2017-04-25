module.exports = (key) => {
	return require(`${__dirname}/messages.json`)[key];
};