import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BordersComponent } from './borders/borders.component';
import { ColorsComponent } from './colors/colors.component';
import { LoginComponent } from './login/login.component';
import { OthersComponent } from './others/others.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'borders',
    component: BordersComponent
  },
  {
    path: 'colors',
    component: ColorsComponent
  },
  {
    path: 'others',
    component: OthersComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
