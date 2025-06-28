import { Routes } from '@angular/router';
import { Home } from './components/Homepage/home/home';
import { Login } from './components/Auth/login/login';
import { Auth } from './components/Auth/auth/auth';

export const routes: Routes = [
    { path: '', redirectTo: 'Homepage', pathMatch: 'full' },
    { path: 'Homepage', component: Home },
    {
        path: 'Auth',component: Auth, children: [
            { path: 'Login', component: Login },
        ]
    }
];
