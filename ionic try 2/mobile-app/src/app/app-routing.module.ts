import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'music', pathMatch: 'full' },
  {
    path: 'music',
    children: [
      {
        path: '',
        loadChildren: './music/music.module#MusicPageModule'
      },
      {
        path: ':musicasId',
        loadChildren:
          './music/musicas-video/musicas-video.module#MusicasVideoPageModule'
      }
    ]
  },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
