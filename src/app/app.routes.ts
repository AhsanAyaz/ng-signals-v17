import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'room',
  },
  {
    path: 'room',
    loadComponent: () =>
      import('./room/room.component').then((m) => m.RoomComponent),
  },
];
