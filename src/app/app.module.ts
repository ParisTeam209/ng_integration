import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';
import { NewAppComponent } from './new-app/new-app.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    NewAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
  ],
  providers: [],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {

  }

  ngDoBootstrap(appRef: ApplicationRef) {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
    appRef.bootstrap(AppComponent);
  }
}
