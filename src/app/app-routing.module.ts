import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { DebugComponent } from './pages/debug/debug.component';
import { ExchangeDetailsComponent } from './pages/exchange-details/exchange-details.component';
import { ExchangeListComponent } from './pages/exchange-list/exchange-list.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exchanges', component: ExchangeListComponent },
  { path: 'exchanges/:id', component: ExchangeDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'debug', component: DebugComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
