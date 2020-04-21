import { NewAppComponent } from './new-app/new-app.component';
import { EmptyComponent } from './empty/empty.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'new/app',
  component: NewAppComponent
}, {
  path: '**',
  component: EmptyComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
