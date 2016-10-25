import { browser, element, by } from 'protractor';

class NG2App {
	navigateTo() {
		return browser.get('/');
	}
	getTitle() {
		return element(by.css('app-root h1')).getText();
	}

	getSubTitle() {
		return element(by.css('app-root h3')).getText();
	}
}

export const NG2APPTest: any = {
	name: 'NG2 page',
	function: function() {
		let page: NG2App;
		beforeEach(() => {
			page = new NG2App();
		});
		it('the title should be: NG2 - v0.1', () => {
			page.navigateTo();
			expect(page.getTitle()).toEqual('NG2');
			expect(page.getSubTitle()).toEqual('v0.1');
		});
	}
};

import { HomeTest } from './home.test';

export const TESTS = [
	NG2APPTest,
	HomeTest
];