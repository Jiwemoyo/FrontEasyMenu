import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
//import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component'; // Asegúrate de crear este componente más adelante

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //{ path: 'recipes', component: RecipeListComponent, canActivate: [AuthGuard] }, // Ejemplo de ruta protegida
  { path: 'home', component: HomeComponent }, // Ruta para la página de inicio
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
