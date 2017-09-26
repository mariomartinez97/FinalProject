import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';
import { AuthComponent } from './components/auth.component';
import { SecurityFinderComponent } from './components/security-finder.component';
import { ChartComponent } from './components/chart.component';
import { SecuritiesComponent } from './components/securities.component';
import { SecurityFilterPipe } from './pipes/security-filter.pipe';
import { HistoricalPricesComponent } from './components/historical-prices.component';
import { PortfolioComponent } from './components/portfolio.component';
import { SecurityDetailComponent } from './components/security-detail.component';
import { AboutComponent } from './components/about.component';
import { LandingPageComponent } from './components/landing-page.component';
import { AuthGuardComponent } from './components/authguard.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'securities', component: SecuritiesComponent },
  { path: 'prices/:ticker', component: HistoricalPricesComponent },
  { path: 'portfolio', component: PortfolioComponent, canActivate: [AuthGuardComponent] },
  { path: 'security-detail/:ticker', component: SecurityDetailComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
