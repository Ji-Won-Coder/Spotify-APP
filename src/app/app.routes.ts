import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


//REDIRECCIONES 
export const ROUTES: Routes=[
{path: 'home', component: HomeComponent},
{path: 'search', component: SearchComponent},
//{path:'', pathMatch: 'full', redirectTo:'home'},
//QUE ME REDIRECCIONE CUALQUIER PATH AL HOME
{path:'**', pathMatch:'full', redirectTo:'home'} 
];