import { Routes } from '@angular/router';
import { IndexComponent } from './views/welcome/index/index.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { LoginComponent } from './views/auth/login/login.component';
import { NuestrosSensoresComponent } from './views/welcome/nuestros-sensores/nuestros-sensores.component';
import { SobreNosotrosComponent } from './views/welcome/sobre-nosotros/sobre-nosotros.component';
import { ParaQuienComponent } from './views/welcome/para-quien/para-quien.component';
import { GraficaComponent } from './views/user/grafica/grafica.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    }
    ,
    {
        // RUTA INDEX QUE VERAN LOS USUARIOS QUE NO ESTEN LOGUEADOS
        path: 'Index',
        component: IndexComponent
    },
    {
        //RUTA PARA QUE LOS USUARIOS SE LOGUEEN
        path: 'Login',
        component: LoginComponent
    },
    {
        //RUTA PARA QUE LOS USUARIOS SE REGISTREN
        path: 'Register',
        component: RegisterComponent
    },
    {
        // RUTA PARA LOS SENSORES QUE OFRECEMOS
        path: 'NuestrosSensores',
        component: NuestrosSensoresComponent
    },
    {
        // RUTA SOBRE NUESTRA INFORMACION Y NUESTRO OBJETIVO
        path: 'SobreNosotros',
        component: SobreNosotrosComponent
    },
    {
        //RUTA PARA QUIENES ESTA DIRIGIDO EL PROYECTO
        path: 'PublicoDirigido',
        component: ParaQuienComponent
    },
    {
        //RUTA PARA LA GRAFICA DE LOS SENSORES
        path: 'Graficas',
        component: GraficaComponent
    }
];
