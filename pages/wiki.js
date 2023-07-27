const pageCommands = {
	search(word) {
		this
			.setValue('@searchBar:', [word, browser.Keys.ENTER])
		return this; // Return page object for chaining
	}
};
module.exports = {
	url: 'http://testshop.sedtest-school.ru/',
	commands: [pageCommands],
	elements: {
		welcome: '#mp-welcome',
		searchBar: {selector: '//input[@name="search"]', locateStrategy: 'xpath'},
		pageURL: '/?category=undefined&min_price=undefined&max_price=undefined&discount=undefined&min_count=undefined&max_count=undefined&brand=undefined&group_by=undefined&search=%D0%A0%D1%83%D1%87%D0%BA%D0%B0'
}
}