import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title: string = 'NG2';
	subtitle: string = 'v0.1';
	routes = [
		{text: 'Home', url: 'home'},
		{text: 'Contact', url: 'contact'},
		{text: 'About', url: 'about'},
	];
}
