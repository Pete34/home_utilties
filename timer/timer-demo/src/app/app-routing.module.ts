import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'weather',
    loadChildren: () =>
      import('./features/weather/weather.module').then((m) => m.WeatherModule),
  },
  {
    path: 'timers',
    loadChildren: () =>
      import('./features/timer/timer.module').then((m) => m.TimerModule),
  },
  {
    path: 'images',
    loadChildren: () =>
      import('./features/images/images.module').then((m) => m.ImagesModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'images',
  },
  {
    path: '**',
    redirectTo: 'images',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
