const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto('https://www.stoodi.com.br/blog/fisica/cinematica-vetorial/');
	await page.pdf({path: 'cinematica-vetorial.pdf', format: 'A4'});
	await browser.close();
})();