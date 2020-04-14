import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => 
    m.TabsPageModule)},
  {
    path: 'character-details',
    loadChildren: () => import('./pages/character-details/character-details.module').then( m => m.CharacterDetailsPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }