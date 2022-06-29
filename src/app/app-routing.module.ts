import { MatInputModule } from '@angular/material/input';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './user-details/register/register.component';
import { HomeComponent } from './user-details/home/home.component';
import { LoginComponent } from './user-details/login/login.component';
import { UpdateComponent } from './user-details/update/update.component';
import { GetdetailsComponent } from './user-details/getdetails/getdetails.component';
import { ViewComponent } from './user-details/view/view.component';
import { AuthGuard } from './auth.guard';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes :Routes=[
  {path:'',component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'home',canActivate:[AuthGuard],component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'update/:roll',component:UpdateComponent},
  {path:'getdetails',component:GetdetailsComponent},
  {path:'view/:roll',component:ViewComponent},
  {path:'admin-login',component:AdminLoginComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      preloadingStrategy :PreloadAllModules
    })
    ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
  constructor(){
    console.log('routing module loaded');
  }
}
