const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
var expect = require('chai').expect;
const screen = {
	width: 640, 
	height: 480
};

describe('TESTE', function() {
	this.timeout(30000);
	let driver;
	let vars;

	beforeEach(async () => {
		driver = await new Builder().forBrowser('chrome')
			.setChromeOptions(new chrome.Options().headless().windowSize(screen))
			.build();
		vars = {};
	});
	afterEach(async () => {
		await driver.quit();
	});
	it('TESTE', async () => {
		await driver.get('https://www3.cin.ufpe.br/br/');
		
		await driver.findElement(By.css(".fa-search")).click();

		await driver.findElement(By.name("term")).click();

		await driver.findElement(By.name("term")).sendKeys("Busca teste");

		await driver.findElement(By.name("term")).sendKeys(Key.ENTER);
	
		await driver.getTitle().then(function(title) {
			expect(title).equals("CIn - Centro de Informática da UFPE | Resultado da busca");
		});
	})
});