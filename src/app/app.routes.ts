import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


//REDIRECCIONES 
export const ROUTES: Routes=[
{path: 'home', component: HomeComponent},
{path: 'search', component: SearchComponent},
<<<<<<< HEAD
{path:'', pathMatch: 'full', redirectTo:'home'},
=======
//{path:'', pathMatch: 'full', redirectTo:'home'},
>>>>>>> feb6dd41587d2e44e1effb2f1ae1b83fe8125c7b
//QUE ME REDIRECCIONE CUALQUIER PATH AL HOME
{path:'**', pathMatch:'full', redirectTo:'home'} 
];