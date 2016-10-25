/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ROUTES, ROUTED_COMPONENTS } from './routes';
import { APP_BASE_HREF } from '@angular/common';

describe('App: NG2', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				...ROUTED_COMPONENTS
			],
			imports: [
				ROUTES
			],
			providers: [
				{provide: APP_BASE_HREF, useValue : '/' }
			]
		});
	});

	it('should create the app', async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it(`should have as title 'NG2 - v0.1'`, async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('NG2');
		expect(app.subtitle).toEqual('v0.1');
	}));

	it('should render title in a h1 tag', async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		let compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('NG2');
	}));
});
