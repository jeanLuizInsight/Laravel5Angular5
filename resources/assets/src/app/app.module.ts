import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { AlertBarModule } from 'ng2-alert-bar';

// Router
import { routing } from './app.routing';

// Util
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

// Components
import { AppComponent } from './app.component';

// Modules


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFontAwesomeModule,
    RouterModule,
    HttpModule,
    AlertBarModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-PT' },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
