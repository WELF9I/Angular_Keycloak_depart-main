import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { AuthGuard } from './guards/secure.guard';

const routes: Routes = [
  {path: "cours", component : CoursComponent,canActivate:[AuthGuard],
    data : {roles:['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
