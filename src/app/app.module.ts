import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pages
import { ProfileComponent } from './pages/profile/profile.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ExchangeListComponent } from './pages/exchange-list/exchange-list.component';
import { ExchangeDetailsComponent } from './pages/exchange-details/exchange-details.component';
import { AboutComponent } from './pages/about/about.component';
import { DebugComponent } from './pages/debug/debug.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PageNotFoundComponent,
    HomeComponent,
    ExchangeListComponent,
    ExchangeDetailsComponent,
    AboutComponent,
    DebugComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
