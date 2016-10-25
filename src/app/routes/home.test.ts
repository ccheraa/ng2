import { browser, element, by } from 'protractor';

class HomeRoute {
	navigateTo(component: string) {
		return browser.get('/' + component);
	}
	getTitle(component: string) {
		return element(by.css('app-' + component + ' h2')).getText();
	}
}

export const HomeTest: any = {
	name: 'Home page',
	function: function() {
		let page: HomeRoute;
		beforeEach(() => {
			page = new HomeRoute();
		});
		it('the title at \'home\' should be: Home Page', () => {
			page.navigateTo('home');
			expect(page.getTitle('home')).toEqual('Home Page');
		});
		it('the title at \'contact\' should be: Contact Page', () => {
			page.navigateTo('contact');
			expect(page.getTitle('contact')).toEqual('Contact Page');
		});
		it('the title at \'about\' should be: About Page', () => {
			page.navigateTo('about');
			expect(page.getTitle('about')).toEqual('About Page');
		});
	}
};
