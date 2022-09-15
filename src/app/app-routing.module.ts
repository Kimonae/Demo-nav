import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: '', component: BienvenueComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '**', component: PageNotFoundComponent },
];//indiquer le chemin d'un composant, si vide alors Bienvenue Comp


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
