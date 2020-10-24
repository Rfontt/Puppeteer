const puppeteer = require("puppeteer");

(async () => {
	browser = await puppeteer.launch();
	page = await browser.newPage({
		width: 1920,
		height: 1080
	});

	await page.goto('https://github.com/explore');
	await page.screenshot({ path: 'github.png' })
	await browser.close();
})();