/**
 * Created by macuser on 6/25/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';


const appRoutes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component : HomeComponent  },
  { path: 'acercademi', component : AcercademiComponent },
  { path: 'blog', component : BlogComponent },
  { path: 'contacto', component : ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
