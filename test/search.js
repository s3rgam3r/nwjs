module.exports = {
	before(browser) {
		browser.page.wiki()
		.navigate()
		
},
after(browser) {
	browser.end();
},
'Search for Pen': function (browser) {
	browser.page.wiki()
		.search('Ручка')
		.assert.urlContains('/?category=undefined&min_price=undefined&max_price=undefined&discount=undefined&min_count=undefined&max_count=undefined&brand=undefined&group_by=undefined&search=%D0%A0%D1%83%D1%87%D0%BA%D0%B0')
		console.log('myGlobalVar is: "', browser.globals.myGlobalVar, '"')
		browser.newcom('[href^="/add/in/?in=cart"]')
	},
};