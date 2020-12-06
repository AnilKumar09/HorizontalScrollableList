import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuiPopupModule, FuiSidebarModule } from 'ngx-fomantic-ui';
import { HeaderComponent } from './container/header/header.component';
import { ContentPageComponent } from './container/content-page/content-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuiSidebarModule,
    FuiPopupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
