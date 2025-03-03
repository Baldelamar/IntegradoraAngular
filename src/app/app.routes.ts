import { Routes } from '@angular/router';
import { IndexComponent } from './views/welcome/index/index.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { LoginComponent } from './views/auth/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    }
    ,
    {
        path: 'Index',
        component: IndexComponent
    },
    {
        path: 'Login',
        component: LoginComponent
    },
    {
        path: 'Register',
        component: RegisterComponent
    }
];
