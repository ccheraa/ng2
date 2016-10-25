import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ROUTES, ROUTED_COMPONENTS } from './routes';

@NgModule({
	declarations: [
		AppComponent,
		...ROUTED_COMPONENTS
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		ROUTES
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
