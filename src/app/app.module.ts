import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { HeroComponent } from './components/home/hero/hero.component';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, HeroComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
